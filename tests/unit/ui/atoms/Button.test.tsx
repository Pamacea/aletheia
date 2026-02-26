import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@test/test-helpers'
import userEvent from '@testing-library/user-event'
import { Button } from '@/ui/atoms/Button'

describe('Button Component', () => {
  describe('Rendering', () => {
    it('should render a button element', () => {
      render(<Button>Click me</Button>)
      const button = screen.getByRole('button', { name: 'Click me' })
      expect(button).toBeInTheDocument()
    })

    it('should render children text', () => {
      render(<Button>Submit</Button>)
      expect(screen.getByText('Submit')).toBeInTheDocument()
    })

    it('should render with default variant (primary)', () => {
      render(<Button>Default</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('bg-sepia-600')
    })

    it('should render with default size (md)', () => {
      render(<Button>Default</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('px-4', 'py-2')
    })
  })

  describe('Variants', () => {
    it('should apply primary variant classes', () => {
      render(<Button variant="primary">Primary</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('bg-sepia-600')
      expect(button).toHaveClass('text-paper-50')
      expect(button).toHaveClass('border-sepia-600')
    })

    it('should apply secondary variant classes', () => {
      render(<Button variant="secondary">Secondary</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('bg-transparent')
      expect(button).toHaveClass('text-sepia-600')
      expect(button).toHaveClass('border-sepia-600')
    })

    it('should apply ghost variant classes', () => {
      render(<Button variant="ghost">Ghost</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('bg-transparent')
      expect(button).toHaveClass('text-ink')
      expect(button).toHaveClass('border-transparent')
    })

    it('should apply danger variant classes', () => {
      render(<Button variant="danger">Danger</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('bg-red-600')
      expect(button).toHaveClass('text-paper-50')
      expect(button).toHaveClass('border-red-600')
    })
  })

  describe('Sizes', () => {
    it('should apply small size classes', () => {
      render(<Button size="sm">Small</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('px-3', 'py-1.5', 'text-sm')
    })

    it('should apply medium size classes', () => {
      render(<Button size="md">Medium</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('px-4', 'py-2', 'text-base')
    })

    it('should apply large size classes', () => {
      render(<Button size="lg">Large</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('px-6', 'py-3', 'text-lg')
    })
  })

  describe('Interactions', () => {
    it('should call onClick handler when clicked', async () => {
      const user = userEvent.setup()
      const handleClick = vi.fn()

      render(<Button onClick={handleClick}>Click me</Button>)

      await user.click(screen.getByRole('button'))

      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('should not call onClick when disabled', async () => {
      const user = userEvent.setup()
      const handleClick = vi.fn()

      render(
        <Button onClick={handleClick} disabled>
          Disabled
        </Button>
      )

      await user.click(screen.getByRole('button'))

      expect(handleClick).not.toHaveBeenCalled()
    })
  })

  describe('States', () => {
    it('should be disabled when disabled prop is true', () => {
      render(<Button disabled>Disabled</Button>)
      const button = screen.getByRole('button')
      expect(button).toBeDisabled()
    })

    it('should apply disabled classes', () => {
      render(<Button disabled>Disabled</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('disabled:opacity-50')
      expect(button).toHaveClass('disabled:pointer-events-none')
    })
  })

  describe('Accessibility', () => {
    it('should have focus-visible ring classes', () => {
      render(<Button>Focus Test</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('focus-visible:ring-2')
      expect(button).toHaveClass('focus-visible:ring-sepia-600')
    })

    it('should pass through ARIA attributes', () => {
      render(<Button aria-label="Close dialog">×</Button>)
      const button = screen.getByRole('button', { name: 'Close dialog' })
      expect(button).toHaveAttribute('aria-label', 'Close dialog')
    })

    it('should support disabled ARIA state', () => {
      render(<Button disabled>Disabled</Button>)
      const button = screen.getByRole('button')
      // HTML5 button elements use native disabled attribute, not aria-disabled
      // The disabled attribute is sufficient for accessibility
      expect(button).toHaveAttribute('disabled')
    })
  })

  describe('HTML Attributes', () => {
    it('should pass through custom className', () => {
      render(<Button className="custom-class">Custom</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('custom-class')
    })

    it('should merge className with default classes', () => {
      render(<Button className="custom-class">Merged</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('custom-class')
      expect(button).toHaveClass('bg-sepia-600') // default variant class
    })

    it('should pass through other HTML attributes', () => {
      render(
        <Button type="submit" name="submit-btn" value="submit">
          Submit
        </Button>
      )
      const button = screen.getByRole('button')
      expect(button).toHaveAttribute('type', 'submit')
      expect(button).toHaveAttribute('name', 'submit-btn')
      expect(button).toHaveAttribute('value', 'submit')
    })

    it('should support data attributes', () => {
      render(<Button data-testid="custom-button">Test</Button>)
      const button = screen.getByTestId('custom-button')
      expect(button).toBeInTheDocument()
    })
  })

  describe('Edge Cases', () => {
    it('should handle empty children', () => {
      render(<Button>{''}</Button>)
      const button = screen.getByRole('button')
      expect(button).toBeInTheDocument()
      expect(button).toBeEmptyDOMElement()
    })

    it('should handle null children', () => {
      render(<Button>{null}</Button>)
      const button = screen.getByRole('button')
      expect(button).toBeInTheDocument()
    })

    it('should handle complex children (icons + text)', () => {
      render(
        <Button>
          <span data-testid="icon">→</span>
          <span>Continue</span>
        </Button>
      )
      expect(screen.getByTestId('icon')).toBeInTheDocument()
      expect(screen.getByText('Continue')).toBeInTheDocument()
    })
  })
})
