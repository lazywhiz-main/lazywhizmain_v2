import React from 'react';

const ContactPage: React.FC = () => (
  <section className="contact-detail-section">
    <div className="contact-detail-content">
      <div className="section-header">
        <h1 className="section-title">Contact</h1>
        <p className="section-subtitle">お気軽にご相談ください</p>
      </div>
      <div className="contact-form-container">
        <div className="contact-intro-text">
          <h3>ぼんやりした相談も歓迎です</h3>
          <p>
            「何から始めればいいかわからない」「漠然とした課題感がある」<br />
            そんな状態からでも大丈夫です。まずは現状を整理するところから始めましょう。
          </p>
        </div>
        <form className="contact-form">
          <div className="form-group">
            <label className="form-label" htmlFor="name">お名前</label>
            <input type="text" id="name" className="form-input" placeholder="山田太郎" required />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="email">メールアドレス</label>
            <input type="email" id="email" className="form-input" placeholder="example@email.com" required />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="company">会社名・組織名（任意）</label>
            <input type="text" id="company" className="form-input" placeholder="株式会社〇〇" />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="category">相談内容のカテゴリ</label>
            <select id="category" className="form-select" required>
              <option value="">選択してください</option>
              <option value="pdm">PdM支援について</option>
              <option value="brand">ブランド・言語化支援について</option>
              <option value="web">Web制作について</option>
              <option value="other">その他・複数領域</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="message">相談内容</label>
            <textarea id="message" className="form-textarea" placeholder="現在の課題やご相談したい内容をお聞かせください。具体的でなくても構いません。" required></textarea>
          </div>
          <button type="submit" className="form-submit">相談内容を送信</button>
        </form>
      </div>
    </div>
  </section>
);

export default ContactPage; 