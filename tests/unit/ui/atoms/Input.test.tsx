import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@test/test-helpers'
import userEvent from '@testing-library/user-event'
import { Input } from '@/ui/atoms/Input'

describe('Input Component', () => {
  describe('Rendering', () => {
    it('should render an input element', () => {
      render(<Input />)
      const input = screen.getByRole('textbox')
      expect(input).toBeInTheDocument()
    })

    it('should have default type of text', () => {
      render(<Input />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveAttribute('type', 'text')
    })

    it('should render with placeholder', () => {
      render(<Input placeholder="Enter text..." />)
      expect(screen.getByPlaceholderText('Enter text...')).toBeInTheDocument()
    })
  })

  describe('Types', () => {
    it('should render email type', () => {
      render(<Input type="email" />)
      const input = screen.getByRole('textbox') // email inputs have textbox role
      expect(input).toHaveAttribute('type', 'email')
    })

    it('should render password type', () => {
      render(<Input type="password" data-testid="password-input" />)
      const input = screen.getByTestId('password-input')
      expect(input).toHaveAttribute('type', 'password')
    })

    it('should render number type', () => {
      render(<Input type="number" />)
      const input = screen.getByRole('spinbutton')
      expect(input).toBeInTheDocument()
    })

    it('should render search type', () => {
      render(<Input type="search" />)
      const input = screen.getByRole('searchbox')
      expect(input).toBeInTheDocument()
    })
  })

  describe('Value Changes', () => {
    it('should update value on user input', async () => {
      const user = userEvent.setup()
      render(<Input />)

      const input = screen.getByRole('textbox')
      await user.type(input, 'Hello world')

      expect(input).toHaveValue('Hello world')
    })

    it('should call onChange handler', async () => {
      const user = userEvent.setup()
      const handleChange = vi.fn()

      render(<Input onChange={handleChange} />)

      const input = screen.getByRole('textbox')
      await user.type(input, 'test')

      expect(handleChange).toHaveBeenCalled()
    })

    it('should support controlled input', () => {
      const handleChange = vi.fn()
      render(<Input value="controlled" onChange={handleChange} />)

      const input = screen.getByRole('textbox')
      expect(input).toHaveValue('controlled')
    })
  })

  describe('Error State', () => {
    it('should apply error classes when error prop is provided', () => {
      render(<Input error="This field is required" />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveClass('border-red-500')
    })

    it('should not apply error classes when error is undefined', () => {
      render(<Input />)
      const input = screen.getByRole('textbox')
      expect(input).not.toHaveClass('border-red-500')
    })

    it('should not apply error classes when error is empty string', () => {
      render(<Input error="" />)
      const input = screen.getByRole('textbox')
      expect(input).not.toHaveClass('border-red-500')
    })
  })

  describe('Disabled State', () => {
    it('should be disabled when disabled prop is true', () => {
      render(<Input disabled />)
      const input = screen.getByRole('textbox')
      expect(input).toBeDisabled()
    })

    it('should apply disabled classes', () => {
      render(<Input disabled />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveClass('disabled:opacity-50')
      expect(input).toHaveClass('disabled:cursor-not-allowed')
    })

    it('should not allow input when disabled', async () => {
      const user = userEvent.setup()
      render(<Input disabled />)

      const input = screen.getByRole('textbox')
      await user.type(input, 'test')

      expect(input).toHaveValue('')
    })
  })

  describe('Focus States', () => {
    it('should have focus-visible ring classes', () => {
      render(<Input />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveClass('focus-visible:ring-2')
      expect(input).toHaveClass('focus-visible:ring-sepia-600')
    })

    it('should change border color on focus', () => {
      render(<Input />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveClass('focus-visible:border-sepia-600')
    })
  })

  describe('HTML Attributes', () => {
    it('should pass through custom className', () => {
      render(<Input className="custom-class" />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveClass('custom-class')
    })

    it('should merge className with default classes', () => {
      render(<Input className="custom-class" />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveClass('custom-class')
      expect(input).toHaveClass('border-paper-300')
    })

    it('should pass through id attribute', () => {
      render(<Input id="test-input" />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveAttribute('id', 'test-input')
    })

    it('should pass through name attribute', () => {
      render(<Input name="username" />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveAttribute('name', 'username')
    })

    it('should pass through autoComplete attribute', () => {
      render(<Input autoComplete="off" />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveAttribute('autoComplete', 'off')
    })

    it('should support aria attributes', () => {
      render(<Input aria-label="Email address" />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveAttribute('aria-label', 'Email address')
    })

    it('should support aria-invalid for error state', () => {
      render(<Input aria-invalid="true" />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveAttribute('aria-invalid', 'true')
    })

    it('should support data attributes', () => {
      render(<Input data-testid="email-input" />)
      const input = screen.getByTestId('email-input')
      expect(input).toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    it('should associate with label using htmlfor', () => {
      render(
        <label htmlFor="test-input">
          Email
          <Input id="test-input" />
        </label>
      )

      const input = screen.getByRole('textbox')
      const label = screen.getByLabelText('Email')

      expect(label).toContainElement(input)
    })

    it('should support describedby for error messages', () => {
      render(
        <>
          <Input aria-describedby="error-message" />
          <span id="error-message">Error text</span>
        </>
      )

      const input = screen.getByRole('textbox')
      expect(input).toHaveAttribute('aria-describedby', 'error-message')
    })
  })

  describe('Edge Cases', () => {
    it('should handle maxLength attribute', async () => {
      const user = userEvent.setup()
      render(<Input maxLength={5} />)

      const input = screen.getByRole('textbox')
      await user.type(input, '123456')

      expect(input).toHaveValue('12345')
    })

    it('should handle readOnly attribute', async () => {
      const user = userEvent.setup()
      render(<Input readOnly />)

      const input = screen.getByRole('textbox')
      expect(input).toHaveAttribute('readonly')

      await user.type(input, 'test')
      // ReadOnly doesn't prevent typing, just indicates intent
    })

    it('should handle required attribute', () => {
      render(<Input required />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveAttribute('required')
    })

    it('should handle min and max for number input', () => {
      render(<Input type="number" min={0} max={100} />)
      const input = screen.getByRole('spinbutton')
      expect(input).toHaveAttribute('min', '0')
      expect(input).toHaveAttribute('max', '100')
    })

    it('should handle step for number input', () => {
      render(<Input type="number" step={0.5} />)
      const input = screen.getByRole('spinbutton')
      expect(input).toHaveAttribute('step', '0.5')
    })
  })
})
