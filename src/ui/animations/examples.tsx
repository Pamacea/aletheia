'use client';

/**
 * ALETHEIA - ANIMATION EXAMPLES
 * ==============================
 * This file demonstrates how to use the Framer Motion animation components.
 * Copy these patterns into your pages and components.
 */

import { motion } from 'framer-motion';
import {
  PageTransition,
  PageTransitionWrapper,
  SectionTransition,
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  ScrollRevealWithBlur,
  fadeInUp,
  staggerContainer as staggerContainerVariant,
  staggerItem as staggerItemVariant,
} from './index';

// ============================================================================
// EXAMPLE 1: Basic Page Transition
// ============================================================================

export function ExamplePageTransition() {
  return (
    <PageTransition variant="slideUp">
      <div className="min-h-screen">
        <h1 className="text-4xl font-serif mb-4">Welcome to Aletheia</h1>
        <p className="text-ink-light">
          This page content will fade and slide up elegantly.
        </p>
      </div>
    </PageTransition>
  );
}

// ============================================================================
// EXAMPLE 2: Scroll Reveal Sections
// ============================================================================

export function ExampleScrollReveal() {
  return (
    <div className="space-y-12">
      <SectionTransition delay={0}>
        <h2 className="text-3xl font-serif mb-4">First Section</h2>
        <p className="text-ink-light">
          This section fades in first when it comes into view.
        </p>
      </SectionTransition>

      <SectionTransition delay={0.1}>
        <h2 className="text-3xl font-serif mb-4">Second Section</h2>
        <p className="text-ink-light">
          This section fades in with a slight delay after the first.
        </p>
      </SectionTransition>

      <SectionTransition delay={0.2}>
        <h2 className="text-3xl font-serif mb-4">Third Section</h2>
        <p className="text-ink-light">
          This section completes the staggered reveal effect.
        </p>
      </SectionTransition>
    </div>
  );
}

// ============================================================================
// EXAMPLE 3: Scroll Reveal with Different Directions
// ============================================================================

export function ExampleDirections() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <ScrollReveal direction="up">
        <div className="p-6 bg-paper-100 rounded-lg">
          <h3 className="text-xl font-serif mb-2">Slides Up</h3>
          <p className="text-ink-light">Content slides up from below</p>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="left">
        <div className="p-6 bg-paper-100 rounded-lg">
          <h3 className="text-xl font-serif mb-2">Slides Left</h3>
          <p className="text-ink-light">Content slides in from left</p>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="right">
        <div className="p-6 bg-paper-100 rounded-lg">
          <h3 className="text-xl font-serif mb-2">Slides Right</h3>
          <p className="text-ink-light">Content slides in from right</p>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="fade">
        <div className="p-6 bg-paper-100 rounded-lg">
          <h3 className="text-xl font-serif mb-2">Fade Only</h3>
          <p className="text-ink-light">Simple fade in effect</p>
        </div>
      </ScrollReveal>
    </div>
  );
}

// ============================================================================
// EXAMPLE 4: Staggered List Items
// ============================================================================

export function ExampleStaggeredList() {
  const items = [
    { id: 1, title: 'First item', description: 'Appears first' },
    { id: 2, title: 'Second item', description: 'Appears second' },
    { id: 3, title: 'Third item', description: 'Appears third' },
    { id: 4, title: 'Fourth item', description: 'Appears fourth' },
  ];

  return (
    <StaggerContainer staggerDelay={0.1}>
      {items.map((item) => (
        <div key={item.id} className="mb-4">
          <div className="p-6 bg-paper-100 rounded-lg">
            <h4 className="text-lg font-serif mb-2">{item.title}</h4>
            <p className="text-ink-light">{item.description}</p>
          </div>
        </div>
      ))}
    </StaggerContainer>
  );
}

// ============================================================================
// EXAMPLE 5: Stagger Items (Manual Control)
// ============================================================================

export function ExampleManualStagger() {
  const features = [
    'Philosophical concepts database',
    'Interactive knowledge graph',
    'Curated quotes and citations',
    'Learning path tracking',
  ];

  return (
    <div className="space-y-4">
      {features.map((feature, index) => (
        <StaggerItem key={index} delay={index * 0.1} direction="scale">
          <div className="p-4 bg-paper-100 rounded-lg border-l-4 border-sepia-500">
            <p className="text-ink">{feature}</p>
          </div>
        </StaggerItem>
      ))}
    </div>
  );
}

// ============================================================================
// EXAMPLE 6: Blur Reveal for Quotes
// ============================================================================

export function ExampleBlurReveal() {
  return (
    <div className="max-w-2xl mx-auto text-center py-12">
      <ScrollRevealWithBlur blurAmount={10} duration={0.8}>
        <blockquote className="text-2xl font-serif italic text-ink">
          "The only true wisdom is in knowing you know nothing."
        </blockquote>
        <cite className="block mt-4 text-ink-light">— Socrates</cite>
      </ScrollRevealWithBlur>
    </div>
  );
}

// ============================================================================
// EXAMPLE 7: Custom Variants
// ============================================================================

export function ExampleCustomVariants() {
  const customVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -10,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 200,
        damping: 20,
      },
    },
  };

  return (
    <PageTransition customVariants={customVariants}>
      <div className="p-12 bg-sepia-100 rounded-lg text-center">
        <h2 className="text-3xl font-serif mb-4">
          Custom Spring Animation
        </h2>
        <p className="text-ink">
          This content uses a custom variant with spring physics
        </p>
      </div>
    </PageTransition>
  );
}

// ============================================================================
// EXAMPLE 8: Using Raw Variants
// ============================================================================

export function ExampleRawVariants() {
  return (
    <div>
      {/* Using motion.div directly with variants */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
        className="p-6 bg-paper-100 rounded-lg"
      >
        <h3 className="text-xl font-serif mb-2">Using Raw Variants</h3>
        <p className="text-ink-light">
          You can use motion.div directly with imported variants
        </p>
      </motion.div>

      {/* Staggered children */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainerVariant}
        className="mt-8 space-y-4"
      >
        {[1, 2, 3].map((item) => (
          <motion.div
            key={item}
            variants={staggerItemVariant}
            className="p-4 bg-sepia-50 rounded-lg"
          >
            Item {item}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

// ============================================================================
// EXAMPLE 9: Combining Effects
// ============================================================================

export function ExampleCombinedEffects() {
  return (
    <PageTransition variant="fade">
      <div className="space-y-16">
        {/* Hero section */}
        <SectionTransition delay={0}>
          <div className="text-center py-12">
            <h1 className="text-5xl font-serif mb-6">
              Explore Philosophy
            </h1>
            <p className="text-xl text-ink-light">
              Discover the ideas that shaped human thought
            </p>
          </div>
        </SectionTransition>

        {/* Features grid */}
        <SectionTransition delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Concepts', 'Quotes', 'Graph'].map((feature) => (
              <ScrollReveal
                key={feature}
                direction="scale"
                delay={0}
                className="p-6 bg-paper-100 rounded-lg"
              >
                <h3 className="text-xl font-serif mb-2">{feature}</h3>
                <p className="text-ink-light">
                  Explore our {feature.toLowerCase()} collection
                </p>
              </ScrollReveal>
            ))}
          </div>
        </SectionTransition>

        {/* Quote with blur */}
        <SectionTransition delay={0.4}>
          <ScrollRevealWithBlur blurAmount={8}>
            <blockquote className="text-center py-8">
              <p className="text-2xl font-serif italic text-ink">
                "Wisdom begins in wonder"
              </p>
              <cite className="block mt-4 text-ink-light">— Socrates</cite>
            </blockquote>
          </ScrollRevealWithBlur>
        </SectionTransition>
      </div>
    </PageTransition>
  );
}
