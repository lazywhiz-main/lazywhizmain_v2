'use client';

import React from 'react';

const Contact: React.FC = () => (
  <section className="contact-section">
    <div className="contact-content">
      <h2 className="contact-title">お気軽にご相談ください</h2>
      <p className="contact-subtitle">
        ぼんやりとした相談も歓迎です。まずは課題を整理するところからはじめましょう。
      </p>
      <a href="/contact" className="contact-cta">
        <span>話してみる</span>
      </a>
    </div>
  </section>
);

export default Contact; 