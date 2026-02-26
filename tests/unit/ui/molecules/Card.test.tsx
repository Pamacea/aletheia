import { describe, it, expect, vi } from 'vitest'
import { render, screen, userEvent } from '@test/test-helpers'
import { Card } from '@/ui/molecules/Card'

describe('Card Component', () => {
  describe('Rendering', () => {
    it('should render a card div element', () => {
      render(<Card>Card content</Card>)
      const card = screen.getByText('Card content')
      expect(card).toBeInTheDocument()
      expect(card.tagName).toBe('DIV')
    })

    it('should render children content', () => {
      render(
        <Card>
          <p>Card paragraph</p>
        </Card>
      )
      expect(screen.getByText('Card paragraph')).toBeInTheDocument()
    })

    it('should apply default card classes', () => {
      render(<Card>Default Card</Card>)
      const card = screen.getByText('Default Card').parentElement
      expect(card).toHaveClass('border')
      expect(card).toHaveClass('bg-white')
      expect(card).toHaveClass('shadow-sm')
    })
  })

  describe('Header Slot', () => {
    it('should render header when provided', () => {
      render(
        <Card header={<h2>Card Header</h2>}>Content</Card>
      )
      expect(screen.getByText('Card Header')).toBeInTheDocument()
    })

    it('should not render header when not provided', () => {
      render(<Card>Content</Card>)
      const card = screen.getByText('Content').closest('.border-b')
      expect(card).toBeNull()
    })

    it('should render header with correct classes', () => {
      render(
        <Card header={<h2>Header</h2>}>Content</Card>
      )
      const header = screen.getByText('Header').closest('div')
      expect(header).toHaveClass('border-b')
      expect(header).toHaveClass('px-6')
      expect(header).toHaveClass('py-4')
    })

    it('should render complex header content', () => {
      render(
        <Card
          header={
            <div>
              <h2>Title</h2>
              <p>Subtitle</p>
            </div>
          }
        >
          Content
        </Card>
      )
      expect(screen.getByText('Title')).toBeInTheDocument()
      expect(screen.getByText('Subtitle')).toBeInTheDocument()
    })
  })

  describe('Footer Slot', () => {
    it('should render footer when provided', () => {
      render(
        <Card footer={<button>Action</button>}>Content</Card>
      )
      expect(screen.getByRole('button', { name: 'Action' })).toBeInTheDocument()
    })

    it('should not render footer when not provided', () => {
      render(<Card>Content</Card>)
      const card = screen.getByText('Content').closest('.border-t')
      expect(card).toBeNull()
    })

    it('should render footer with correct classes', () => {
      render(
        <Card footer={<span>Footer</span>}>Content</Card>
      )
      const footer = screen.getByText('Footer').closest('div')
      expect(footer).toHaveClass('border-t')
      expect(footer).toHaveClass('px-6')
      expect(footer).toHaveClass('py-4')
    })

    it('should render complex footer content', () => {
      render(
        <Card
          footer={
            <>
              <button>Cancel</button>
              <button>Submit</button>
            </>
          }
        >
          Content
        </Card>
      )
      expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument()
    })
  })

  describe('Content Area', () => {
    it('should render content in correct section', () => {
      render(
        <Card header={<h2>Header</h2>} footer={<span>Footer</span>}>
          <p>Content</p>
        </Card>
      )

      const content = screen.getByText('Content').closest('div')
      expect(content).toHaveClass('px-6')
      expect(content).toHaveClass('py-4')
    })

    it('should render multiple children', () => {
      render(
        <Card>
          <p>Paragraph 1</p>
          <p>Paragraph 2</p>
          <p>Paragraph 3</p>
        </Card>
      )

      expect(screen.getByText('Paragraph 1')).toBeInTheDocument()
      expect(screen.getByText('Paragraph 2')).toBeInTheDocument()
      expect(screen.getByText('Paragraph 3')).toBeInTheDocument()
    })

    it('should render nested elements', () => {
      render(
        <Card>
          <div>
            <span>Nested content</span>
          </div>
        </Card>
      )

      expect(screen.getByText('Nested content')).toBeInTheDocument()
    })
  })

  describe('Complete Card Structure', () => {
    it('should render all three slots together', () => {
      render(
        <Card
          header={<h2>Header</h2>}
          footer={<button>Footer Action</button>}
        >
          <p>Main Content</p>
        </Card>
      )

      expect(screen.getByText('Header')).toBeInTheDocument()
      expect(screen.getByText('Main Content')).toBeInTheDocument()
      expect(screen.getByRole('button', { name: 'Footer Action' })).toBeInTheDocument()
    })

    it('should maintain correct DOM order', () => {
      render(
        <Card
          header={<span data-testid="header">Header</span>}
          footer={<span data-testid="footer">Footer</span>}
        >
          <span data-testid="content">Content</span>
        </Card>
      )

      const card = screen.getByTestId('header').closest('.border')
      expect(card?.children[0]).toContainElement(screen.getByTestId('header'))
      expect(card?.children[1]).toContainElement(screen.getByTestId('content'))
      expect(card?.children[2]).toContainElement(screen.getByTestId('footer'))
    })
  })

  describe('HTML Attributes', () => {
    it('should pass through custom className', () => {
      render(<Card className="custom-class">Content</Card>)
      const card = screen.getByText('Content').parentElement
      expect(card).toHaveClass('custom-class')
    })

    it('should merge className with default classes', () => {
      render(<Card className="custom-class">Content</Card>)
      const card = screen.getByText('Content').parentElement
      expect(card).toHaveClass('custom-class')
      expect(card).toHaveClass('border')
      expect(card).toHaveClass('bg-white')
    })

    it('should pass through id attribute', () => {
      render(<Card id="test-card">Content</Card>)
      const card = screen.getByText('Content').closest('#test-card')
      expect(card).toBeInTheDocument()
    })

    it('should pass through data attributes', () => {
      render(<Card data-testid="test-card">Content</Card>)
      const card = screen.getByTestId('test-card')
      expect(card).toBeInTheDocument()
    })

    it('should pass through click handler', async () => {
      const handleClick = vi.fn()
      render(<Card onClick={handleClick}>Content</Card>)

      await userEvent.click(screen.getByText('Content'))
      expect(handleClick).toHaveBeenCalledTimes(1)
    })
  })

  describe('Edge Cases', () => {
    it('should handle empty children', () => {
      const { container } = render(<Card>{null}</Card>)
      const card = container.querySelector('.border')
      expect(card).toBeInTheDocument()
    })

    it('should handle header with null content', () => {
      render(<Card header={null}>Content</Card>)
      // Should not crash
      expect(screen.getByText('Content')).toBeInTheDocument()
    })

    it('should handle footer with null content', () => {
      render(<Card footer={null}>Content</Card>)
      // Should not crash
      expect(screen.getByText('Content')).toBeInTheDocument()
    })

    it('should handle only header (no content)', () => {
      render(<Card header={<h2>Only Header</h2>} />)
      expect(screen.getByText('Only Header')).toBeInTheDocument()
    })

    it('should handle only content (no header/footer)', () => {
      render(<Card>Only Content</Card>)
      expect(screen.getByText('Only Content')).toBeInTheDocument()
    })

    it('should handle very long content', () => {
      const longText = 'A'.repeat(1000)
      render(<Card>{longText}</Card>)
      expect(screen.getByText(longText)).toBeInTheDocument()
    })

    it('should handle special characters in content', () => {
      render(<Card>Special: &lt;&gt;&amp;"'</Card>)
      expect(screen.getByText('Special: <>&"\'' )).toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    it('should support ARIA attributes', () => {
      render(<Card role="article" aria-labelledby="card-title">Content</Card>)
      const card = screen.getByRole('article')
      expect(card).toHaveAttribute('aria-labelledby', 'card-title')
    })

    it('should support heading in header', () => {
      render(
        <Card header={<h2 id="card-title">Title</h2>}>Content</Card>
      )
      expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
    })
  })
})
