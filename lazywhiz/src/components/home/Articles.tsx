'use client';

import React from 'react';
import Link from 'next/link';

const articles = [
  {
    tag: 'Insight',
    title: '決断疲れを避ける3つの思考法',
    excerpt: '日々の小さな決断から重要な選択まで、エネルギーを無駄にしない考え方をご紹介...',
  },
  {
    tag: 'Tools',
    title: 'プロダクト戦略テンプレート',
    excerpt: 'チームで使える戦略整理のフレームワーク。複雑な課題を構造化して進める...',
  },
  {
    tag: 'Case',
    title: 'チーム決断力を高めるファシリテーション',
    excerpt: '実際の支援事例から学ぶ、効果的な意思決定プロセスの作り方...',
  },
];

const Articles: React.FC = () => (
  <section className="articles-section">
    <div className="articles-content">
      <div className="section-header">
        <h2 className="section-title">Recent Articles</h2>
        <p className="section-subtitle">決断力を高めるヒントと実践的なツールをお届けします</p>
      </div>
      <div className="articles-grid">
        <article className="article-card">
          <div className="article-image"></div>
          <div className="article-content">
            <span className="article-tag">Insight</span>
            <h3 className="article-title">決断疲れを避ける3つの思考法</h3>
            <p className="article-excerpt">日々の小さな決断から重要な選択まで、エネルギーを無駄にしない考え方をご紹介...</p>
          </div>
        </article>
        <article className="article-card">
          <div className="article-image"></div>
          <div className="article-content">
            <span className="article-tag">Tools</span>
            <h3 className="article-title">プロダクト戦略テンプレート</h3>
            <p className="article-excerpt">チームで使える戦略整理のフレームワーク。複雑な課題を構造化して進める...</p>
          </div>
        </article>
        <article className="article-card">
          <div className="article-image"></div>
          <div className="article-content">
            <span className="article-tag">Case</span>
            <h3 className="article-title">チーム決断力を高めるファシリテーション</h3>
            <p className="article-excerpt">実際の支援事例から学ぶ、効果的な意思決定プロセスの作り方...</p>
          </div>
        </article>
      </div>
    </div>
  </section>
);

export default Articles; 