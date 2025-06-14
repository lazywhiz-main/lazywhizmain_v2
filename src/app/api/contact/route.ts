import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/gmail';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // バリデーション
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: '必須項目が入力されていません' },
        { status: 400 }
      );
    }

    // 管理者宛てのメール送信
    const adminEmail = process.env.ADMIN_EMAIL || process.env.GMAIL_USER;
    const subject = `[LazyWhiz] お問い合わせ: ${name}様`;
    const text = `
名前: ${name}
メールアドレス: ${email}
メッセージ:
${message}
    `;

    const result = await sendEmail(adminEmail, subject, text);

    if (!result.success) {
      throw new Error('メール送信に失敗しました');
    }

    // 自動返信メール
    const autoReplySubject = '【LazyWhiz】お問い合わせありがとうございます';
    const autoReplyText = `
${name} 様

お問い合わせありがとうございます。
以下の内容で承りました。

---
${message}
---

内容を確認次第、担当者よりご連絡させていただきます。
今しばらくお待ちくださいませ。

--
LazyWhiz
    `;

    await sendEmail(email, autoReplySubject, autoReplyText);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'メール送信に失敗しました' },
      { status: 500 }
    );
  }
} 