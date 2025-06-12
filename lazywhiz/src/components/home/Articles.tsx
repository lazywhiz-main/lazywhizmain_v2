'use client';

import React from 'react';
import Link from 'next/link';
import { getAllArticles } from '../../lib/articles';

const Articles: React.FC = () => {
  const articles = getAllArticles().slice(0, 3); // 最新3記事を表示

  return (
    <section className="articles-section">
      <div className="articles-content">
        <div className="section-header">
          <h2 className="section-title">Recent Articles</h2>
          <p className="section-subtitle">決断力を高めるヒントと実践的なツールをお届けします</p>
        </div>
        <div className="articles-grid">
          {articles.map((article, index) => (
            <Link 
              key={article.id} 
              href={`/articles/${article.id}`}
              className="article-card-link"
            >
              <article className="article-card">
                <div className="article-image">
                  <div className="article-image-placeholder-home">
                    <span className="article-number">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                </div>
                <div className="article-content">
                  <span className="article-tag">{article.category}</span>
                  <h3 className="article-title">{article.title}</h3>
                  <p className="article-excerpt">{article.excerpt}</p>
                  <div className="article-meta-home">
                    <span className="article-date-home">{article.publishedAt}</span>
                    <span className="article-read-time-home">{article.readTime}</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
        
        <div className="articles-cta">
          <Link href="/articles" className="articles-view-all">
            すべての記事を見る
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Articles; 