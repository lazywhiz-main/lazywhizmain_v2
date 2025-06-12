'use client';
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const initialForm = {
  name: '',
  email: '',
  company: '',
  category: '',
  message: '',
};

const ContactForm = () => {
  const router = useRouter();
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        router.replace("/contact/thanks");
      } else {
        setError('送信に失敗しました');
      }
    } catch {
      setError('送信に失敗しました');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label" htmlFor="name">お名前</label>
        <input type="text" id="name" name="name" className="form-input" placeholder="山田太郎" required value={form.name} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="email">メールアドレス</label>
        <input type="email" id="email" name="email" className="form-input" placeholder="example@email.com" required value={form.email} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="company">会社名・組織名（任意）</label>
        <input type="text" id="company" name="company" className="form-input" placeholder="株式会社〇〇" value={form.company} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="category">相談内容のカテゴリ</label>
        <select id="category" name="category" className="form-select" required value={form.category} onChange={handleChange}>
          <option value="">選択してください</option>
          <option value="pdm">PdM支援について</option>
          <option value="brand">ブランド・言語化支援について</option>
          <option value="web">Web制作について</option>
          <option value="other">その他・複数領域</option>
        </select>
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="message">相談内容</label>
        <textarea id="message" name="message" className="form-textarea" placeholder="現在の課題やご相談したい内容をお聞かせください。具体的でなくても構いません。" required value={form.message} onChange={handleChange} />
      </div>
      {error && <div className="error-message">{error}</div>}
      <button type="submit" className="form-submit" disabled={loading} style={loading ? { opacity: 0.6, pointerEvents: 'none' } : {}}>{loading ? '送信中...' : '相談内容を送信'}</button>
    </form>
  );
};

export default ContactForm; 