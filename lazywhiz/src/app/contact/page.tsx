'use client';

import React from 'react';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <section className="contact-detail-section">
      <div className="contact-detail-content">
        <div className="section-header">
          <h1 className="section-title">Contact</h1>
          <p className="section-subtitle">お気軽にご相談ください</p>
        </div>
        <div className="contact-form-container">
          <div className="contact-intro-text" style={{ textAlign: 'center', marginBottom: 40 }}>
            <h3 style={{ fontSize: 22, fontWeight: 400, marginBottom: 12 }}>ぼんやりした相談も歓迎です</h3>
            <p style={{ fontSize: 15, color: '#6c757d' }}>
              「何から始めればいいかわからない」「漠然とした課題感がある」<br />
              そんな状態からでも大丈夫です。まずは現状を整理するところから始めましょう。
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
} 