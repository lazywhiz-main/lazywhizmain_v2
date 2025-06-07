import React from 'react';

const ServicePage: React.FC = () => (
  <section className="service-detail-section">
    <div className="service-detail-content">
      <div className="section-header">
        <h1 className="section-title">Services</h1>
        <p className="section-subtitle">3つの領域で「決める」をサポートします</p>
      </div>
      <div className="service-detail-grid">
        <div className="service-detail-card">
          <span className="service-detail-icon">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 6C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6H9Z" stroke="var(--coral)" strokeWidth="2.5" fill="none"/>
              <path d="M12 15H36" stroke="var(--coral)" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M12 22.5H30" stroke="var(--coral)" strokeWidth="2" strokeLinecap="round"/>
              <path d="M12 30H24" stroke="var(--coral)" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="33" cy="27" r="4.5" stroke="var(--coral)" strokeWidth="2" fill="none"/>
              <path d="M30.75 29.25L36 34.5" stroke="var(--coral)" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </span>
          <h3 className="service-detail-title">PdM支援</h3>
          <ul className="service-detail-features">
            <li>プロダクト戦略の整理・言語化</li>
            <li>ロードマップ策定支援</li>
            <li>チーム意思決定プロセス構築</li>
            <li>ステークホルダー調整</li>
            <li>KPI設計・効果測定</li>
          </ul>
          <a href="/service/pdm" className="service-link">詳細を見る →</a>
        </div>
        <div className="service-detail-card">
          <span className="service-detail-icon">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 6C24 6 36 12 36 24C36 30 30 36 24 36C18 36 12 30 12 24C12 12 24 6 24 6Z" stroke="var(--blue)" strokeWidth="2.5" fill="none"/>
              <path d="M19.5 19.5C19.5 19.5 21.75 22.5 24 22.5C26.25 22.5 28.5 19.5 28.5 19.5" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="19.5" cy="16.5" r="1.5" fill="var(--blue)"/>
              <circle cx="28.5" cy="16.5" r="1.5" fill="var(--blue)"/>
              <path d="M18 28.5L24 34.5L30 28.5" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M24 31.5V40.5" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </span>
          <h3 className="service-detail-title">ブランド・言語化支援</h3>
          <ul className="service-detail-features">
            <li>ブランドアイデンティティ整理</li>
            <li>メッセージング戦略構築</li>
            <li>コンテンツライティング</li>
            <li>トーン&マナー策定</li>
            <li>社内浸透支援</li>
          </ul>
          <a href="/service/brand" className="service-link">詳細を見る →</a>
        </div>
        <div className="service-detail-card">
          <span className="service-detail-icon">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 12C6 10.3431 7.34315 9 9 9H39C40.6569 9 42 10.3431 42 12V36C42 37.6569 40.6569 39 39 39H9C7.34315 39 6 37.6569 6 36V12Z" stroke="var(--green)" strokeWidth="2.5" fill="none"/>
              <path d="M6 18H42" stroke="var(--green)" strokeWidth="2.5"/>
              <circle cx="12" cy="13.5" r="1.5" fill="var(--green)"/>
              <circle cx="18" cy="13.5" r="1.5" fill="var(--green)"/>
              <circle cx="24" cy="13.5" r="1.5" fill="var(--green)"/>
              <path d="M12 24L18 30L36 24" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 31.5H24" stroke="var(--green)" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </span>
          <h3 className="service-detail-title">軽やかなWeb制作</h3>
          <ul className="service-detail-features">
            <li>ミニマルなサイト設計</li>
            <li>レスポンシブデザイン</li>
            <li>CMS導入・運用支援</li>
            <li>パフォーマンス最適化</li>
            <li>保守・更新サポート</li>
          </ul>
          <a href="/service/web" className="service-link">詳細を見る →</a>
        </div>
      </div>
    </div>
  </section>
);

export default ServicePage; 