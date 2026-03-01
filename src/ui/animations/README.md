# Aletheia Animation System

Beautiful, elegant animations powered by Framer Motion 12.34.3, designed for the literary paper aesthetic of Aletheia.

## 🎨 Design Philosophy

All animations follow these principles:

- **Subtle & Elegant**: Smooth, gentle transitions that enhance without distracting
- **Literary Aesthetic**: Inspired by paper, books, and timeless design
- **Performance First**: Optimized for 60fps with hardware acceleration
- **Accessible**: Respects `prefers-reduced-motion` media query

## 📦 Installation

The animation system uses **Framer Motion 12.34.3**, already installed in Aletheia:

```json
{
  "dependencies": {
    "framer-motion": "^12.34.3"
  }
}
```

## 🚀 Quick Start

```tsx
import {
  PageTransition,
  ScrollReveal,
  fadeInUp,
  transitions
} from '@/ui/animations';

// Page transition
export default function Page() {
  return (
    <PageTransition variant="slideUp">
      <h1>Welcome</h1>
      <p>Content fades in elegantly</p>
    </PageTransition>
  );
}

// Scroll reveal
<ScrollReveal direction="up">
  <p>Reveals when scrolling into view</p>
</ScrollReveal>

// Raw variants
<motion.div variants={fadeInUp} initial="hidden" animate="visible">
  Content
</motion.div>
```

## 📚 Components

### PageTransition

Wrapper for page-level animations with entrance and exit effects.

**Props:**
- `variant`: `'fade' | 'slideUp' | 'scale' | 'slide'` (default: `'fade'`)
- `customVariants`: Custom Variants object
- `exitAnimation`: boolean (default: `true`)
- `className`: string

**Usage:**
```tsx
<PageTransition variant="slideUp">
  <YourPageContent />
</PageTransition>
```

### ScrollReveal

Animate elements when they scroll into viewport.

**Props:**
- `direction`: `'up' | 'down' | 'left' | 'right' | 'fade' | 'scale'` (default: `'up'`)
- `delay`: number in seconds (default: `0`)
- `duration`: number in seconds (default: `0.5`)
- `threshold`: 0-1 (default: `0.1`)
- `once`: boolean (default: `true`)
- `margin`: number in pixels (default: `-50`)

**Usage:**
```tsx
// Basic
<ScrollReveal>
  <h1>Reveals on scroll</h1>
</ScrollReveal>

// With direction and delay
<ScrollReveal direction="left" delay={0.2}>
  <p>Slides from left after delay</p>
</ScrollReveal>

// Staggered list
{items.map((item, i) => (
  <ScrollReveal key={i} delay={i * 0.1}>
    <ItemCard>{item}</ItemCard>
  </ScrollReveal>
))}
```

### StaggerContainer

Animate multiple children with staggered timing.

**Props:**
- `staggerDelay`: number in seconds (default: `0.1`)
- `initialDelay`: number in seconds (default: `0`)
- `direction`: ScrollRevealDirection (default: `'up'`)
- `threshold`: 0-1 (default: `0.1`)
- `once`: boolean (default: `true`)

**Usage:**
```tsx
<StaggerContainer staggerDelay={0.15}>
  {items.map((item) => (
    <div key={item.id}>
      <ItemCard>{item}</ItemCard>
    </div>
  ))}
</StaggerContainer>
```

### StaggerItem

Individual item for manual stagger control.

**Props:**
- `direction`: ScrollRevealDirection (default: `'up'`)
- `delay`: number in seconds (optional)
- `className`: string

**Usage:**
```tsx
{items.map((item, i) => (
  <StaggerItem key={i} delay={i * 0.1}>
    <ItemCard>{item}</ItemCard>
  </StaggerItem>
))}
```

### ScrollRevealWithBlur

Reveal with blur effect for dreamy, literary feel.

**Props:**
- All ScrollReveal props
- `blurAmount`: number in pixels (default: `10`)

**Usage:**
```tsx
<ScrollRevealWithBlur blurAmount={12}>
  <blockquote>
    "The only true wisdom is in knowing you know nothing."
  </blockquote>
  <cite>— Socrates</cite>
</ScrollRevealWithBlur>
```

### SectionTransition

Animate page sections on scroll with viewport detection.

**Props:**
- `variant`: `'fadeIn' | 'fadeInUp' | 'fadeInDown'` (default: `'fadeInUp'`)
- `delay`: number in seconds (default: `0`)
- `duration`: number in seconds (default: `0.5`)
- `className`: string

**Usage:**
```tsx
<SectionTransition delay={0}>
  <HeroSection />
</SectionTransition>

<SectionTransition delay={0.1}>
  <ContentSection />
</SectionTransition>

<SectionTransition delay={0.2}>
  <FooterSection />
</SectionTransition>
```

## 🎭 Variants

Pre-built animation variants for use with `motion.div`.

### Fade Variants

```tsx
import { fadeIn, fadeInUp, fadeInDown } from '@/ui/animations';

<motion.div variants={fadeIn} />
<motion.div variants={fadeInUp} />
<motion.div variants={fadeInDown} />
```

### Slide Variants

```tsx
import { slideInLeft, slideInRight } from '@/ui/animations';

<motion.div variants={slideInLeft} />
<motion.div variants={slideInRight} />
```

### Scale Variants

```tsx
import { scaleIn, scalePulse } from '@/ui/animations';

<motion.div variants={scaleIn} />
<motion.div variants={scalePulse} />
```

### Stagger Variants

```tsx
import { staggerContainer, staggerItem } from '@/ui/animations';

<motion.div variants={staggerContainer} initial="hidden" animate="visible">
  {items.map((item) => (
    <motion.div key={item.id} variants={staggerItem}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

### Special Variants

```tsx
import {
  pageTransition,
  modalBackdrop,
  modalContent,
  drawerRight,
  drawerLeft,
  textReveal,
  characterReveal,
  heightCollapse
} from '@/ui/animations';
```

## ⚙️ Transitions

Pre-configured transition presets.

```tsx
import { transitions } from '@/ui/animations';

// Usage
<motion.div
  animate={{ opacity: 1 }}
  transition={transitions.default}
/>

// Available transitions
transitions.default    // Standard ease-in-out (0.3s)
transitions.fast       // Quick transition (0.15s)
transitions.slow       // Slow transition (0.5s)
transitions.spring     // Natural bounce
transitions.springSmooth   // Gentle spring
transitions.springBouncy   // Playful bounce
transitions.linear     // Linear motion
```

## 🎨 Best Practices

### 1. Choose the Right Animation

| Use Case | Component | Variant |
|----------|-----------|---------|
| Page navigation | `PageTransition` | `slideUp` |
| Content sections | `SectionTransition` | `fadeInUp` |
| Lists/Grids | `StaggerContainer` | `up` |
| Quotes/Emphasis | `ScrollRevealWithBlur` | - |
| Cards/Items | `ScrollReveal` | `scale` |
| Hero sections | `ScrollReveal` | `up` |

### 2. Stagger Delays

```tsx
// Good: Exponential delay for smooth feel
{items.map((item, i) => (
  <ScrollReveal key={i} delay={i * 0.1}>
    {item}
  </ScrollReveal>
))}

// Bad: Linear delay can feel robotic
{items.map((item, i) => (
  <ScrollReveal key={i} delay={i * 0.5}>
    {item}
  </ScrollReveal>
))}
```

### 3. Duration Guidelines

| Type | Duration |
|------|----------|
| Micro-interactions | 0.15s |
| Standard transitions | 0.3s |
| Page transitions | 0.5s |
| Emphasis/attention | 0.6-0.8s |

### 4. Respecting User Preferences

All Framer Motion animations automatically respect `prefers-reduced-motion`. No additional work needed.

## 📖 Examples

See `examples.tsx` for comprehensive examples:

```tsx
import {
  ExamplePageTransition,
  ExampleScrollReveal,
  ExampleDirections,
  ExampleStaggeredList,
  ExampleManualStagger,
  ExampleBlurReveal,
  ExampleCustomVariants,
  ExampleRawVariants,
  ExampleCombinedEffects
} from '@/ui/animations/examples';
```

## 🔧 Advanced Usage

### Custom Variants

```tsx
const myCustomVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 20
    }
  }
};

<PageTransition customVariants={myCustomVariants}>
  <Content />
</PageTransition>
```

### Combining Effects

```tsx
<PageTransition variant="fade">
  <SectionTransition delay={0}>
    <ScrollReveal direction="scale">
      <Content />
    </ScrollReveal>
  </SectionTransition>
</PageTransition>
```

### With Other Libraries

```tsx
// Works great with TanStack Query
const { data } = useQuery({ queryKey: ['posts'], queryFn: fetchPosts });

return (
  <PageTransition>
    {data && (
      <StaggerContainer>
        {data.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </StaggerContainer>
    )}
  </PageTransition>
);
```

## 🐛 Troubleshooting

### Animations Not Playing

1. Check if element has height/width
2. Verify `framer-motion` is installed
3. Ensure client component (`'use client'`)

### Stuttering/Jank

1. Reduce number of simultaneous animations
2. Use `will-change` CSS property sparingly
3. Check for heavy computation during animation

### Exit Animations Not Working

1. Ensure `exitAnimation={true}` on PageTransition
2. Check AnimatePresence wrapper if using nested
3. Verify unique keys on animated elements

## 📚 API Reference

### Type Exports

```tsx
import type {
  Variants,
  Transition,
  PageTransitionProps,
  ScrollRevealProps,
  StaggerContainerProps,
  StaggerItemProps,
  ScrollRevealWithBlurProps,
  SectionTransitionProps
} from '@/ui/animations';
```

## 🎯 Resources

- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Animation Examples](https://www.framer.com/motion/examples/)
- [Transition Types](https://www.framer.com/motion/transition/)

## 📝 Changelog

### v1.0.0 (2025-02-28)
- Initial release
- Core variants library
- PageTransition component
- ScrollReveal component (Framer Motion version)
- StaggerContainer and StaggerItem
- ScrollRevealWithBlur
- SectionTransition
- Comprehensive examples

---

**Built with ❤️ for Aletheia - The Philosophical Knowledge Explorer**
