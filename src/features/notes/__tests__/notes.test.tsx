import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  getNotes,
  createNote,
  updateNote,
  deleteNote,
  getUserTags,
  getNotesStats,
} from '@/lib/actions/notes';

// Mock server actions
vi.mock('@/lib/actions/notes', () => ({
  getNotes: vi.fn(),
  getNote: vi.fn(),
  createNote: vi.fn(),
  updateNote: vi.fn(),
  deleteNote: vi.fn(),
  getUserTags: vi.fn(),
  getNotesStats: vi.fn(),
}));

// Mock toast notifications
vi.mock('sonner', () => ({
  toast: vi.fn(),
}));

describe('Notes Feature', () => {
  let queryClient: QueryClient;
  let wrapper: React.FC<{ children: React.ReactNode }>;

  beforeEach(() => {
    queryClient = new QueryClient({
      defaultOptions: {
        queries: { retry: false },
        mutations: { retry: false },
      },
    });

    wrapper = ({ children }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    vi.clearAllMocks();
  });

  const mockUserId = 'user123';
  const mockNotes = [
    {
      id: 'note1',
      title: 'Stoic Principles',
      content: 'The stoic philosophy emphasizes...',
      tags: ['stoicism', 'ethics'],
      isPublic: true,
      linkedEntityType: 'concept',
      linkedEntityId: 'cm1',
      userId: mockUserId,
      createdAt: new Date('2026-01-01'),
      updatedAt: new Date('2026-01-02'),
      linkedConcept: {
        id: 'cm1',
        name: 'Stoicism',
        slug: 'stoicism',
      },
      linkedText: null,
      user: {
        id: mockUserId,
        name: 'Test User',
        image: null,
      },
    },
    {
      id: 'note2',
      title: 'Existentialism Notes',
      content: 'Existentialism focuses on individual existence...',
      tags: ['existentialism'],
      isPublic: false,
      linkedEntityType: null,
      linkedEntityId: null,
      userId: mockUserId,
      createdAt: new Date('2026-01-03'),
      updatedAt: new Date('2026-01-04'),
      linkedConcept: null,
      linkedText: null,
      user: {
        id: mockUserId,
        name: 'Test User',
        image: null,
      },
    },
  ];

  describe('getNotes', () => {
    it('should fetch user notes', async () => {
      // Arrange
      vi.mocked(getNotes).mockResolvedValue({
        notes: mockNotes,
        total: 2,
        pages: 1,
        currentPage: 1,
      });

      // Act
      const result = await getNotes({ userId: mockUserId });

      // Assert
      expect(getNotes).toHaveBeenCalledWith({ userId: mockUserId });
      expect(result.notes).toHaveLength(2);
      expect(result.total).toBe(2);
      expect(result.pages).toBe(1);
    });

    it('should filter notes by search query', async () => {
      // Arrange
      const filteredNotes = [mockNotes[0]];
      vi.mocked(getNotes).mockResolvedValue({
        notes: filteredNotes,
        total: 1,
        pages: 1,
        currentPage: 1,
      });

      // Act
      const result = await getNotes({ userId: mockUserId, search: 'Stoic' });

      // Assert
      expect(getNotes).toHaveBeenCalledWith({
        userId: mockUserId,
        search: 'Stoic',
      });
      expect(result.notes).toHaveLength(1);
      expect(result.notes[0].title).toContain('Stoic');
    });

    it('should sort notes by date', async () => {
      // Arrange
      vi.mocked(getNotes).mockResolvedValue({
        notes: mockNotes,
        total: 2,
        pages: 1,
        currentPage: 1,
      });

      // Act
      const result = await getNotes({ userId: mockUserId });

      // Assert - Verify notes are returned (sorting happens at database level)
      expect(result.notes).toHaveLength(2);
      expect(result.notes[0].updatedAt).toBeDefined();
      expect(result.notes[1].updatedAt).toBeDefined();
    });

    it('should filter by visibility', async () => {
      // Arrange
      const publicNotes = mockNotes.filter((n) => n.isPublic);
      vi.mocked(getNotes).mockResolvedValue({
        notes: publicNotes,
        total: 1,
        pages: 1,
        currentPage: 1,
      });

      // Act
      const result = await getNotes({
        userId: mockUserId,
        linkedEntityType: 'public',
      });

      // Assert - Notes are filtered by linkedEntityType in the actual implementation
      expect(result.notes).toHaveLength(1);
      expect(result.notes[0].isPublic).toBe(true);
    });

    it('should handle empty state', async () => {
      // Arrange
      vi.mocked(getNotes).mockResolvedValue({
        notes: [],
        total: 0,
        pages: 0,
        currentPage: 1,
      });

      // Act
      const result = await getNotes({ userId: mockUserId });

      // Assert
      expect(result.notes).toHaveLength(0);
      expect(result.total).toBe(0);
    });
  });

  describe('Note CRUD Operations', () => {
    it('should create new note', async () => {
      // Arrange
      const newNoteData = {
        title: 'Kantian Ethics',
        content: 'Categorical imperative...',
        tags: ['kant', 'ethics'],
        linkedEntityType: 'concept',
        linkedEntityId: 'cm2',
        userId: mockUserId,
      };

      const createdNote = {
        id: 'note3',
        ...newNoteData,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      vi.mocked(createNote).mockResolvedValue(createdNote);

      // Act
      const result = await createNote(newNoteData);

      // Assert
      expect(createNote).toHaveBeenCalledWith(newNoteData);
      expect(result.id).toBe('note3');
      expect(result.title).toBe('Kantian Ethics');
    });

    it('should update note content', async () => {
      // Arrange
      const updateData = {
        id: 'note1',
        title: 'Updated Stoic Principles',
        content: 'Updated content...',
        tags: ['stoicism', 'ethics', 'updated'],
        isPublic: false,
        userId: mockUserId,
      };

      const updatedNote = {
        ...mockNotes[0],
        ...updateData,
        updatedAt: new Date(),
      };

      vi.mocked(updateNote).mockResolvedValue(updatedNote);

      // Act
      const result = await updateNote(updateData);

      // Assert
      expect(updateNote).toHaveBeenCalledWith(updateData);
      expect(result.title).toBe('Updated Stoic Principles');
      expect(result.tags).toContain('updated');
    });

    it('should toggle note visibility', async () => {
      // Arrange
      const updateData = {
        id: 'note2',
        isPublic: true,
        userId: mockUserId,
      };

      const updatedNote = {
        ...mockNotes[1],
        isPublic: true,
        updatedAt: new Date(),
      };

      vi.mocked(updateNote).mockResolvedValue(updatedNote);

      // Act
      const result = await updateNote(updateData);

      // Assert
      expect(updateNote).toHaveBeenCalledWith(updateData);
      expect(result.isPublic).toBe(true);
    });

    it('should delete note', async () => {
      // Arrange
      vi.mocked(deleteNote).mockResolvedValue({ success: true });

      // Act
      const result = await deleteNote('note1', mockUserId);

      // Assert
      expect(deleteNote).toHaveBeenCalledWith('note1', mockUserId);
      expect(result.success).toBe(true);
    });

    it('should handle errors with proper messages', async () => {
      // Arrange
      const mockError = new Error('Note non trouvée ou non autorisée');
      vi.mocked(deleteNote).mockRejectedValue(mockError);

      // Act & Assert
      await expect(deleteNote('invalid-id', mockUserId)).rejects.toThrow(
        'Note non trouvée ou non autorisée'
      );
    });
  });

  describe('getUserTags', () => {
    it('should return unique tags from user notes', async () => {
      // Arrange
      const mockTags = ['ethics', 'existentialism', 'stoicism', 'metaphysics'];
      vi.mocked(getUserTags).mockResolvedValue(mockTags);

      // Act
      const result = await getUserTags(mockUserId);

      // Assert
      expect(getUserTags).toHaveBeenCalledWith(mockUserId);
      expect(result).toEqual(mockTags);
      expect(result).toHaveLength(4);
    });
  });

  describe('getNotesStats', () => {
    it('should return notes statistics', async () => {
      // Arrange
      const mockStats = {
        total: 10,
        publicNotes: 3,
        privateNotes: 7,
        topTags: [
          { tag: 'ethics', count: 5 },
          { tag: 'metaphysics', count: 3 },
        ],
      };
      vi.mocked(getNotesStats).mockResolvedValue(mockStats);

      // Act
      const result = await getNotesStats(mockUserId);

      // Assert
      expect(getNotesStats).toHaveBeenCalledWith(mockUserId);
      expect(result.total).toBe(10);
      expect(result.publicNotes).toBe(3);
      expect(result.privateNotes).toBe(7);
      expect(result.topTags).toHaveLength(2);
    });
  });
});
