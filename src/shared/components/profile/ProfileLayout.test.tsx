/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ProfileLayout, ProfileContentGrid } from './ProfileLayout';

describe('ProfileLayout', () => {
  it('should render children content', () => {
    render(
      <ProfileLayout title="Test Profile">
        <div>Profile Content Here</div>
      </ProfileLayout>
    );

    expect(screen.getByText('Profile Content Here')).toBeInTheDocument();
  });

  it('should render profile title', () => {
    render(
      <ProfileLayout title="Dashboard">
        <div>Content</div>
      </ProfileLayout>
    );

    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });

  it('should render subtitle when provided', () => {
    render(
      <ProfileLayout title="Dashboard" subtitle="Welcome back">
        <div>Content</div>
      </ProfileLayout>
    );

    expect(screen.getByText('Welcome back')).toBeInTheDocument();
  });

  it('should not render header when title and subtitle are missing', () => {
    const { container } = render(
      <ProfileLayout>
        <div>Content</div>
      </ProfileLayout>
    );

    expect(container.querySelector('header')).not.toBeInTheDocument();
  });

  it('should apply custom className', () => {
    const { container } = render(
      <ProfileLayout title="Test" className="custom-class">
        <div>Content</div>
      </ProfileLayout>
    );

    const layoutDiv = container.firstChild as HTMLElement;
    expect(layoutDiv.className).toContain('custom-class');
  });

  it('should have proper semantic structure with header', () => {
    const { container } = render(
      <ProfileLayout title="Test">
        <div>Content</div>
      </ProfileLayout>
    );

    expect(container.querySelector('header')).toBeInTheDocument();
    expect(container.querySelector('main')).toBeInTheDocument();
  });
});

describe('ProfileContentGrid', () => {
  it('should render sidebar and main content', () => {
    const sidebar = <aside data-testid="sidebar">Sidebar</aside>;
    const content = <main data-testid="content">Content</main>;

    render(
      <ProfileContentGrid sidebar={sidebar}>
        {content}
      </ProfileContentGrid>
    );

    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    expect(screen.getByTestId('content')).toBeInTheDocument();
  });

  it('should apply correct grid classes', () => {
    const sidebar = <aside>Sidebar</aside>;
    const content = <main>Content</main>;

    const { container } = render(
      <ProfileContentGrid sidebar={sidebar}>
        {content}
      </ProfileContentGrid>
    );

    const grid = container.firstChild as HTMLElement;
    expect(grid.className).toContain('grid');
    expect(grid.className).toContain('grid-cols-1');
    expect(grid.className).toContain('lg:grid-cols-4');
  });

  it('should apply custom className', () => {
    const sidebar = <aside>Sidebar</aside>;
    const content = <main>Content</main>;

    const { container } = render(
      <ProfileContentGrid sidebar={sidebar} className="custom-class">
        {content}
      </ProfileContentGrid>
    );

    const grid = container.firstChild as HTMLElement;
    expect(grid.className).toContain('custom-class');
  });
});
