'use client';

export default function ThanksPage() {
  return (
    <section className="contact-detail-section">
      <div className="contact-detail-content">
        <div className="section-header">
          <h1 className="section-title">Contact</h1>
        </div>
        <div className="contact-form-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '320px' }}>
          <div style={{ fontSize: 64, color: '#4ECDC4', marginBottom: 24 }}>✓</div>
          <h2 style={{ fontSize: 22, fontWeight: 500, marginBottom: 12 }}>お問い合わせありがとうございます</h2>
          <p style={{ fontSize: 15, color: '#495057' }}>メールを送信しました。<br />内容を確認のうえ、担当者よりご連絡いたします。</p>
        </div>
      </div>
    </section>
  );
} 