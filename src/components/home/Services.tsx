'use client';

import React from 'react';
import Link from 'next/link';
import { MdAssignment, MdChatBubbleOutline, MdWeb } from 'react-icons/md';

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
          <div className="service-icon"><MdAssignment /></div>
          <h3 className="service-title">PdM支援</h3>
          <p className="service-description">プロダクトの方向性を整理し、チーム一丸となれる戦略を構築します。曖昧な課題を明確化し、適切な優先順位で進める道筋をサポートします。</p>
          <a href="/service" className="service-link">詳しく見る →</a>
        </div>
        <div className="service-card">
          <div className="service-icon"><MdChatBubbleOutline /></div>
          <h3 className="service-title">ブランド・言語化支援</h3>
          <p className="service-description">想いを言葉にし、ブランドの価値を明確に伝える手助けをします。表現に迷う時間を削減し、一貫性のあるメッセージングを構築します。</p>
          <a href="/service" className="service-link">詳しく見る →</a>
        </div>
        <div className="service-card">
          <div className="service-icon"><MdWeb /></div>
          <h3 className="service-title">軽やかなWeb制作</h3>
          <p className="service-description">シンプルで効果的なWebサイトを迅速に構築いたします。技術選定から運用まで、長期的な視点でサポートし、無駄な複雑さを排除します。</p>
          <a href="/service" className="service-link">詳しく見る →</a>
        </div>
      </div>
    </div>
  </section>
);

export default Services; 