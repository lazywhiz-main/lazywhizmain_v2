'use client';

import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              LazyWhiz
            </Link>
            <p className="footer-description">
              決めることへの伴走をテーマに、プロダクトマネジメント、ブランディング、Web制作のサポートを提供しています。
            </p>
            <div className="footer-accent-line"></div>
          </div>

          <div className="footer-nav-group">
            <div className="footer-nav-section">
              <h3 className="footer-nav-title">サービス</h3>
              <ul className="footer-nav-list">
                <li>
                  <Link href="/service#pdm" className="footer-nav-link">
                    PdM支援
                  </Link>
                </li>
                <li>
                  <Link href="/service#branding" className="footer-nav-link">
                    ブランド・言語化支援
                  </Link>
                </li>
                <li>
                  <Link href="/service#web" className="footer-nav-link">
                    軽やかなWeb制作
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer-nav-section">
              <h3 className="footer-nav-title">ナビゲーション</h3>
              <ul className="footer-nav-list">
                <li>
                  <Link href="/about" className="footer-nav-link">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/articles" className="footer-nav-link">
                    Articles
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="footer-nav-link">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer-nav-section">
              <h3 className="footer-nav-title">お問い合わせ</h3>
              <ul className="footer-nav-list">
                <li>
                  <a href="mailto:contact@lazywhiz.io" className="footer-nav-link footer-email">
                    contact@lazywhiz.io
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {new Date().getFullYear()} LazyWhiz. All rights reserved.</p>
          </div>
          <div className="footer-decorative-elements">
            <div className="footer-dot footer-dot-1"></div>
            <div className="footer-dot footer-dot-2"></div>
            <div className="footer-dot footer-dot-3"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}; 