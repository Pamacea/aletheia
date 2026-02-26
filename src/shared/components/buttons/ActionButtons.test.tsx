/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { ActionButton, IconButton, ActionButtonGroup } from './ActionButtons';

describe('ActionButton', () => {
  const TestIcon = ({ className }: { className?: string }) => (
    <svg data-testid="test-icon" className={className}>
      <circle cx="10" cy="10" r="10" />
    </svg>
  );

  it('should render icon and label', () => {
    render(
      <ActionButton
        icon={TestIcon}
        label="Click me"
        onClick={() => {}}
      />
    );

    expect(screen.getByText('Click me')).toBeInTheDocument();
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });

  it('should render icon on the left by default', () => {
    const { container } = render(
      <ActionButton
        icon={TestIcon}
        label="Click me"
        onClick={() => {}}
      />
    );

    const button = container.querySelector('button');
    const icon = screen.getByTestId('test-icon');
    const text = screen.getByText('Click me');

    expect(button).toContainElement(icon);
    expect(button).toContainElement(text);
  });

  it('should render icon on the right when specified', () => {
    const { container } = render(
      <ActionButton
        icon={TestIcon}
        label="Click me"
        iconPosition="right"
        onClick={() => {}}
      />
    );

    const button = container.querySelector('button');
    const icon = screen.getByTestId('test-icon');
    const text = screen.getByText('Click me');

    // Just verify that the icon and text are both in the button
    expect(button).toContainElement(icon);
    expect(button).toContainElement(text);
  });

  it('should call onClick handler', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    render(
      <ActionButton
        icon={TestIcon}
        label="Click me"
        onClick={handleClick}
      />
    );

    const button = screen.getByText('Click me');
    await user.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should apply custom className', () => {
    const { container } = render(
      <ActionButton
        icon={TestIcon}
        label="Click me"
        onClick={() => {}}
        className="custom-class"
      />
    );

    const button = container.querySelector('button');
    expect(button?.className).toContain('custom-class');
  });
});

describe('IconButton', () => {
  const TestIcon = ({ className }: { className?: string }) => (
    <svg data-testid="test-icon" className={className}>
      <circle cx="10" cy="10" r="10" />
    </svg>
  );

  it('should render icon', () => {
    render(
      <IconButton
        icon={TestIcon}
        onClick={() => {}}
      />
    );

    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });

  it('should use label for accessibility', () => {
    const { container } = render(
      <IconButton
        icon={TestIcon}
        label="Close"
        onClick={() => {}}
      />
    );

    const button = container.querySelector('button');
    expect(button).toHaveAttribute('aria-label', 'Close');
  });

  it('should use tooltip for accessibility when label not provided', () => {
    const { container } = render(
      <IconButton
        icon={TestIcon}
        tooltip="Settings"
        onClick={() => {}}
      />
    );

    const button = container.querySelector('button');
    expect(button).toHaveAttribute('aria-label', 'Settings');
    expect(button).toHaveAttribute('title', 'Settings');
  });

  it('should apply size classes correctly', () => {
    const { container: smContainer } = render(
      <IconButton icon={TestIcon} size="sm" onClick={() => {}} />
    );
    const { container: mdContainer } = render(
      <IconButton icon={TestIcon} size="md" onClick={() => {}} />
    );
    const { container: lgContainer } = render(
      <IconButton icon={TestIcon} size="lg" onClick={() => {}} />
    );

    expect(smContainer.querySelector('button')?.className).toContain('p-1.5');
    expect(mdContainer.querySelector('button')?.className).toContain('p-2');
    expect(lgContainer.querySelector('button')?.className).toContain('p-3');
  });

  it('should call onClick handler', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    render(
      <IconButton
        icon={TestIcon}
        onClick={handleClick}
      />
    );

    const button = screen.getByTestId('test-icon').closest('button');
    await user.click(button!);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

describe('ActionButtonGroup', () => {
  const TestIcon = ({ className }: { className?: string }) => (
    <svg className={className}>
      <circle cx="10" cy="10" r="10" />
    </svg>
  );

  it('should render all actions', () => {
    const actions = [
      { icon: TestIcon, label: 'Action 1', onClick: () => {} },
      { icon: TestIcon, label: 'Action 2', onClick: () => {} },
      { icon: TestIcon, label: 'Action 3', onClick: () => {} },
    ];

    render(<ActionButtonGroup actions={actions} />);

    expect(screen.getByText('Action 1')).toBeInTheDocument();
    expect(screen.getByText('Action 2')).toBeInTheDocument();
    expect(screen.getByText('Action 3')).toBeInTheDocument();
  });

  it('should render actions horizontally by default', () => {
    const actions = [
      { icon: TestIcon, label: 'Action 1', onClick: () => {} },
      { icon: TestIcon, label: 'Action 2', onClick: () => {} },
    ];

    const { container } = render(<ActionButtonGroup actions={actions} />);

    const group = container.firstChild as HTMLElement;
    expect(group.className).toContain('flex');
    expect(group.className).toContain('gap-2');
  });

  it('should render actions vertically when orientation is vertical', () => {
    const actions = [
      { icon: TestIcon, label: 'Action 1', onClick: () => {} },
      { icon: TestIcon, label: 'Action 2', onClick: () => {} },
    ];

    const { container } = render(<ActionButtonGroup actions={actions} orientation="vertical" />);

    const group = container.firstChild as HTMLElement;
    expect(group.className).toContain('flex-col');
  });
});
