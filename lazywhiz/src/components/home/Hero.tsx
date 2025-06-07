'use client';

import React from 'react';
import Link from 'next/link';

const Hero: React.FC = () => (
  <section className="hero-section">
    <div className="hero-content">
      <div className="hero-text">
        <h1 className="hero-title">
          <span className="line-accent">がんばりすぎず</span>、<br />
          賢く生きる
        </h1>
        <p className="hero-subtitle">
          決断をサポートし、より良い選択へ導きます。<br />
          ツールや思考のきっかけを提供し、あなたの「決める」を後押しします。
        </p>
        <div className="hero-cta">
          <Link href="/contact" className="cta-primary"><span>相談してみる</span></Link>
          <Link href="/service" className="cta-secondary">サービスを見る</Link>
        </div>
      </div>
      <div className="hero-visual">
        <div className="geometric-element line line-1"></div>
        <div className="geometric-element line line-2"></div>
        <div className="geometric-element line line-3"></div>
        <div className="geometric-element circle circle-1"></div>
        <div className="geometric-element circle circle-2"></div>
        <div className="geometric-element circle circle-3"></div>
        <div className="geometric-element triangle triangle-1"></div>
        <div className="geometric-element triangle triangle-2"></div>
        <div className="overlap-zone"></div>
      </div>
    </div>
  </section>
);

export default Hero; 