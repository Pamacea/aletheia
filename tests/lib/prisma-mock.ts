import { PrismaClient } from '@prisma/client'
import { mockDeep, MockProxy } from 'vitest-mock-extended'

// Create a mock Prisma client
export const mockPrisma = mockDeep<PrismaClient>()

// Reset mocks before each test
export function resetPrismaMocks() {
  mockPrisma.user.findMany.mockReset()
  mockPrisma.user.findUnique.mockReset()
  mockPrisma.user.findFirst.mockReset()
  mockPrisma.user.create.mockReset()
  mockPrisma.user.update.mockReset()
  mockPrisma.user.delete.mockReset()

  // Concept mocks
  mockPrisma.concept.findMany.mockReset()
  mockPrisma.concept.findUnique.mockReset()
  mockPrisma.concept.findFirst.mockReset()
  mockPrisma.concept.create.mockReset()
  mockPrisma.concept.update.mockReset()
  mockPrisma.concept.delete.mockReset()

  // Category mocks
  mockPrisma.category.findMany.mockReset()
  mockPrisma.category.findUnique.mockReset()
  mockPrisma.category.findFirst.mockReset()

  // Source mocks
  mockPrisma.source.findMany.mockReset()
  mockPrisma.source.findUnique.mockReset()

  // Reset other models as needed...
}

export type MockPrismaClient = MockProxy<PrismaClient>
