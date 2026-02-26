import { render, RenderOptions } from '@testing-library/react'
import { ReactElement } from 'react'

// Custom render function with providers if needed
export function renderWithProviders(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) {
  // In the future, add QueryClient, Theme, etc. providers here
  return render(ui, options)
}

// Re-export everything from React Testing Library
export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'
