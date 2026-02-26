/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { LoadingState, CardSkeleton, ListSkeleton } from './LoadingState';

describe('LoadingState', () => {
  it('should render spinner by default', () => {
    const { container } = render(<LoadingState />);

    expect(container.querySelector('.animate-spin')).toBeInTheDocument();
  });

  it('should render message when provided', () => {
    render(<LoadingState message="Loading data..." />);

    expect(screen.getByText('Loading data...')).toBeInTheDocument();
  });

  it('should render skeleton type', () => {
    const { container } = render(<LoadingState type="skeleton" />);

    expect(container.querySelector('.animate-pulse')).toBeInTheDocument();
  });

  it('should render dots type', () => {
    const { container } = render(<LoadingState type="dots" />);

    const dots = container.querySelectorAll('.animate-bounce');
    expect(dots.length).toBe(3);
  });

  it('should render dots with message', () => {
    render(<LoadingState type="dots" message="Please wait..." />);

    expect(screen.getByText('Please wait...')).toBeInTheDocument();
  });

  it('should apply correct size classes', () => {
    const { container: smContainer } = render(<LoadingState size="sm" />);
    const { container: mdContainer } = render(<LoadingState size="md" />);
    const { container: lgContainer } = render(<LoadingState size="lg" />);

    expect(smContainer.querySelector('.w-4.h-4')).toBeInTheDocument();
    expect(mdContainer.querySelector('.w-8.h-8')).toBeInTheDocument();
    expect(lgContainer.querySelector('.w-12.h-12')).toBeInTheDocument();
  });
});

describe('CardSkeleton', () => {
  it('should render card skeleton structure', () => {
    const { container } = render(<CardSkeleton />);

    expect(container.querySelector('.animate-pulse')).toBeInTheDocument();
    expect(container.querySelector('.p-6')).toBeInTheDocument();
  });

  it('should apply custom className', () => {
    const { container } = render(<CardSkeleton className="custom-class" />);

    const card = container.querySelector('.p-6');
    expect(card?.className).toContain('custom-class');
  });
});

describe('ListSkeleton', () => {
  it('should render specified count of skeletons', () => {
    const { container } = render(<ListSkeleton count={5} />);

    const skeletons = container.querySelectorAll('.animate-pulse');
    expect(skeletons.length).toBe(5);
  });

  it('should render default count of 3', () => {
    const { container } = render(<ListSkeleton />);

    const skeletons = container.querySelectorAll('.animate-pulse');
    expect(skeletons.length).toBe(3);
  });

  it('should apply custom className', () => {
    const { container } = render(<ListSkeleton className="custom-class" />);

    const list = container.firstChild as HTMLElement;
    expect(list.className).toContain('custom-class');
  });
});
