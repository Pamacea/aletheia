/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { ProfileSidebar, ProfileSidebarButton } from './ProfileSidebar';

// Mock next/navigation
vi.mock('next/navigation', () => ({
  usePathname: () => '/profile/dashboard',
}));

describe('ProfileSidebar', () => {
  it('should render all default navigation items', () => {
    render(<ProfileSidebar />);

    expect(screen.getByText('Tableau de bord')).toBeInTheDocument();
    expect(screen.getByText('Notes')).toBeInTheDocument();
    expect(screen.getByText('Flashcards')).toBeInTheDocument();
    expect(screen.getByText('Favoris')).toBeInTheDocument();
  });

  it('should render custom navigation items', () => {
    const customItems = [
      { icon: ({ className }: { className: string }) => <div className={className} />, label: 'Custom 1', href: '/custom1' },
      { icon: ({ className }: { className: string }) => <div className={className} />, label: 'Custom 2', href: '/custom2' },
    ];

    render(<ProfileSidebar navItems={customItems} />);

    expect(screen.getByText('Custom 1')).toBeInTheDocument();
    expect(screen.getByText('Custom 2')).toBeInTheDocument();
  });

  it('should render badge when provided', () => {
    const navItems = [
      {
        icon: ({ className }: { className: string }) => <div className={className} />,
        label: 'Items',
        href: '/items',
        badge: 5,
      },
    ];

    render(<ProfileSidebar navItems={navItems} />);

    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('should cap badge at 99', () => {
    const navItems = [
      {
        icon: ({ className }: { className: string }) => <div className={className} />,
        label: 'Items',
        href: '/items',
        badge: 150,
      },
    ];

    render(<ProfileSidebar navItems={navItems} />);

    expect(screen.getByText('99+')).toBeInTheDocument();
  });

  it('should apply custom className', () => {
    const { container } = render(<ProfileSidebar className="custom-class" />);

    expect(container.querySelector('.custom-class')).toBeInTheDocument();
  });
});

describe('ProfileSidebarButton', () => {
  it('should render icon and label', () => {
    const Icon = ({ className }: { className: string }) => <div data-testid="icon" className={className} />;

    render(
      <ProfileSidebarButton
        icon={Icon}
        label="Test Label"
        href="/test"
      />
    );

    expect(screen.getByText('Test Label')).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('should render badge when provided', () => {
    const Icon = ({ className }: { className: string }) => <div className={className} />;

    render(
      <ProfileSidebarButton
        icon={Icon}
        label="Test"
        href="/test"
        badge={3}
      />
    );

    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('should render link with correct href', () => {
    const Icon = ({ className }: { className: string }) => <div className={className} />;

    render(
      <ProfileSidebarButton
        icon={Icon}
        label="Test"
        href="/test-path"
      />
    );

    const link = screen.getByText('Test').closest('a');
    expect(link).toHaveAttribute('href', '/test-path');
  });

  it('should show active state when isActive is true', () => {
    const Icon = ({ className }: { className: string }) => <div className={className} />;

    const { container } = render(
      <ProfileSidebarButton
        icon={Icon}
        label="Test"
        href="/test"
        isActive={true}
      />
    );

    const link = screen.getByText('Test').closest('a');
    expect(link?.className).toContain('bg-sepia-100');
  });
});
