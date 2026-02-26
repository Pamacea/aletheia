/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { ErrorState, InlineError } from './ErrorState';

describe('ErrorState', () => {
  it('should render default title and message', () => {
    render(<ErrorState />);

    expect(screen.getByText('Une erreur est survenue')).toBeInTheDocument();
    expect(screen.getByText(/Nous n'avons pas pu charger le contenu/)).toBeInTheDocument();
  });

  it('should render custom title and message', () => {
    render(
      <ErrorState
        title="Custom Error"
        message="Something went wrong"
      />
    );

    expect(screen.getByText('Custom Error')).toBeInTheDocument();
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
  });

  it('should render retry button when onRetry provided', () => {
    const onRetry = vi.fn();

    render(<ErrorState onRetry={onRetry} />);

    const retryButton = screen.getByText('Réessayer');
    expect(retryButton).toBeInTheDocument();

    retryButton.click();
    expect(onRetry).toHaveBeenCalledTimes(1);
  });

  it('should render home button by default', () => {
    render(<ErrorState />);

    const homeButton = screen.getByText('Accueil');
    expect(homeButton).toBeInTheDocument();
    expect(homeButton.closest('a')).toHaveAttribute('href', '/');
  });

  it('should not render home button when showHomeButton is false', () => {
    render(<ErrorState showHomeButton={false} />);

    expect(screen.queryByText('Accueil')).not.toBeInTheDocument();
  });

  it('should render both retry and home buttons', () => {
    const onRetry = vi.fn();

    render(<ErrorState onRetry={onRetry} showHomeButton={true} />);

    expect(screen.getByText('Réessayer')).toBeInTheDocument();
    expect(screen.getByText('Accueil')).toBeInTheDocument();
  });

  it('should apply custom className', () => {
    const { container } = render(<ErrorState className="custom-class" />);

    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain('custom-class');
  });
});

describe('InlineError', () => {
  it('should render error message', () => {
    render(<InlineError message="Inline error message" />);

    expect(screen.getByText('Inline error message')).toBeInTheDocument();
  });

  it('should render dismiss button when onDismiss provided', () => {
    const onDismiss = vi.fn();

    const { container } = render(
      <InlineError message="Error" onDismiss={onDismiss} />
    );

    const dismissButton = container.querySelector('button[aria-label="Fermer"]');
    expect(dismissButton).toBeInTheDocument();

    dismissButton?.click();
    expect(onDismiss).toHaveBeenCalledTimes(1);
  });

  it('should not render dismiss button when onDismiss not provided', () => {
    const { container } = render(<InlineError message="Error" />);

    const dismissButton = container.querySelector('button[aria-label="Fermer"]');
    expect(dismissButton).not.toBeInTheDocument();
  });

  it('should apply error styling', () => {
    const { container } = render(<InlineError message="Error" />);

    const errorDiv = container.querySelector('.bg-red-50');
    expect(errorDiv).toBeInTheDocument();
  });
});
