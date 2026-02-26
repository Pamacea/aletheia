/**
 * Test Real Email Registration Flow
 *
 * This will create a test registration and send a REAL email
 */

import 'dotenv/config';
import { Resend } from 'resend';

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

async function testRealEmail() {
  const testEmail = 'oalacea@oalacea.fr'; // Your email

  console.log('🧪 Testing Real Email with Resend\n');
  console.log(`Sending to: ${testEmail}`);
  console.log(`From: ${process.env.RESEND_FROM_EMAIL}\n`);

  // Test direct Resend API
  try {
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || '',
      to: [testEmail],
      subject: '🧪 Aletheia - Test Email',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: system-ui, sans-serif; background: #faf9f7; padding: 40px 20px; }
              .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); overflow: hidden; }
              .header { background: linear-gradient(135deg, #8b6f3c 0%, #6b572a 100%); padding: 30px; text-align: center; }
              .header h1 { color: white; margin: 0; font-size: 28px; }
              .content { padding: 40px 30px; }
              .button { display: inline-block; background: #8b6f3c; color: white; padding: 14px 32px; text-decoration: none; border-radius: 6px; margin: 20px 0; }
              .footer { background: #f5f5f5; padding: 20px; text-align: center; font-size: 14px; color: #666; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🧪 Aletheia Test Email</h1>
              </div>
              <div class="content">
                <p>Hello!</p>
                <p>This is a <strong>test email</strong> from Aletheia.</p>
                <p>If you receive this, your Resend integration is working perfectly! 🎉</p>
                <p><strong>Configuration:</strong></p>
                <ul>
                  <li>✅ Resend API Key: Valid</li>
                  <li>✅ From: ${process.env.RESEND_FROM_EMAIL}</li>
                  <li>✅ To: ${testEmail}</li>
                </ul>
                <p>You can now test the full registration flow!</p>
              </div>
              <div class="footer">
                <p>© 2025 Aletheia - Philosophy Learning Platform</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('❌ Error sending email:', error);
      return;
    }

    console.log('✅ Email sent successfully!');
    console.log(`   Email ID: ${data?.id}`);
    console.log('\n📧 Check your inbox!');

  } catch (error) {
    console.error('❌ Fatal error:', error);
  }
}

testRealEmail();
