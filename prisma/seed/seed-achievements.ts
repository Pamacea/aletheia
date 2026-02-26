/**
 * Seed achievements
 */

import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter }) as any;

async function main() {
  console.log('🏆 Seeding achievements...\n');

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
      description: 'Explorer tous les concepts d\'une catégorie',
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
      xpReward: 300,
      category: 'mastery',
      requirements: { type: 'flashcards_mastered', count: 100 },
    },
    {
      slug: 'citationateur',
      name: 'Citationateur',
      description: 'Contribuer 10 citations',
      icon: '💬',
      xpReward: 100,
      category: 'mastery',
      requirements: { type: 'quotes_contributed', count: 10 },
    },

    // Streak Achievements
    {
      slug: 'semaine-fougueuse',
      name: 'Semaine Fougueuse',
      description: '7 jours d\'activité consécutive',
      icon: '🔥',
      xpReward: 100,
      category: 'streak',
      requirements: { type: 'streak', count: 7 },
    },
    {
      slug: 'mois-eclair',
      name: 'Mois Éclair',
      description: '30 jours d\'activité consécutive',
      icon: '⚡',
      xpReward: 500,
      category: 'streak',
      requirements: { type: 'streak', count: 30 },
    },
    {
      slug: 'inconditionnel',
      name: 'Inconditionnel',
      description: '100 jours d\'activité consécutive',
      icon: '💎',
      xpReward: 2000,
      category: 'streak',
      requirements: { type: 'streak', count: 100 },
    },

    // Level Achievements
    {
      slug: 'apprenti',
      name: 'Apprenti',
      description: 'Atteindre le niveau 2',
      icon: '🥉',
      xpReward: 0,
      category: 'learning',
      requirements: { type: 'level', count: 2 },
    },
    {
      slug: 'etudiant',
      name: 'Étudiant',
      description: 'Atteindre le niveau 3',
      icon: '🥈',
      xpReward: 0,
      category: 'learning',
      requirements: { type: 'level', count: 3 },
    },
    {
      slug: 'maitre',
      name: 'Maître',
      description: 'Atteindre le niveau 5',
      icon: '🥇',
      xpReward: 0,
      category: 'learning',
      requirements: { type: 'level', count: 5 },
    },
    {
      slug: 'philosophe',
      name: 'Philosophe',
      description: 'Atteindre le niveau 7',
      icon: '🏛️',
      xpReward: 0,
      category: 'learning',
      requirements: { type: 'level', count: 7 },
    },
  ];

  for (const achievement of achievements) {
    await prisma.achievement.upsert({
      where: { slug: achievement.slug },
      update: achievement,
      create: achievement,
    });
    console.log(`  ✓ ${achievement.name}`);
  }

  console.log(`\n✅ ${achievements.length} achievements seeded!`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
