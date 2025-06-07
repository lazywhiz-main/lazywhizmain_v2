'use client';

import React from 'react';
import Link from 'next/link';

const services = [
  {
    icon: '📋',
    title: 'PdM支援',
    description: 'プロダクトの方向性を整理し、チーム一丸となれる戦略を構築します。曖昧な課題を明確化し、適切な優先順位で進める道筋をサポートします。',
    color: 'coral',
  },
  {
    icon: '💭',
    title: 'ブランド・言語化支援',
    description: '想いを言葉にし、ブランドの価値を明確に伝える手助けをします。表現に迷う時間を削減し、一貫性のあるメッセージングを構築します。',
    color: 'blue',
  },
  {
    icon: '🌐',
    title: '軽やかなWeb制作',
    description: 'シンプルで効果的なWebサイトを迅速に構築いたします。技術選定から運用まで、長期的な視点でサポートし、無駄な複雑さを排除します。',
    color: 'green',
  },
];

const Services: React.FC = () => (
  <section className="services-section">
    <div className="services-content">
      <div className="section-header">
        <h2 className="section-title">Services</h2>
        <p className="section-subtitle">決めることへの伴走をテーマに、3つの領域でサポートします</p>
      </div>
      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 4C4.89543 4 4 4.89543 4 6V26C4 27.1046 4.89543 28 6 28H26C27.1046 28 28 27.1046 28 26V6C28 4.89543 27.1046 4 26 4H6Z" stroke="var(--coral)" strokeWidth="2" fill="none"/>
              <path d="M8 10H24" stroke="var(--coral)" strokeWidth="2" strokeLinecap="round"/>
              <path d="M8 15H20" stroke="var(--coral)" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M8 20H16" stroke="var(--coral)" strokeWidth="1.5" strokeLinecap="round"/>
              <circle cx="22" cy="18" r="3" stroke="var(--coral)" strokeWidth="1.5" fill="none"/>
              <path d="M20.5 19.5L24 23" stroke="var(--coral)" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <h3 className="service-title">PdM支援</h3>
          <p className="service-description">
            プロダクトの方向性を整理し、チーム一丸となれる戦略を構築します。曖昧な課題を明確化し、適切な優先順位で進める道筋をサポートします。
          </p>
          <a href="/service/pdm" className="service-link">詳細を見る →</a>
        </div>
        <div className="service-card">
          <div className="service-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 4C16 4 24 8 24 16C24 20 20 24 16 24C12 24 8 20 8 16C8 8 16 4 16 4Z" stroke="var(--blue)" strokeWidth="2" fill="none"/>
              <path d="M13 13C13 13 14.5 15 16 15C17.5 15 19 13 19 13" stroke="var(--blue)" strokeWidth="1.5" strokeLinecap="round"/>
              <circle cx="13" cy="11" r="1" fill="var(--blue)"/>
              <circle cx="19" cy="11" r="1" fill="var(--blue)"/>
              <path d="M12 19L16 23L20 19" stroke="var(--blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 21V27" stroke="var(--blue)" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <h3 className="service-title">ブランド・言語化支援</h3>
          <p className="service-description">
            想いを言葉にし、ブランドの価値を明確に伝える手助けをします。表現に迷う時間を削減し、一貫性のあるメッセージングを構築します。
          </p>
          <a href="/service/brand" className="service-link">詳細を見る →</a>
        </div>
        <div className="service-card">
          <div className="service-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 8C4 6.89543 4.89543 6 6 6H26C27.1046 6 28 6.89543 28 8V24C28 25.1046 27.1046 26 26 26H6C4.89543 26 4 25.1046 4 24V8Z" stroke="var(--green)" strokeWidth="2" fill="none"/>
              <path d="M4 12H28" stroke="var(--green)" strokeWidth="2"/>
              <circle cx="8" cy="9" r="1" fill="var(--green)"/>
              <circle cx="12" cy="9" r="1" fill="var(--green)"/>
              <circle cx="16" cy="9" r="1" fill="var(--green)"/>
              <path d="M8 16L12 20L24 16" stroke="var(--green)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 21H16" stroke="var(--green)" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <h3 className="service-title">軽やかなWeb制作</h3>
          <p className="service-description">
            シンプルで効果的なWebサイトを迅速に構築いたします。技術選定から運用まで、長期的な視点でサポートし、無駄な複雑さを排除します。
          </p>
          <a href="/service/web" className="service-link">詳細を見る →</a>
        </div>
      </div>
    </div>
  </section>
);

export default Services; 