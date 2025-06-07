import React from 'react';

const ArticlesPage: React.FC = () => (
  <section className="articles-detail-section">
    <div className="articles-detail-content">
      <div className="section-header">
        <h1 className="section-title">Articles</h1>
        <p className="section-subtitle">決断力を高めるヒントと実践的なツール</p>
      </div>
      <div className="articles-detail-grid">
        <article className="article-detail-card">
          <span className="article-detail-tag">Insight</span>
          <h3 className="article-detail-title">決断疲れを避ける3つの思考法</h3>
          <p className="article-detail-excerpt">
            日々の小さな決断から重要な選択まで、エネルギーを無駄にしない考え方をご紹介。認知的負荷を軽減し、本当に大切な決断に集中するための手法をまとめました。
          </p>
          <div className="article-detail-meta">2025.01.15 | 5 min read</div>
        </article>
        <article className="article-detail-card">
          <span className="article-detail-tag">Tools</span>
          <h3 className="article-detail-title">プロダクト戦略テンプレート</h3>
          <p className="article-detail-excerpt">
            チームで使える戦略整理のフレームワーク。複雑な課題を構造化して進めるためのテンプレートを無料で配布しています。そのまま使える形で提供。
          </p>
          <div className="article-detail-meta">2025.01.10 | テンプレート</div>
        </article>
        <article className="article-detail-card">
          <span className="article-detail-tag">Case</span>
          <h3 className="article-detail-title">チーム決断力を高めるファシリテーション</h3>
          <p className="article-detail-excerpt">
            実際の支援事例から学ぶ、効果的な意思決定プロセスの作り方。10人規模のチームで実践した手法と、その結果得られた成果をご紹介します。
          </p>
          <div className="article-detail-meta">2025.01.05 | 8 min read</div>
        </article>
        <article className="article-detail-card">
          <span className="article-detail-tag">AI & Apps</span>
          <h3 className="article-detail-title">意思決定を支援するAIツール比較</h3>
          <p className="article-detail-excerpt">
            意思決定プロセスを効率化するAIツールの比較レビュー。実際に使ってみた感想と、どのような場面で活用できるかを具体的に解説しています。
          </p>
          <div className="article-detail-meta">2024.12.28 | 6 min read</div>
        </article>
        <article className="article-detail-card">
          <span className="article-detail-tag">Insight</span>
          <h3 className="article-detail-title">「迷う時間」を価値に変える方法</h3>
          <p className="article-detail-excerpt">
            迷いや悩みを単なる時間の浪費ではなく、より良い選択のための投資として捉える視点転換。迷いの中にある価値を発見し、活用する方法論。
          </p>
          <div className="article-detail-meta">2024.12.20 | 7 min read</div>
        </article>
        <article className="article-detail-card">
          <span className="article-detail-tag">Tools</span>
          <h3 className="article-detail-title">1on1ミーティング設計シート</h3>
          <p className="article-detail-excerpt">
            部下やチームメンバーとの1on1を効果的に進めるためのシート。質問例や進行のコツ、振り返りのポイントまで含めた実践的なツールです。
          </p>
          <div className="article-detail-meta">2024.12.15 | テンプレート</div>
        </article>
      </div>
    </div>
  </section>
);

export default ArticlesPage; 