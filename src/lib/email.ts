/**
 * Email Service for Aletheia
 * Handles sending transactional emails using Resend
 */

import { Resend } from 'resend';

// Initialize Resend client
const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

// Email configuration
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'Aletheia <noreply@aletheia.vercel.app>';
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || process.env.BETTER_AUTH_URL || 'http://localhost:3000';

/**
 * Email template interface
 */
interface EmailTemplate {
  subject: string;
  html: string;
  text: string;
}

/**
 * Send verification email to new users
 */
export async function sendVerificationEmail(
  email: string,
  username: string | null,
  verificationUrl: string
): Promise<{ success: boolean; error?: string }> {
  // In development, log the email instead of sending
  if (process.env.NODE_ENV === 'development' && !resend) {
    console.log('📧 [DEV] Verification Email:');
    console.log('────────────────────────────────────');
    console.log(`To: ${email}`);
    console.log(`Verification URL: ${verificationUrl}`);
    console.log('────────────────────────────────────');
    return { success: true };
  }

  if (!resend) {
    console.error('Resend not configured: RESEND_API_KEY missing');
    return { success: false, error: 'Email service not configured' };
  }

  const template = getVerificationEmailTemplate(username, verificationUrl);

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      ...template,
    });

    return { success: true };
  } catch (error) {
    console.error('Failed to send verification email:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Send password reset email
 */
export async function sendPasswordResetEmail(
  email: string,
  resetUrl: string
): Promise<{ success: boolean; error?: string }> {
  if (process.env.NODE_ENV === 'development' && !resend) {
    console.log('📧 [DEV] Password Reset Email:');
    console.log('────────────────────────────────────');
    console.log(`To: ${email}`);
    console.log(`Reset URL: ${resetUrl}`);
    console.log('────────────────────────────────────');
    return { success: true };
  }

  if (!resend) {
    return { success: false, error: 'Email service not configured' };
  }

  const template = getPasswordResetEmailTemplate(resetUrl);

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      ...template,
    });

    return { success: true };
  } catch (error) {
    console.error('Failed to send password reset email:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Get verification email template
 */
function getVerificationEmailTemplate(
  username: string | null,
  verificationUrl: string
): EmailTemplate {
  const displayName = username || 'Philosophe';

  return {
    subject: 'Vérifiez votre adresse email - Aletheia',
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vérifiez votre adresse email</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      background-color: #faf7f2;
      color: #2c2416;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 40px 20px;
    }
    .card {
      background: white;
      border: 2px solid #d4c5b0;
      border-radius: 8px;
      padding: 40px;
      text-align: center;
    }
    .logo {
      font-family: Georgia, 'Times New Roman', serif;
      font-size: 32px;
      font-weight: 600;
      color: #8b7355;
      margin-bottom: 24px;
    }
    h1 {
      font-family: Georgia, 'Times New Roman', serif;
      font-size: 24px;
      font-weight: 600;
      color: #2c2416;
      margin: 0 0 16px 0;
    }
    p {
      font-size: 16px;
      line-height: 1.6;
      color: #5c5548;
      margin: 0 0 24px 0;
    }
    .button {
      display: inline-block;
      background-color: #8b7355;
      color: #faf7f2;
      text-decoration: none;
      padding: 14px 32px;
      border-radius: 4px;
      font-weight: 500;
      font-size: 16px;
      border: 2px solid #8b7355;
      margin: 24px 0;
    }
    .button:hover {
      background-color: #736045;
      border-color: #736045;
    }
    .footer {
      margin-top: 32px;
      padding-top: 24px;
      border-top: 1px solid #d4c5b0;
      font-size: 14px;
      color: #8b7355;
    }
    .link {
      color: #8b7355;
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="card">
      <div class="logo">ΑΛΗΘΕIA</div>
      <h1>Bienvenue, ${displayName} !</h1>
      <p>
        Merci de vous être inscrit sur Aletheia. Pour commencer votre voyage philosophique,
        veuillez vérifier votre adresse email en cliquant sur le bouton ci-dessous.
      </p>
      <a href="${verificationUrl}" class="button">Vérifier mon email</a>
      <p>
        Ou copiez-collez ce lien dans votre navigateur :<br>
        <a href="${verificationUrl}" class="link">${verificationUrl}</a>
      </p>
      <p style="font-size: 14px; color: #8b7355;">
        Ce lien expire dans 24 heures.
      </p>
      <div class="footer">
        <p>Si vous n'avez pas créé de compte sur Aletheia, vous pouvez ignorer cet email.</p>
      </div>
    </div>
  </div>
</body>
</html>
    `,
    text: `
Bienvenue sur Aletheia !

Bonjour ${displayName},

Merci de vous être inscrit sur Aletheia. Pour commencer votre voyage philosophique, veuillez vérifier votre adresse email en cliquant sur le lien ci-dessous :

${verificationUrl}

Ce lien expire dans 24 heures.

Si vous n'avez pas créé de compte sur Aletheia, vous pouvez ignorer cet email.

---

L'équipe Aletheia
${APP_URL}
    `,
  };
}

/**
 * Get password reset email template
 */
function getPasswordResetEmailTemplate(resetUrl: string): EmailTemplate {
  return {
    subject: 'Réinitialisez votre mot de passe - Aletheia',
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Réinitialisez votre mot de passe</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      background-color: #faf7f2;
      color: #2c2416;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 40px 20px;
    }
    .card {
      background: white;
      border: 2px solid #d4c5b0;
      border-radius: 8px;
      padding: 40px;
      text-align: center;
    }
    .logo {
      font-family: Georgia, 'Times New Roman', serif;
      font-size: 32px;
      font-weight: 600;
      color: #8b7355;
      margin-bottom: 24px;
    }
    h1 {
      font-family: Georgia, 'Times New Roman', serif;
      font-size: 24px;
      font-weight: 600;
      color: #2c2416;
      margin: 0 0 16px 0;
    }
    p {
      font-size: 16px;
      line-height: 1.6;
      color: #5c5548;
      margin: 0 0 24px 0;
    }
    .button {
      display: inline-block;
      background-color: #8b7355;
      color: #faf7f2;
      text-decoration: none;
      padding: 14px 32px;
      border-radius: 4px;
      font-weight: 500;
      font-size: 16px;
      border: 2px solid #8b7355;
      margin: 24px 0;
    }
    .button:hover {
      background-color: #736045;
      border-color: #736045;
    }
    .footer {
      margin-top: 32px;
      padding-top: 24px;
      border-top: 1px solid #d4c5b0;
      font-size: 14px;
      color: #8b7355;
    }
    .link {
      color: #8b7355;
      text-decoration: underline;
    }
    .warning {
      background-color: #fff3cd;
      border-left: 4px solid #ffc107;
      padding: 12px;
      margin: 20px 0;
      text-align: left;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="card">
      <div class="logo">ΑΛΗΘΕIA</div>
      <h1>Réinitialisation de mot de passe</h1>
      <p>
        Nous avons reçu une demande de réinitialisation de votre mot de passe.
        Cliquez sur le bouton ci-dessous pour définir un nouveau mot de passe.
      </p>
      <a href="${resetUrl}" class="button">Réinitialiser mon mot de passe</a>
      <p>
        Ou copiez-collez ce lien dans votre navigateur :<br>
        <a href="${resetUrl}" class="link">${resetUrl}</a>
      </p>
      <div class="warning">
        <strong>⚠️ Important :</strong> Ce lien expire dans 1 heure. Si vous n'avez pas demandé cette réinitialisation, ignorez cet email et votre mot de passe restera inchangé.
      </div>
      <div class="footer">
        <p>Si vous n'avez pas demandé de réinitialisation de mot de passe, vous pouvez ignorer cet email en toute sécurité.</p>
      </div>
    </div>
  </div>
</body>
</html>
    `,
    text: `
Réinitialisation de mot de passe - Aletheia

Bonjour,

Nous avons reçu une demande de réinitialisation de votre mot de passe. Cliquez sur le lien ci-dessous pour définir un nouveau mot de passe :

${resetUrl}

⚠️ Important :
- Ce lien expire dans 1 heure
- Si vous n'avez pas demandé cette réinitialisation, ignorez cet email

---

L'équipe Aletheia
${APP_URL}
    `,
  };
}

/**
 * Send weekly digest email (optional feature)
 */
export async function sendWeeklyDigestEmail(
  email: string,
  username: string | null,
  data: {
    newPhilosophers?: number;
    newConcepts?: number;
    topQuote?: { text: string; author: string };
  }
): Promise<{ success: boolean; error?: string }> {
  if (process.env.NODE_ENV === 'development' && !resend) {
    console.log('📧 [DEV] Weekly Digest Email');
    return { success: true };
  }

  if (!resend) {
    return { success: false, error: 'Email service not configured' };
  }

  const displayName = username || 'Philosophe';
  const template = getWeeklyDigestTemplate(displayName, data);

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      ...template,
    });

    return { success: true };
  } catch (error) {
    console.error('Failed to send weekly digest email:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Get weekly digest email template
 */
function getWeeklyDigestTemplate(
  username: string,
  data: {
    newPhilosophers?: number;
    newConcepts?: number;
    topQuote?: { text: string; author: string };
  }
): EmailTemplate {
  return {
    subject: 'Votre résumé hebdomadaire - Aletheia',
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Votre résumé hebdomadaire</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      background-color: #faf7f2;
      color: #2c2416;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 40px 20px;
    }
    .card {
      background: white;
      border: 2px solid #d4c5b0;
      border-radius: 8px;
      padding: 40px;
    }
    .logo {
      font-family: Georgia, 'Times New Roman', serif;
      font-size: 32px;
      font-weight: 600;
      color: #8b7355;
      margin-bottom: 24px;
      text-align: center;
    }
    h1 {
      font-family: Georgia, 'Times New Roman', serif;
      font-size: 24px;
      font-weight: 600;
      color: #2c2416;
      margin: 0 0 24px 0;
      text-align: center;
    }
    h2 {
      font-size: 18px;
      font-weight: 600;
      color: #8b7355;
      margin: 24px 0 12px 0;
    }
    p {
      font-size: 16px;
      line-height: 1.6;
      color: #5c5548;
      margin: 0 0 16px 0;
    }
    .stats {
      display: flex;
      justify-content: space-around;
      margin: 24px 0;
      padding: 20px;
      background-color: #faf7f2;
      border-radius: 8px;
    }
    .stat-item {
      text-align: center;
    }
    .stat-number {
      font-size: 32px;
      font-weight: 600;
      color: #8b7355;
    }
    .stat-label {
      font-size: 14px;
      color: #5c5548;
    }
    .quote {
      font-style: italic;
      padding: 20px;
      background-color: #faf7f2;
      border-left: 4px solid #8b7355;
      margin: 24px 0;
    }
    .quote-author {
      text-align: right;
      font-style: normal;
      font-size: 14px;
      color: #8b7355;
      margin-top: 8px;
    }
    .button {
      display: inline-block;
      background-color: #8b7355;
      color: #faf7f2;
      text-decoration: none;
      padding: 14px 32px;
      border-radius: 4px;
      font-weight: 500;
      font-size: 16px;
      border: 2px solid #8b7355;
    }
    .footer {
      margin-top: 32px;
      padding-top: 24px;
      border-top: 1px solid #d4c5b0;
      font-size: 14px;
      color: #8b7355;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="card">
      <div class="logo">ΑΛΗΘΕIA</div>
      <h1>Votre résumé hebdomadaire</h1>
      <p>Bonjour ${username},</p>
      <p>Voici un aperçu de votre activité cette semaine sur Aletheia.</p>

      <div class="stats">
        <div class="stat-item">
          <div class="stat-number">${data.newPhilosophers || 0}</div>
          <div class="stat-label">Nouveaux philosophes</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">${data.newConcepts || 0}</div>
          <div class="stat-label">Concepts découverts</div>
        </div>
      </div>

      ${data.topQuote ? `
      <h2>Citation de la semaine</h2>
      <div class="quote">
        "${data.topQuote.text}"
        <div class="quote-author">— ${data.topQuote.author}</div>
      </div>
      ` : ''}

      <div style="text-align: center; margin-top: 32px;">
        <a href="${APP_URL}" class="button">Continuer l'exploration</a>
      </div>

      <div class="footer">
        <p>À bientôt sur Aletheia !</p>
        <p style="margin-top: 8px;">
          <a href="${APP_URL}/settings/notifications" style="color: #8b7355; text-decoration: underline;">Gérer les notifications</a>
        </p>
      </div>
    </div>
  </div>
</body>
</html>
    `,
    text: `
Votre résumé hebdomadaire - Aletheia

Bonjour ${username},

Voici un aperçu de votre activité cette semaine sur Aletheia :

${data.newPhilosophers ? `• ${data.newPhilosophers} nouveau(x) philosophe(s) découvert(s)` : ''}
${data.newConcepts ? `• ${data.newConcepts} concept(s) exploré(s)` : ''}

${data.topQuote ? `
Citation de la semaine :
"${data.topQuote.text}"
— ${data.topQuote.author}
` : ''}

Continuez votre exploration : ${APP_URL}

---

À bientôt sur Aletheia !

Gérer les notifications : ${APP_URL}/settings/notifications
    `,
  };
}
