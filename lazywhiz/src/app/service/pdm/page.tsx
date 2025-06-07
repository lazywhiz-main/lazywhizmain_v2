import React from 'react';

const PdMServicePage: React.FC = () => (
  <section className="service-detail-section">
    <div className="service-detail-content">
      <div className="section-header">
        <h1 className="section-title">PdM支援</h1>
        <p className="section-subtitle">プロダクトの方向性を整理し、チーム一丸となれる戦略を構築します</p>
      </div>
      
      <div className="service-single-content">
        <div className="service-overview">
          <div className="service-hero-icon">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 8C9.79086 8 8 9.79086 8 12V52C8 54.2091 9.79086 56 12 56H52C54.2091 56 56 54.2091 56 52V12C56 9.79086 54.2091 8 52 8H12Z" stroke="var(--coral)" strokeWidth="3" fill="none"/>
              <path d="M16 20H48" stroke="var(--coral)" strokeWidth="3" strokeLinecap="round"/>
              <path d="M16 30H40" stroke="var(--coral)" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M16 40H32" stroke="var(--coral)" strokeWidth="2.5" strokeLinecap="round"/>
              <circle cx="44" cy="36" r="6" stroke="var(--coral)" strokeWidth="2.5" fill="none"/>
              <path d="M41 39L48 46" stroke="var(--coral)" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>
          
          <div className="service-description-full">
            <p>
              プロダクト開発において「何を作るべきか」「どの順序で進めるべきか」といった根本的な判断を、
              データと論理的思考に基づいてサポートします。曖昧な課題を具体的なアクションプランに落とし込み、
              チーム全体が同じ方向を向いて進める環境を構築します。
            </p>
          </div>
        </div>

        <div className="service-details-grid">
          <div className="service-detail-block">
            <h3>提供サービス</h3>
            <ul className="service-features-detailed">
              <li>
                <strong>プロダクト戦略の整理・言語化</strong>
                <span>ビジョンとミッションの明確化、ターゲット顧客の定義、競合分析と差別化ポイントの整理</span>
              </li>
              <li>
                <strong>ロードマップ策定支援</strong>
                <span>短期・中期・長期の目標設定、優先順位付けのフレームワーク導入、リリース計画の立案</span>
              </li>
              <li>
                <strong>チーム意思決定プロセス構築</strong>
                <span>決断基準の明文化、ステークホルダー間の合意形成手法、効率的な会議運営</span>
              </li>
              <li>
                <strong>ステークホルダー調整</strong>
                <span>部門間の利害調整、外部パートナーとの連携強化、経営陣への報告体制構築</span>
              </li>
              <li>
                <strong>KPI設計・効果測定</strong>
                <span>成果指標の設定、データ収集・分析体制の構築、PDCAサイクルの確立</span>
              </li>
            </ul>
          </div>

          <div className="service-detail-block">
            <h3>こんな課題をお持ちの方に</h3>
            <ul className="problem-list">
              <li>プロダクトの方向性が定まらず、チームが迷走している</li>
              <li>機能追加の優先順位が決められない</li>
              <li>ステークホルダー間で意見が分かれ、前に進まない</li>
              <li>データはあるが、意思決定に活用できていない</li>
              <li>短期的な要求に追われ、長期的な戦略が描けない</li>
            </ul>
          </div>

          <div className="service-detail-block">
            <h3>支援の流れ</h3>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">01</div>
                <div className="step-content">
                  <h4>現状把握・課題整理</h4>
                  <p>現在の状況をヒアリング、課題の優先度を整理し、目指すべき状態を明確にします。</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">02</div>
                <div className="step-content">
                  <h4>戦略フレームワーク導入</h4>
                  <p>組織に適したフレームワークを選定・カスタマイズし、継続的に使える仕組みを構築します。</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">03</div>
                <div className="step-content">
                  <h4>実践・改善サイクル</h4>
                  <p>実際に運用しながら微調整を重ね、組織に定着するまでサポートします。</p>
                </div>
              </div>
            </div>
          </div>

          <div className="service-detail-block">
            <h3>期待できる成果</h3>
            <div className="outcomes-grid">
              <div className="outcome-item">
                <h4>意思決定の高速化</h4>
                <p>判断基準が明確になり、迷う時間が大幅に削減されます</p>
              </div>
              <div className="outcome-item">
                <h4>チームの結束力向上</h4>
                <p>共通の目標と戦略により、チーム一丸となって進めます</p>
              </div>
              <div className="outcome-item">
                <h4>成果の可視化</h4>
                <p>適切なKPI設定により、進捗と成果が明確に把握できます</p>
              </div>
            </div>
          </div>
        </div>

        <div className="service-cta-section">
          <h3>まずはお気軽にご相談ください</h3>
          <p>現在の課題をお聞かせください。最適なアプローチをご提案いたします。</p>
          <a href="/contact" className="service-cta-button">
            <span>相談する</span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default PdMServicePage; 