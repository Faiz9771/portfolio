import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type Data = {
  success: boolean;
  message: string;
};

// Helper function to validate environment variables
function getSmtpConfig() {
  // In development, use ethereal.email for testing
  if (process.env.NODE_ENV === 'development') {
    return {
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      user: process.env.ETHEREAL_EMAIL || 'test@example.com',
      pass: process.env.ETHEREAL_PASSWORD || 'password',
      to: process.env.ETHEREAL_EMAIL || 'test@example.com',
      isDev: true
    };
  }

  // In production, use the provided SMTP configuration
  const requiredVars = ['SMTP_HOST', 'SMTP_USER', 'SMTP_PASS', 'SMTP_TO'];
  const missingVars = requiredVars.filter(varName => !process.env[varName]);
  
  if (missingVars.length > 0) {
    throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`);
  }

  return {
    host: process.env.SMTP_HOST!,
    port: parseInt(process.env.SMTP_PORT || '587', 10),
    secure: process.env.SMTP_SECURE === 'true',
    user: process.env.SMTP_USER!,
    pass: process.env.SMTP_PASS!,
    to: process.env.SMTP_TO!,
    isDev: false
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      message: 'Method not allowed' 
    });
  }

  try {
    const { name, email, message } = req.body;

    // Input validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return res.status(400).json({ 
        success: false, 
        message: 'All fields are required' 
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please enter a valid email address' 
      });
    }

    // Message length validation
    if (message.length > 2000) {
      return res.status(400).json({
        success: false,
        message: 'Message is too long. Please limit to 2000 characters.'
      });
    }

    // Get SMTP configuration
    const smtpConfig = getSmtpConfig();
    
    // Create test account if in development
    let testAccount;
    if (smtpConfig.isDev) {
      testAccount = await nodemailer.createTestAccount();
      console.log('Test account created:', testAccount.user);
      
      // Override with test account credentials
      smtpConfig.user = testAccount.user;
      smtpConfig.pass = testAccount.pass;
      smtpConfig.to = testAccount.user;
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: smtpConfig.host,
      port: smtpConfig.port,
      secure: smtpConfig.secure,
      auth: {
        user: smtpConfig.user,
        pass: smtpConfig.pass,
      },
      tls: {
        // Only allow self-signed certs in development
        rejectUnauthorized: !smtpConfig.isDev
      },
      logger: smtpConfig.isDev,
      debug: smtpConfig.isDev
    });

    // Current date and time
    const currentDate = new Date().toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    });

    // Prepare email options
    const mailOptions = {
      from: `"Portfolio Contact Form" <${smtpConfig.user}>`,
      to: smtpConfig.to,
      replyTo: `"${name}" <${email}>`,
      subject: `New message from ${name} via Portfolio Contact Form`,
      text: `
        ========================
        NEW CONTACT FORM MESSAGE
        ========================
        
        Date: ${currentDate}
        From: ${name} <${email}>
        
        Message:
        ${message}
        
        ———
        This message was sent from your portfolio contact form.
      `,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Message from Portfolio</title>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background-color: #4f46e5;
              color: white;
              padding: 20px;
              border-radius: 8px 8px 0 0;
            }
            .content {
              border: 1px solid #e2e8f0;
              border-top: none;
              padding: 25px;
              border-radius: 0 0 8px 8px;
            }
            .message {
              background-color: #f8fafc;
              padding: 15px;
              border-left: 4px solid #4f46e5;
              margin: 20px 0;
              white-space: pre-line;
            }
            .footer {
              margin-top: 30px;
              padding-top: 20px;
              border-top: 1px solid #e2e8f0;
              font-size: 14px;
              color: #64748b;
            }
            .label {
              color: #64748b;
              font-size: 14px;
              margin-bottom: 5px;
            }
            .value {
              margin-bottom: 15px;
              font-size: 16px;
            }
            .button {
              display: inline-block;
              background-color: #4f46e5;
              color: white !important;
              text-decoration: none;
              padding: 10px 20px;
              border-radius: 6px;
              margin-top: 10px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1 style="margin: 0; font-size: 22px;">New Message from ${name}</h1>
            <div style="opacity: 0.8; font-size: 14px; margin-top: 5px;">${currentDate}</div>
          </div>
          
          <div class="content">
            <div class="label">From</div>
            <div class="value">
              <strong>${name}</strong><br>
              <a href="mailto:${email}" style="color: #4f46e5; text-decoration: none;">${email}</a>
            </div>
            
            <div class="label">Message</div>
            <div class="message">${message.replace(/\n/g, '<br>')}</div>
            
            <a href="mailto:${email}" class="button">
              Reply to ${name.split(' ')[0]}
            </a>
            
            <div class="footer">
              <p style="margin: 5px 0;">This message was sent from your portfolio contact form.</p>
              <p style="margin: 5px 0; font-size: 13px; color: #94a3b8;">
                Sent on ${new Date().toLocaleString()}
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    
    // Log success in development
    if (smtpConfig.isDev) {
      console.log('Message sent: %s', info.messageId);
      const previewUrl = nodemailer.getTestMessageUrl(info);
      if (previewUrl) {
        console.log('Preview URL: %s', previewUrl);
      }
    }

    return res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully!',
    });
    
  } catch (error: unknown) {
    console.error('Error sending email:', error);
    
    // More specific error messages based on error type
    let errorMessage = 'Failed to send message. Please try again later.';
    
    if (error && typeof error === 'object' && 'code' in error) {
      const errorCode = (error as { code: string }).code;
      if (errorCode === 'ECONNECTION') {
        errorMessage = 'Could not connect to the email server. Please try again later.';
      } else if (errorCode === 'EAUTH') {
        errorMessage = 'Authentication failed. Please check your email configuration.';
      } else if (errorCode === 'EENVELOPE') {
        errorMessage = 'Invalid email address. Please check the recipient email.';
      }
    }
    
    return res.status(500).json({
      success: false,
      message: errorMessage,
    });
  }
}
