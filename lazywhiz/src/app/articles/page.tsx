import React from 'react';
import Link from 'next/link';
import { getAllArticles } from '../../lib/articles';

const ArticlesPage: React.FC = () => {
  const articles = getAllArticles();

  return (
    <section className="articles-detail-section">
      <div className="articles-detail-content">
        <div className="section-header">
          <h1 className="section-title">Articles</h1>
          <p className="section-subtitle">決断力を高めるヒントと実践的なツール</p>
        </div>
        <div className="articles-detail-grid">
          {articles.map((article) => (
            <Link 
              key={article.id} 
              href={`/articles/${article.id}`}
              className="article-detail-card-link"
            >
              <article className="article-detail-card">
                <span className="article-detail-tag">{article.category}</span>
                <h3 className="article-detail-title">{article.title}</h3>
                <p className="article-detail-excerpt">{article.excerpt}</p>
                <div className="article-detail-meta">
                  {article.publishedAt} | {article.readTime}
                </div>
                <div className="article-tags-preview">
                  {article.tags.slice(0, 2).map((tag, index) => (
                    <span key={index} className="article-tag-small">
                      {tag}
                    </span>
                  ))}
                  {article.tags.length > 2 && (
                    <span className="article-tag-more">+{article.tags.length - 2}</span>
                  )}
                </div>
              </article>
            </Link>
          ))}
          
          {/* プレースホルダー記事（今後追加予定） */}
          <article className="article-detail-card article-placeholder">
            <span className="article-detail-tag">Tools</span>
            <h3 className="article-detail-title">プロダクト戦略テンプレート</h3>
            <p className="article-detail-excerpt">
              チームで使える戦略整理のフレームワーク。複雑な課題を構造化して進めるためのテンプレートを無料で配布予定。
            </p>
            <div className="article-detail-meta">準備中 | テンプレート</div>
            <div className="coming-soon-badge">Coming Soon</div>
          </article>
          
          <article className="article-detail-card article-placeholder">
            <span className="article-detail-tag">Case</span>
            <h3 className="article-detail-title">チーム決断力を高めるファシリテーション</h3>
            <p className="article-detail-excerpt">
              実際の支援事例から学ぶ、効果的な意思決定プロセスの作り方。10人規模のチームで実践した手法と成果をご紹介予定。
            </p>
            <div className="article-detail-meta">準備中 | 8 min read</div>
            <div className="coming-soon-badge">Coming Soon</div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ArticlesPage; 