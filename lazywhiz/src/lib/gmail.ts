import { google } from 'googleapis';
import nodemailer from 'nodemailer';

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI;
const REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN;

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

export const createTransporter = async () => {
  try {
    console.log('Creating Gmail transporter...');
    console.log('Environment variables check:', {
      hasClientId: !!CLIENT_ID,
      hasClientSecret: !!CLIENT_SECRET,
      hasRedirectUri: !!REDIRECT_URI,
      hasRefreshToken: !!REFRESH_TOKEN,
      hasGmailUser: !!process.env.GMAIL_USER,
      hasGmailPassword: !!process.env.GMAIL_APP_PASSWORD
    });

    // まずはApp Passwordを使った簡単な方法を試す
    if (process.env.GMAIL_APP_PASSWORD) {
      console.log('Using App Password method...');
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_APP_PASSWORD,
        },
      });
      console.log('App Password transporter created successfully');
      return transporter;
    }

    // OAuth2 method (fallback)
    if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN || !process.env.GMAIL_USER) {
      throw new Error('Gmail OAuth settings are incomplete and no App Password provided');
    }

    const accessToken = await oauth2Client.getAccessToken();
    console.log('Access token obtained:', !!accessToken.token);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.GMAIL_USER,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken.token || undefined,
      },
    });
    
    console.log('OAuth transporter created successfully');
    return transporter;
  } catch (error) {
    console.error('Error creating transporter:', error);
    throw error;
  }
};

export const sendEmail = async (to: string, subject: string, text: string) => {
  try {
    const transporter = await createTransporter();
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to,
      subject,
      text,
    };
    const info = await transporter.sendMail(mailOptions);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
}; 