import { NextResponse } from 'next/server';
import { sendEmail } from '../../../lib/gmail';

export async function POST(request: Request) {
  try {
    const { name, email, company, category, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: '必須項目が入力されていません' }, { status: 400 });
    }

    // 環境変数の確認
    console.log('Environment check:', {
      hasGoogleClientId: !!process.env.GOOGLE_CLIENT_ID,
      hasGoogleClientSecret: !!process.env.GOOGLE_CLIENT_SECRET,
      hasGoogleRefreshToken: !!process.env.GOOGLE_REFRESH_TOKEN,
      hasGmailUser: !!process.env.GMAIL_USER,
      hasAdminEmail: !!process.env.ADMIN_EMAIL
    });

    // 管理者宛てメール
    const adminEmail = process.env.ADMIN_EMAIL || process.env.GMAIL_USER;
    if (!adminEmail) {
      console.error('Admin email not configured');
      throw new Error('管理者メールアドレスが設定されていません');
    }
    
    const subject = `[LazyWhiz] お問い合わせ: ${name}様`;
    const text = `
名前: ${name}
メール: ${email}
会社名: ${company || '-'}
カテゴリ: ${category || '-'}
メッセージ:\n${message}
`;
    
    console.log('Attempting to send email to:', adminEmail);
    const result = await sendEmail(adminEmail, subject, text);
    console.log('Email send result:', result);
    
    if (!result.success) {
      console.error('Email send failed:', result.error);
      throw new Error(`メール送信に失敗しました: ${result.error}`);
    }

    // 自動返信
    const autoReplySubject = '【LazyWhiz】お問い合わせありがとうございます';
    const autoReplyText = `
${name} 様

お問い合わせありがとうございます。以下の内容で承りました。
---
${message}
---
内容を確認次第、担当者よりご連絡いたします。
-- LazyWhiz`;
    
    console.log('Attempting to send auto-reply to:', email);
    const autoReplyResult = await sendEmail(email, autoReplySubject, autoReplyText);
    console.log('Auto-reply result:', autoReplyResult);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ 
      error: 'メール送信に失敗しました',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
} 