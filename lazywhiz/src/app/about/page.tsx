import React from 'react';

const AboutPage: React.FC = () => (
  <section className="about-section">
    <div className="about-content">
      <div className="about-intro">
        <h1 className="about-title">About</h1>
        <p className="about-lead">
          「決める」ことに対するスタンスを大切にし、<br />
          がんばりすぎることなく、賢く生きるためのサポートを提供します。
        </p>
      </div>
      <div className="philosophy-grid">
        <div className="philosophy-item">
          <h3 className="philosophy-title">選択の自律を支援</h3>
          <p className="philosophy-desc">
            答えを提供するのではなく、自分で選択できる状態を作ることを重視します。依存ではなく、自律的な意思決定をサポートします。
          </p>
        </div>
        <div className="philosophy-item">
          <h3 className="philosophy-title">複雑さを削ぎ落とす</h3>
          <p className="philosophy-desc">
            本質的でないものは排除し、シンプルで効果的なアプローチを心がけます。無駄な労力を使わず、核心にフォーカスします。
          </p>
        </div>
        <div className="philosophy-item">
          <h3 className="philosophy-title">長期的な視点</h3>
          <p className="philosophy-desc">
            短期的な解決ではなく、持続可能で発展性のある解決策を提案します。今だけでなく、未来も見据えたサポートを行います。
          </p>
        </div>
        <div className="philosophy-item">
          <h3 className="philosophy-title">ツールとしての知識</h3>
          <p className="philosophy-desc">
            知識や手法を押し付けるのではなく、必要な時に使えるツールとして提供します。状況に応じて最適な手段を選択できるようにします。
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutPage; 