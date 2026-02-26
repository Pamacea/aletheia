/**
 * Test Script for Email Service
 *
 * Run with: npx tsx scripts/test-email.ts
 */

import 'dotenv/config';
import { sendVerificationEmail, sendPasswordResetEmail } from '@/lib/email';

async function testEmailService() {
  console.log('🧪 Testing Aletheia Email Service\n');

  const testEmail = process.env.TEST_EMAIL || 'test@example.com';

  // Check if Resend is configured
  if (!process.env.RESEND_API_KEY) {
    console.error('❌ RESEND_API_KEY not found in .env');
    console.log('Please add it to test real email sending');
    console.log('\nIn development mode, emails will be logged to console.\n');
  } else {
    console.log(`✅ RESEND_API_KEY found`);
    console.log(`📧 Sending to: ${testEmail}\n`);
  }

  // Test 1: Verification Email
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('Test 1: Sending Verification Email...');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

  try {
    await sendVerificationEmail(
      testEmail,
      'Test User',
      'http://localhost:3000/auth/verify-email?token=test-token-123'
    );
    console.log('✅ Verification email sent successfully!');
    console.log('   Check your inbox (or spam folder)\n');
  } catch (error) {
    console.error('❌ Failed to send verification email:', error);
  }

  // Wait a bit
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Test 2: Password Reset Email
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('Test 2: Sending Password Reset Email...');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

  try {
    await sendPasswordResetEmail(
      testEmail,
      'http://localhost:3000/auth/reset-password?token=test-reset-456'
    );
    console.log('✅ Password reset email sent successfully!');
    console.log('   Check your inbox (or spam folder)\n');
  } catch (error) {
    console.error('❌ Failed to send password reset email:', error);
  }

  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('🎉 Test complete!');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

  if (!process.env.RESEND_API_KEY) {
    console.log('\n💡 To send real emails:');
    console.log('   1. Get your API key from https://resend.com');
    console.log('   2. Add RESEND_API_KEY=xxx to your .env file');
    console.log('   3. Add RESEND_FROM_EMAIL=noreply@yourdomain.com');
    console.log('   4. Run this script again\n');
  }

  process.exit(0);
}

testEmailService().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
