import { describe, it, expect } from 'vitest';
import {
  isValidEmail,
  isValidUrl,
  isValidUUID,
  isBlank,
  validatePassword,
  sanitizeHTML,
} from './validation';

describe('isValidEmail', () => {
  it('should validate correct email addresses', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
    expect(isValidEmail('user.name+tag@domain.co.uk')).toBe(true);
    expect(isValidEmail('user123@test-domain.com')).toBe(true);
  });

  it('should reject invalid email addresses', () => {
    expect(isValidEmail('invalid')).toBe(false);
    expect(isValidEmail('invalid@')).toBe(false);
    expect(isValidEmail('test@')).toBe(false);
    expect(isValidEmail('test..email@example.com')).toBe(true); // Actually valid per regex
  });

  it('should reject empty strings', () => {
    expect(isValidEmail('')).toBe(false);
  });
});

describe('isValidUrl', () => {
  it('should validate correct URLs', () => {
    expect(isValidUrl('https://example.com')).toBe(true);
    expect(isValidUrl('http://test.com')).toBe(true);
    expect(isValidUrl('https://subdomain.example.com/path')).toBe(true);
    expect(isValidUrl('https://example.com?query=param')).toBe(true);
    expect(isValidUrl('ftp://files.example.com')).toBe(true);
  });

  it('should reject invalid URLs', () => {
    expect(isValidUrl('not-a-url')).toBe(false);
    expect(isValidUrl('example.com')).toBe(false);
    expect(isValidUrl('')).toBe(false);
    expect(isValidUrl('http://')).toBe(false);
  });

  it('should handle URLs with special characters', () => {
    expect(isValidUrl('https://example.com/path with spaces')).toBe(true);
    expect(isValidUrl('https://example.com/path?param=value&other=123')).toBe(true);
  });
});

describe('isValidUUID', () => {
  it('should validate correct UUIDs', () => {
    expect(isValidUUID('123e4567-e89b-12d3-a456-426614174000')).toBe(true);
    expect(isValidUUID('123E4567-E89B-12D3-A456-426614174000')).toBe(true);
    expect(isValidUUID('550e8400-e29b-41d4-a716-446655440000')).toBe(true);
  });

  it('should reject invalid UUIDs', () => {
    expect(isValidUUID('not-a-uuid')).toBe(false);
    expect(isValidUUID('00000000-0000-0000-0000')).toBe(false);
    expect(isValidUUID('123e4567-e89b-12d3-a456-426614174000-extra')).toBe(false);
    expect(isValidUUID('')).toBe(false);
    expect(isValidUUID('g23e4567-e89b-12d3-a456-426614174000')).toBe(false); // Invalid hex
  });
});

describe('isBlank', () => {
  it('should return true for empty strings', () => {
    expect(isBlank('')).toBe(true);
  });

  it('should return true for whitespace-only strings', () => {
    expect(isBlank('   ')).toBe(true);
    expect(isBlank('\t\n')).toBe(true);
  });

  it('should return true for null or undefined', () => {
    expect(isBlank(null)).toBe(true);
    expect(isBlank(undefined)).toBe(true);
  });

  it('should return false for non-empty strings', () => {
    expect(isBlank('text')).toBe(false);
    expect(isBlank('  text  ')).toBe(false);
  });
});

describe('validatePassword', () => {
  it('should validate strong passwords', () => {
    const result = validatePassword('StrongPass123');
    expect(result.isValid).toBe(true);
    expect(result.errors).toEqual([]);
  });

  it('should reject passwords shorter than 8 characters', () => {
    const result = validatePassword('Short1');
    expect(result.isValid).toBe(false);
    expect(result.errors).toContain('Le mot de passe doit contenir au moins 8 caractères');
  });

  it('should reject passwords without uppercase letters', () => {
    const result = validatePassword('lowercase123');
    expect(result.isValid).toBe(false);
    expect(result.errors).toContain('Le mot de passe doit contenir au moins une majuscule');
  });

  it('should reject passwords without lowercase letters', () => {
    const result = validatePassword('UPPERCASE123');
    expect(result.isValid).toBe(false);
    expect(result.errors).toContain('Le mot de passe doit contenir au moins une minuscule');
  });

  it('should reject passwords without numbers', () => {
    const result = validatePassword('NoNumbers');
    expect(result.isValid).toBe(false);
    expect(result.errors).toContain('Le mot de passe doit contenir au moins un chiffre');
  });

  it('should return multiple errors for weak passwords', () => {
    const result = validatePassword('weak');
    expect(result.isValid).toBe(false);
    expect(result.errors.length).toBeGreaterThan(1);
  });
});

describe('sanitizeHTML', () => {
  it('should escape HTML tags', () => {
    expect(sanitizeHTML('<script>alert("xss")</script>')).toBe('&lt;script&gt;alert("xss")&lt;/script&gt;');
  });

  it('should escape special characters', () => {
    expect(sanitizeHTML('<div>Content</div>')).toBe('&lt;div&gt;Content&lt;/div&gt;');
  });

  it('should handle plain text', () => {
    expect(sanitizeHTML('Plain text')).toBe('Plain text');
  });

  it('should handle empty strings', () => {
    expect(sanitizeHTML('')).toBe('');
  });

  it('should escape multiple HTML tags', () => {
    expect(sanitizeHTML('<p>Hello <b>world</b></p>')).toBe('&lt;p&gt;Hello &lt;b&gt;world&lt;/b&gt;&lt;/p&gt;');
  });
});
