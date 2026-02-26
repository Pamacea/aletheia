/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { EmptyState, InlineEmpty } from './EmptyState';

describe('EmptyState', () => {
  it('should render title and message', () => {
    render(
      <EmptyState
        title="No Data"
        message="There is no data to display"
      />
    );

    expect(screen.getByText('No Data')).toBeInTheDocument();
    expect(screen.getByText('There is no data to display')).toBeInTheDocument();
  });

  it('should render inbox icon by default', () => {
    const { container } = render(
      <EmptyState
        title="No Data"
        message="No data available"
      />
    );

    expect(container.querySelector('.bg-sepia-100')).toBeInTheDocument();
  });

  it('should render action button when provided', () => {
    const onClick = vi.fn();

    render(
      <EmptyState
        title="No Items"
        message="Create your first item"
        action={{ label: 'Create Item', onClick }}
      />
    );

    const actionButton = screen.getByText('Create Item');
    expect(actionButton).toBeInTheDocument();

    actionButton.click();
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should render action button with href', () => {
    render(
      <EmptyState
        title="No Items"
        message="Create your first item"
        action={{ label: 'Go to Create', href: '/create' }}
      />
    );

    const actionButton = screen.getByText('Go to Create');
    expect(actionButton.closest('a')).toHaveAttribute('href', '/create');
  });

  it('should apply custom className', () => {
    const { container } = render(
      <EmptyState
        title="Test"
        message="Test message"
        className="custom-class"
      />
    );

    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain('custom-class');
  });

  it('should render custom icon', () => {
    const customIcon = <div data-testid="custom-icon">Custom Icon</div>;

    render(
      <EmptyState
        icon="custom"
        customIcon={customIcon}
        title="Test"
        message="Test message"
      />
    );

    expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
  });
});

describe('InlineEmpty', () => {
  it('should render message and icon', () => {
    render(<InlineEmpty message="No items found" />);

    expect(screen.getByText('No items found')).toBeInTheDocument();
  });

  it('should render different icon types', () => {
    const { container: inboxContainer } = render(<InlineEmpty message="Test" icon="inbox" />);
    const { container: searchContainer } = render(<InlineEmpty message="Test" icon="search" />);
    const { container: fileContainer } = render(<InlineEmpty message="Test" icon="file" />);

    expect(inboxContainer.querySelector('svg')).toBeInTheDocument();
    expect(searchContainer.querySelector('svg')).toBeInTheDocument();
    expect(fileContainer.querySelector('svg')).toBeInTheDocument();
  });

  it('should apply proper styling', () => {
    const { container } = render(<InlineEmpty message="Test" />);

    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain('flex');
    expect(wrapper.className).toContain('items-center');
    expect(wrapper.className).toContain('justify-center');
  });
});
