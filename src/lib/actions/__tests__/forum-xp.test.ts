/**
 * Forum XP Integration Tests
 *
 * This file documents and tests the XP system integration for the forum (Agora).
 *
 * XP REWARDS:
 * - Create post: +15 XP
 * - Create reply: +10 XP
 * - Like received: +1 XP (max 10 per post/reply)
 *
 * STREAK BONUS:
 * - 7+ day streak: +50% XP bonus
 * - 30+ day streak: +100% XP bonus
 */

import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { createPost, createReply, toggleLikePost, toggleLikeReply } from '../forum'
import { addXP } from '../user-progress'
import { db } from '@/lib/db'
import { getSession } from '@/lib/auth'

// Mock auth
vi.mock('@/lib/auth', () => ({
  auth: vi.fn(),
}))

const mockUser = {
  id: 'test-user-id',
  name: 'Test User',
  email: 'test@example.com',
}

describe.skip('Forum XP Integration', () => {
  beforeEach(async () => {
    vi.mocked(auth).mockResolvedValue(mockUser)
    await db.userProgress.deleteMany()
    await db.forumPost.deleteMany()
    await db.forumReply.deleteMany()
    await db.forumLike.deleteMany()
  })

  afterEach(async () => {
    await db.userProgress.deleteMany()
    await db.forumPost.deleteMany()
    await db.forumReply.deleteMany()
    await db.forumLike.deleteMany()
  })

  describe('Create Post XP', () => {
    it('should award 15 XP for creating a forum post', async () => {
      const post = await createPost({
        title: 'Test Post Title',
        content: 'This is a test post content with enough characters.',
        categoryId: undefined,
        tags: [],
      })

      const progress = await db.userProgress.findUnique({
        where: { userId: mockUser.id },
      })

      expect(progress).toBeDefined()
      expect(progress!.xp).toBe(15)
      expect(progress!.forumPostsCreated).toBe(1)
    })

    it('should award 22.5 XP (15 * 1.5) for creating a post with 7+ day streak', async () => {
      // Setup user with 7-day streak
      await db.userProgress.create({
        data: {
          userId: mockUser.id,
          streak: 7,
          lastActivity: new Date(Date.now() - 24 * 60 * 60 * 1000), // Yesterday
        },
      })

      await createPost({
        title: 'Test Post Title',
        content: 'This is a test post content with enough characters.',
        categoryId: undefined,
        tags: [],
      })

      const progress = await db.userProgress.findUnique({
        where: { userId: mockUser.id },
      })

      expect(progress!.xp).toBe(23) // Rounded from 22.5
    })

    it('should award 30 XP (15 * 2.0) for creating a post with 30+ day streak', async () => {
      // Setup user with 30-day streak
      await db.userProgress.create({
        data: {
          userId: mockUser.id,
          streak: 30,
          lastActivity: new Date(Date.now() - 24 * 60 * 60 * 1000),
        },
      })

      await createPost({
        title: 'Test Post Title',
        content: 'This is a test post content with enough characters.',
        categoryId: undefined,
        tags: [],
      })

      const progress = await db.userProgress.findUnique({
        where: { userId: mockUser.id },
      })

      expect(progress!.xp).toBe(30)
    })
  })

  describe('Create Reply XP', () => {
    it('should award 10 XP for creating a forum reply', async () => {
      // First create a post
      const post = await db.forumPost.create({
        data: {
          title: 'Test Post',
          content: 'Test content',
          excerpt: 'Test excerpt',
          slug: 'test-post',
          userId: mockUser.id,
        },
      })

      // Switch to a different user for reply
      const replyUser = { ...mockUser, id: 'reply-user-id' }
      vi.mocked(auth).mockResolvedValue(replyUser)

      await createReply({
        postId: post.id,
        content: 'This is a test reply.',
      })

      const progress = await db.userProgress.findUnique({
        where: { userId: replyUser.id },
      })

      expect(progress).toBeDefined()
      expect(progress!.xp).toBe(10)
      expect(progress!.forumRepliesCreated).toBe(1)
    })

    it('should award 15 XP (10 * 1.5) for creating a reply with 7+ day streak', async () => {
      const post = await db.forumPost.create({
        data: {
          title: 'Test Post',
          content: 'Test content',
          excerpt: 'Test excerpt',
          slug: 'test-post',
          userId: mockUser.id,
        },
      })

      const replyUser = { ...mockUser, id: 'reply-user-id' }
      vi.mocked(auth).mockResolvedValue(replyUser)

      // Setup user with 7-day streak
      await db.userProgress.create({
        data: {
          userId: replyUser.id,
          streak: 7,
          lastActivity: new Date(Date.now() - 24 * 60 * 60 * 1000),
        },
      })

      await createReply({
        postId: post.id,
        content: 'This is a test reply.',
      })

      const progress = await db.userProgress.findUnique({
        where: { userId: replyUser.id },
      })

      expect(progress!.xp).toBe(15)
    })
  })

  describe('Like Received XP', () => {
    it('should award 1 XP to post author when receiving a like (max 10)', async () => {
      const postAuthor = { ...mockUser, id: 'post-author-id' }
      const liker = { ...mockUser, id: 'liker-id' }

      // Create a post as postAuthor
      vi.mocked(auth).mockResolvedValue(postAuthor)
      const post = await createPost({
        title: 'Test Post',
        content: 'This is a test post content with enough characters.',
        categoryId: undefined,
        tags: [],
      })

      // Like the post as liker
      vi.mocked(auth).mockResolvedValue(liker)
      await toggleLikePost(post.id)

      // Check post author's XP
      const progress = await db.userProgress.findUnique({
        where: { userId: postAuthor.id },
      })

      expect(progress!.xp).toBe(16) // 15 for post + 1 for like
    })

    it('should not award XP for likes beyond 10 on a single post', async () => {
      const postAuthor = { ...mockUser, id: 'post-author-id' }

      // Create a post with 10 existing likes
      vi.mocked(auth).mockResolvedValue(postAuthor)
      const post = await db.forumPost.create({
        data: {
          title: 'Test Post',
          content: 'Test content',
          excerpt: 'Test excerpt',
          slug: 'test-post-' + Date.now(),
          userId: postAuthor.id,
          likeCount: 10,
        },
      })

      // Setup initial progress
      await db.userProgress.create({
        data: {
          userId: postAuthor.id,
          xp: 100,
        },
      })

      // Try to add 11th like
      const liker = { ...mockUser, id: 'liker-id' }
      vi.mocked(auth).mockResolvedValue(liker)
      await toggleLikePost(post.id)

      // Check that no additional XP was awarded
      const progress = await db.userProgress.findUnique({
        where: { userId: postAuthor.id },
      })

      expect(progress!.xp).toBe(100) // No change
    })

    it('should award 1 XP to reply author when receiving a like (max 10)', async () => {
      const postAuthor = { ...mockUser, id: 'post-author-id' }
      const replyAuthor = { ...mockUser, id: 'reply-author-id' }
      const liker = { ...mockUser, id: 'liker-id' }

      // Create post and reply
      vi.mocked(auth).mockResolvedValue(postAuthor)
      const post = await db.forumPost.create({
        data: {
          title: 'Test Post',
          content: 'Test content',
          excerpt: 'Test excerpt',
          slug: 'test-post-' + Date.now(),
          userId: postAuthor.id,
        },
      })

      vi.mocked(auth).mockResolvedValue(replyAuthor)
      const reply = await createReply({
        postId: post.id,
        content: 'This is a test reply.',
      })

      // Like the reply
      vi.mocked(auth).mockResolvedValue(liker)
      await toggleLikeReply(reply.id)

      // Check reply author's XP
      const progress = await db.userProgress.findUnique({
        where: { userId: replyAuthor.id },
      })

      expect(progress!.xp).toBe(11) // 10 for reply + 1 for like
    })

    it('should not award XP to self for liking own post', async () => {
      const postAuthor = { ...mockUser, id: 'post-author-id' }

      // Create a post
      vi.mocked(auth).mockResolvedValue(postAuthor)
      const post = await createPost({
        title: 'Test Post',
        content: 'This is a test post content with enough characters.',
        categoryId: undefined,
        tags: [],
      })

      const initialProgress = await db.userProgress.findUnique({
        where: { userId: postAuthor.id },
      })

      // Try to like own post
      await toggleLikePost(post.id)

      // Check that no additional XP was awarded
      const finalProgress = await db.userProgress.findUnique({
        where: { userId: postAuthor.id },
      })

      expect(finalProgress!.xp).toBe(initialProgress!.xp) // No change
    })
  })

  describe('Activity Logging', () => {
    it('should log forum post activity with metadata', async () => {
      await createPost({
        title: 'Test Post Title',
        content: 'This is a test post content with enough characters.',
        categoryId: 'test-category-id',
        tags: ['stoicism', 'ethics'],
      })

      const activities = await db.userActivity.findMany({
        where: { userId: mockUser.id },
      })

      expect(activities).toHaveLength(1)
      expect(activities[0].actionType).toBe('forum_post')
      expect(activities[0].entityType).toBe('category')
      expect(activities[0].entityId).toBe('test-category-id')
      expect(activities[0].metadata).toMatchObject({
        title: 'Test Post Title',
        description: 'Nouvelle discussion: Test Post Title',
      })
      expect(activities[0].xpGained).toBe(15)
    })

    it('should log forum reply activity with metadata', async () => {
      const post = await db.forumPost.create({
        data: {
          title: 'Test Post',
          content: 'Test content',
          excerpt: 'Test excerpt',
          slug: 'test-post',
          userId: mockUser.id,
        },
      })

      await createReply({
        postId: post.id,
        content: 'This is a longer reply content to test the title truncation.',
      })

      const activities = await db.userActivity.findMany({
        where: { userId: mockUser.id },
      })

      expect(activities).toHaveLength(1)
      expect(activities[0].actionType).toBe('forum_reply')
      expect(activities[0].entityType).toBe('post')
      expect(activities[0].entityId).toBe(post.id)
      expect(activities[0].metadata).toMatchObject({
        title: 'This is a longer reply content to test the title...',
      })
    })

    it('should log like received activity', async () => {
      const postAuthor = { ...mockUser, id: 'post-author-id' }
      const liker = { ...mockUser, id: 'liker-id' }

      vi.mocked(auth).mockResolvedValue(postAuthor)
      const post = await createPost({
        title: 'Test Post',
        content: 'This is a test post content with enough characters.',
        categoryId: undefined,
        tags: [],
      })

      vi.mocked(auth).mockResolvedValue(liker)
      await toggleLikePost(post.id)

      const activities = await db.userActivity.findMany({
        where: { userId: postAuthor.id },
        orderBy: { createdAt: 'desc' },
      })

      // Should have 2 activities: post creation + like received
      expect(activities).toHaveLength(2)
      expect(activities[0].actionType).toBe('forum_post')
      expect(activities[0].entityType).toBe('post_like')
      expect(activities[0].metadata).toMatchObject({
        title: 'Like reçu sur une discussion',
      })
    })
  })
})
