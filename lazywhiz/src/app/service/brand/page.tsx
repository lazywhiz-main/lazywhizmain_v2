import React from 'react';

const BrandServicePage: React.FC = () => (
  <section className="service-detail-section">
    <div className="service-detail-content">
      <div className="section-header">
        <h1 className="section-title">ブランド・言語化支援</h1>
        <p className="section-subtitle">想いを言葉にし、ブランドの価値を明確に伝える手助けをします</p>
      </div>
      
      <div className="service-single-content">
        <div className="service-overview">
          <div className="service-hero-icon">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M32 8C32 8 48 16 48 32C48 40 40 48 32 48C24 48 16 40 16 32C16 16 32 8 32 8Z" stroke="var(--blue)" strokeWidth="3" fill="none"/>
              <path d="M26 26C26 26 29 30 32 30C35 30 38 26 38 26" stroke="var(--blue)" strokeWidth="2.5" strokeLinecap="round"/>
              <circle cx="26" cy="22" r="2" fill="var(--blue)"/>
              <circle cx="38" cy="22" r="2" fill="var(--blue)"/>
              <path d="M24 38L32 46L40 38" stroke="var(--blue)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M32 42V54" stroke="var(--blue)" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>
          
          <div className="service-description-full">
            <p>
              「なんとなく伝わらない」「想いはあるけど言葉にできない」そんな課題を解決します。
              ブランドの核となる価値を明確にし、一貫性のあるメッセージとして表現することで、
              ターゲットに響く強いブランドを構築します。
            </p>
          </div>
        </div>

        <div className="service-details-grid">
          <div className="service-detail-block">
            <h3>提供サービス</h3>
            <ul className="service-features-detailed">
              <li>
                <strong>ブランドアイデンティティ整理</strong>
                <span>企業理念の再定義、ブランドパーソナリティの設定、競合との差別化ポイント明確化</span>
              </li>
              <li>
                <strong>メッセージング戦略構築</strong>
                <span>ターゲット別メッセージ設計、キーメッセージの策定、ストーリーテリング手法の開発</span>
              </li>
              <li>
                <strong>コンテンツライティング</strong>
                <span>Webサイト文章作成、営業資料の改善、プレスリリース・記事執筆</span>
              </li>
              <li>
                <strong>トーン&マナー策定</strong>
                <span>ブランドボイスの定義、文体ガイドライン作成、コミュニケーション指針の設定</span>
              </li>
              <li>
                <strong>社内浸透支援</strong>
                <span>ブランドガイドライン作成、社内研修の実施、継続的な浸透活動のサポート</span>
              </li>
            </ul>
          </div>

          <div className="service-detail-block">
            <h3>こんな課題をお持ちの方に</h3>
            <ul className="problem-list">
              <li>ブランドの特徴や価値が顧客に伝わっていない</li>
              <li>メッセージがバラバラで一貫性がない</li>
              <li>想いはあるが、言葉にするのが苦手</li>
              <li>競合との違いを明確に表現できない</li>
              <li>社内でブランドの理解が統一されていない</li>
            </ul>
          </div>

          <div className="service-detail-block">
            <h3>支援の流れ</h3>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">01</div>
                <div className="step-content">
                  <h4>ブランド棚卸し</h4>
                  <p>現在のブランド認知・メッセージの現状を把握し、理想とのギャップを明確にします。</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">02</div>
                <div className="step-content">
                  <h4>コアメッセージ開発</h4>
                  <p>ブランドの本質を言語化し、ターゲットに響く表現方法を一緒に開発します。</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">03</div>
                <div className="step-content">
                  <h4>運用・浸透支援</h4>
                  <p>開発したメッセージを実際の場面で活用し、組織全体に浸透させていきます。</p>
                </div>
              </div>
            </div>
          </div>

          <div className="service-detail-block">
            <h3>期待できる成果</h3>
            <div className="outcomes-grid">
              <div className="outcome-item">
                <h4>ブランド認知の向上</h4>
                <p>一貫したメッセージにより、ブランドの印象が強く残ります</p>
              </div>
              <div className="outcome-item">
                <h4>営業効率の改善</h4>
                <p>価値が明確に伝わることで、商談の質が向上します</p>
              </div>
              <div className="outcome-item">
                <h4>社内の結束力強化</h4>
                <p>共通の価値観により、チームの一体感が生まれます</p>
              </div>
            </div>
          </div>
        </div>

        <div className="service-cta-section">
          <h3>まずはお気軽にご相談ください</h3>
          <p>現在のブランド課題をお聞かせください。最適なアプローチをご提案いたします。</p>
          <a href="/contact" className="service-cta-button">
            <span>相談する</span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default BrandServicePage; 