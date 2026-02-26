/**
 * Main seed script - Seeds all data including achievements
 */

import 'dotenv/config';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting seed...\n');

  // Seed categories
  console.log('📁 Seeding categories...');
  await seedCategories();

  // Seed achievements
  console.log('\n🏆 Seeding achievements...');
  await seedAchievements();

  console.log('\n✅ Seed completed!');
}

async function seedCategories() {
  const categories = [
    { slug: 'stoicism', name: 'Stoïcisme', description: 'École philosophique fondée par Zénon', color: '#8B4513', icon: '🏛️' },
    { slug: 'existentialism', name: 'Existentialisme', description: 'Philosophie de l\'existence et de la liberté', color: '#2E5C8A', icon: '🦋' },
    { slug: 'metaphysics', name: 'Métaphysique', description: 'Étude de la nature de la réalité', color: '#6B46C1', icon: '🌌' },
    { slug: 'ethics', name: 'Éthique', description: 'Philosophie morale', color: '#4CAF50', icon: '⚖️' },
    { slug: 'epistemology', name: 'Épistémologie', description: 'Théorie de la connaissance', color: '#FF9800', icon: '🔍' },
  ];

  for (const category of categories) {
    await prisma.category.upsert({
      where: { slug: category.slug },
      update: {},
      create: category,
    });
  }

  console.log(`  ✓ Seeded ${categories.length} categories`);
}

async function seedAchievements() {
  const achievements = [
    // Learning Achievements
    {
      slug: 'first-note',
      name: 'Première Note',
      description: 'Créer votre première note',
      icon: '📝',
      xpReward: 10,
      category: 'learning',
      requirements: { type: 'notes_created', count: 1 },
    },
    {
      slug: 'bibliothecaire',
      name: 'Bibliothécaire',
      description: 'Créer 10 notes',
      icon: '📚',
      xpReward: 50,
      category: 'learning',
      requirements: { type: 'notes_created', count: 10 },
    },
    {
      slug: 'sage',
      name: 'Sage',
      description: 'Créer 100 notes',
      icon: '🦉',
      xpReward: 200,
      category: 'learning',
      requirements: { type: 'notes_created', count: 100 },
    },
    {
      slug: 'curieux',
      name: 'Curieux',
      description: 'Explorer 10 concepts différents',
      icon: '💡',
      xpReward: 30,
      category: 'learning',
      requirements: { type: 'concepts_explored', count: 10 },
    },
    {
      slug: 'explorateur',
      name: 'Explorateur',
      description: 'Explorer 50 concepts',
      icon: '🗺️',
      xpReward: 100,
      category: 'learning',
      requirements: { type: 'concepts_explored', count: 50 },
    },
    {
      slug: 'lecteur',
      name: 'Lecteur',
      description: 'Lire 5 philosophes différents',
      icon: '📖',
      xpReward: 50,
      category: 'learning',
      requirements: { type: 'philosophers_read', count: 5 },
    },

    // Mastery Achievements
    {
      slug: 'first-favorite',
      name: 'Premier Favori',
      description: 'Ajouter votre premier favori',
      icon: '⭐',
      xpReward: 10,
      category: 'mastery',
      requirements: { type: 'favorites_added', count: 1 },
    },
    {
      slug: 'collectionneur',
      name: 'Collectionneur',
      description: 'Ajouter 50 favoris',
      icon: '🎯',
      xpReward: 150,
      category: 'mastery',
      requirements: { type: 'favorites_added', count: 50 },
    },
    {
      slug: 'flashcard-master',
      name: 'Flashcard Master',
      description: 'Maîtriser 100 flashcards',
      icon: '🧠',
      xpReward: 500,
      category: 'mastery',
      requirements: { type: 'flashcards_mastered', count: 100 },
    },
    {
      slug: 'contributor',
      name: 'Contributeur',
      description: 'Contribuer 25 citations',
      icon: '💬',
      xpReward: 250,
      category: 'mastery',
      requirements: { type: 'quotes_contributed', count: 25 },
    },

    // Level Achievements
    {
      slug: 'level-2-apprenti',
      name: 'Apprenti',
      description: 'Atteindre le niveau 2',
      icon: '📗',
      xpReward: 0,
      category: 'level',
      requirements: { type: 'level', count: 2 },
    },
    {
      slug: 'level-3-etudiant',
      name: 'Étudiant',
      description: 'Atteindre le niveau 3',
      icon: '📘',
      xpReward: 0,
      category: 'level',
      requirements: { type: 'level', count: 3 },
    },
    {
      slug: 'level-5-maitre',
      name: 'Maître',
      description: 'Atteindre le niveau 5',
      icon: '📕',
      xpReward: 0,
      category: 'level',
      requirements: { type: 'level', count: 5 },
    },
    {
      slug: 'level-7-philosophe',
      name: 'Philosophe',
      description: 'Atteindre le niveau 7',
      icon: '📙',
      xpReward: 0,
      category: 'level',
      requirements: { type: 'level', count: 7 },
    },
    {
      slug: 'level-10-sage',
      name: 'Sage',
      description: 'Atteindre le niveau 10',
      icon: '🏆',
      xpReward: 0,
      category: 'level',
      requirements: { type: 'level', count: 10 },
    },

    // Streak Achievements
    {
      slug: 'streak-3',
      name: 'En Bonne Voie',
      description: 'Maintenir une série de 3 jours',
      icon: '🔥',
      xpReward: 30,
      category: 'streak',
      requirements: { type: 'streak', count: 3 },
    },
    {
      slug: 'streak-7',
      name: 'Incontrôlable',
      description: 'Maintenir une série de 7 jours',
      icon: '⚡',
      xpReward: 100,
      category: 'streak',
      requirements: { type: 'streak', count: 7 },
    },
    {
      slug: 'streak-30',
      name: 'Légende',
      description: 'Maintenir une série de 30 jours',
      icon: '👑',
      xpReward: 500,
      category: 'streak',
      requirements: { type: 'streak', count: 30 },
    },
  ];

  for (const achievement of achievements) {
    await prisma.achievement.upsert({
      where: { slug: achievement.slug },
      update: {},
      create: achievement,
    });
  }

  console.log(`  ✓ Seeded ${achievements.length} achievements`);
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:');
    console.error(e);
    process.exit(1);
  });
