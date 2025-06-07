import React from 'react';

const WebServicePage: React.FC = () => (
  <section className="service-detail-section">
    <div className="service-detail-content">
      <div className="section-header">
        <h1 className="section-title">軽やかなWeb制作</h1>
        <p className="section-subtitle">シンプルで効果的なWebサイトを迅速に構築いたします</p>
      </div>
      
      <div className="service-single-content">
        <div className="service-overview">
          <div className="service-hero-icon">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 16C8 13.7909 9.79086 12 12 12H52C54.2091 12 56 13.7909 56 16V48C56 50.2091 54.2091 52 52 52H12C9.79086 52 8 50.2091 8 48V16Z" stroke="var(--green)" strokeWidth="3" fill="none"/>
              <path d="M8 24H56" stroke="var(--green)" strokeWidth="3"/>
              <circle cx="16" cy="18" r="2" fill="var(--green)"/>
              <circle cx="24" cy="18" r="2" fill="var(--green)"/>
              <circle cx="32" cy="18" r="2" fill="var(--green)"/>
              <path d="M16 32L24 40L48 32" stroke="var(--green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 42H32" stroke="var(--green)" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>
          
          <div className="service-description-full">
            <p>
              「必要な機能だけを、適切な技術で」をモットーに、無駄な複雑さを排除したWebサイトを制作します。
              長期的な運用を見据えた設計により、更新・拡張しやすく、運用コストを抑えたサイトを提供します。
            </p>
          </div>
        </div>

        <div className="service-details-grid">
          <div className="service-detail-block">
            <h3>提供サービス</h3>
            <ul className="service-features-detailed">
              <li>
                <strong>ミニマルなサイト設計</strong>
                <span>目的に特化した機能設計、直感的なUI/UX設計、必要最小限の実装による高速化</span>
              </li>
              <li>
                <strong>レスポンシブデザイン</strong>
                <span>スマートフォン・タブレット・PC対応、デバイス横断での一貫したUX提供</span>
              </li>
              <li>
                <strong>CMS導入・運用支援</strong>
                <span>更新しやすいCMS選定・設計、運用マニュアル作成、継続的なサポート</span>
              </li>
              <li>
                <strong>パフォーマンス最適化</strong>
                <span>ページ表示速度の向上、SEO対策、アクセシビリティ対応</span>
              </li>
              <li>
                <strong>保守・更新サポート</strong>
                <span>セキュリティアップデート、機能追加、定期的なメンテナンス</span>
              </li>
            </ul>
          </div>

          <div className="service-detail-block">
            <h3>こんな課題をお持ちの方に</h3>
            <ul className="problem-list">
              <li>現在のサイトが重くて表示が遅い</li>
              <li>更新作業が複雑で時間がかかる</li>
              <li>機能が多すぎて使いづらい</li>
              <li>モバイル対応ができていない</li>
              <li>運用コストが高く、改善したい</li>
            </ul>
          </div>

          <div className="service-detail-block">
            <h3>支援の流れ</h3>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">01</div>
                <div className="step-content">
                  <h4>要件整理・設計</h4>
                  <p>目的とターゲットを明確にし、最適な技術構成とサイト設計を提案します。</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">02</div>
                <div className="step-content">
                  <h4>制作・実装</h4>
                  <p>アジャイルな開発手法で、段階的にサイトを構築し、都度確認しながら進めます。</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">03</div>
                <div className="step-content">
                  <h4>運用サポート</h4>
                  <p>公開後の運用をサポートし、必要に応じて機能追加や改善を継続的に行います。</p>
                </div>
              </div>
            </div>
          </div>

          <div className="service-detail-block">
            <h3>期待できる成果</h3>
            <div className="outcomes-grid">
              <div className="outcome-item">
                <h4>運用効率の向上</h4>
                <p>シンプルな構成により、更新作業が簡単になります</p>
              </div>
              <div className="outcome-item">
                <h4>コスト削減</h4>
                <p>必要最小限の機能により、運用コストを抑えられます</p>
              </div>
              <div className="outcome-item">
                <h4>ユーザー体験の改善</h4>
                <p>高速で使いやすいサイトにより、訪問者満足度が向上します</p>
              </div>
            </div>
          </div>
        </div>

        <div className="service-cta-section">
          <h3>まずはお気軽にご相談ください</h3>
          <p>現在のWebサイトの課題をお聞かせください。最適なソリューションをご提案いたします。</p>
          <a href="/contact" className="service-cta-button">
            <span>相談する</span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default WebServicePage; 