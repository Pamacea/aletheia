/**
 * Concept Relations Seed Script
 *
 * Seeds the concept_relations table from the network.ts data
 */

import 'dotenv/config'
import { PrismaClient, RelationType } from '@prisma/client'
import { Pool } from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'
import { conceptNetwork } from '../../src/lib/concept-network/network'

// Initialize Prisma Client (will be done after CLI args check)
let prisma: PrismaClient
let pool: Pool

// ============================================
// TYPES
// ============================================

interface SeedStats {
  created: number
  updated: number
  skipped: number
  errors: number
  missingConcepts: Set<string>
}

// ============================================
// HELPERS
// ============================================

/**
 * Maps the network.ts relation type to Prisma RelationType enum
 */
function mapRelationType(networkType: string): RelationType {
  // The network.ts already uses uppercase values matching the enum
  if (Object.values(RelationType).includes(networkType as RelationType)) {
    return networkType as RelationType
  }

  throw new Error(`Unknown relation type: ${networkType}`)
}

/**
 * Validates that the strength is between 1 and 5
 */
function validateStrength(strength: number): number {
  if (strength < 1) return 1
  if (strength > 5) return 5
  return strength
}

// ============================================
// SEED FUNCTIONS
// ============================================

/**
 * Main seed function for concept relations
 */
async function seedConceptRelations(
  options: {
    clear?: boolean
    dryRun?: boolean
    verbose?: boolean
  } = {}
): Promise<SeedStats> {
  const { clear = false, dryRun = false, verbose = false } = options

  const stats: SeedStats = {
    created: 0,
    updated: 0,
    skipped: 0,
    errors: 0,
    missingConcepts: new Set<string>(),
  }

  console.log('🔗 Starting concept relations seed...\n')

  // Clear existing relations if requested
  if (clear) {
    if (dryRun) {
      console.log('🗑️  [DRY RUN] Would delete all concept relations')
    } else {
      console.log('🗑️  Deleting all concept relations...')
      await prisma.conceptRelation.deleteMany({})
      console.log('  ✓ All relations deleted\n')
    }
  }

  // Get all concepts from database for quick lookup
  console.log('📚 Loading concepts from database...')
  const allConcepts = await prisma.concept.findMany({
    select: { id: true, slug: true },
  })

  const conceptSlugToId = new Map<string, string>()
  for (const concept of allConcepts) {
    conceptSlugToId.set(concept.slug, concept.id)
  }

  console.log(`  ✓ Loaded ${allConcepts.length} concepts\n`)

  // Process each connection
  console.log('🔗 Processing connections...\n')

  for (const connection of conceptNetwork) {
    try {
      // Find concept IDs
      const conceptId = conceptSlugToId.get(connection.from)
      const relatedConceptId = conceptSlugToId.get(connection.to)

      // Skip if either concept doesn't exist
      if (!conceptId) {
        if (verbose) {
          console.warn(`  ⚠️  Concept not found: ${connection.from}`)
        }
        stats.missingConcepts.add(connection.from)
        stats.skipped++
        continue
      }

      if (!relatedConceptId) {
        if (verbose) {
          console.warn(`  ⚠️  Concept not found: ${connection.to}`)
        }
        stats.missingConcepts.add(connection.to)
        stats.skipped++
        continue
      }

      // Map and validate data
      const relationType = mapRelationType(connection.type)
      const strength = validateStrength(connection.strength)

      if (dryRun) {
        console.log(`  [DRY RUN] ${connection.from} -> ${connection.to} (${connection.type})`)
        stats.created++
        continue
      }

      // Upsert the relation
      await prisma.conceptRelation.upsert({
        where: {
          conceptId_relatedConceptId_relationType: {
            conceptId,
            relatedConceptId,
            relationType,
          },
        },
        update: {
          description: connection.description,
          strength,
        },
        create: {
          conceptId,
          relatedConceptId,
          relationType,
          description: connection.description,
          strength,
        },
      })

      stats.created++

      if (verbose) {
        console.log(
          `  ✓ ${connection.from} -> ${connection.to} (${connection.type}, strength: ${strength})`
        )
      }
    } catch (error) {
      stats.errors++
      console.error(
        `  ❌ Error processing ${connection.from} -> ${connection.to}:`,
        error
      )
    }
  }

  return stats
}

// ============================================
// STATISTICS & REPORTING
// ============================================

/**
 * Prints detailed statistics
 */
function printStats(stats: SeedStats, dryRun: boolean): void {
  console.log('\n' + '='.repeat(60))
  console.log('📊 SEED STATISTICS')
  console.log('='.repeat(60))

  if (dryRun) {
    console.log(`\n  📋 Mode: DRY RUN (no changes made)`)
  }

  console.log(`
  ✅ Created:   ${stats.created}
  🔄 Updated:   ${stats.updated}
  ⏭️  Skipped:   ${stats.skipped}
  ❌ Errors:    ${stats.errors}`)

  if (stats.missingConcepts.size > 0) {
    console.log(
      `\n  ⚠️  Missing Concepts (${stats.missingConcepts.size}):`
    )
    console.log(`     ${Array.from(stats.missingConcepts).join(', ')}`)
  }

  console.log('\n' + '='.repeat(60) + '\n')
}

/**
 * Prints detailed analysis by relation type
 */
async function printAnalysis(): Promise<void> {
  console.log('📈 RELATION ANALYSIS\n')

  const typeCounts = await prisma.conceptRelation.groupBy({
    by: ['relationType'],
    _count: {
      relationType: true,
    },
  })

  const strengthDistribution = await prisma.conceptRelation.groupBy({
    by: ['strength'],
    _count: {
      strength: true,
    },
  })

  console.log('  By Type:')
  for (const type of typeCounts.sort(
    (a, b) => b._count.relationType - a._count.relationType
  )) {
    console.log(`    ${type.relationType.padEnd(15)} ${type._count.relationType}`)
  }

  console.log('\n  By Strength:')
  for (const strength of strengthDistribution.sort(
    (a, b) => a.strength - b.strength
  )) {
    console.log(`    Strength ${strength.strength}: ${strength._count.strength}`)
  }

  // Top connected concepts
  const topConnected = await prisma.$queryRaw<Array<{ concept_id: string; count: bigint }>>`
    SELECT
      concept_id,
      COUNT(*) as count
    FROM concept_relations
    GROUP BY concept_id
    ORDER BY count DESC
    LIMIT 10
  `

  console.log('\n  Top Connected Concepts:')
  for (const row of topConnected) {
    const concept = await prisma.concept.findUnique({
      where: { id: row.concept_id as string },
      select: { slug: true, name: true },
    })
    console.log(
      `    ${(concept?.slug ?? 'Unknown').padEnd(20)} ${row.count} connections`
    )
  }

  console.log('\n')
}

// ============================================
// CLI
// ============================================

async function main() {
  const args = process.argv.slice(2)

  // Handle help flag before Prisma initialization
  if (args.includes('--help') || args.includes('-h')) {
    console.log(`
Concept Relations Seed Script

Usage:
  npm run db:seed:concept-relations
  npm run db:seed:concept-relations -- --clear
  npm run db:seed:concept-relations -- --dry-run
  npm run db:seed:concept-relations -- --verbose

Options:
  --clear, -c     Delete all existing relations before seeding
  --dry-run, -d   Show what would be done without making changes
  --verbose, -v   Show detailed output for each relation
  --help, -h      Show this help message
`)
    process.exit(0)
  }

  // Now initialize Prisma Client
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  })

  const adapter = new PrismaPg(pool)

  prisma = new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
  })

  const options = {
    clear: args.includes('--clear'),
    dryRun: args.includes('--dry-run'),
    verbose: args.includes('--verbose') || args.includes('-v'),
  }

  if (options.dryRun) {
    console.log('🔍 DRY RUN MODE - No changes will be made\n')
  }

  const stats = await seedConceptRelations(options)

  printStats(stats, options.dryRun)

  if (!options.dryRun && stats.errors === 0) {
    await printAnalysis()
  }

  if (stats.errors > 0) {
    console.log('⚠️  Completed with errors')
    process.exit(1)
  }

  console.log('✅ Concept relations seeded successfully!')
}

// ============================================
// EXECUTE
// ============================================

main()
  .catch((error) => {
    console.error('\n❌ Seed failed:')
    console.error(error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
    await pool?.end()
  })
