'use client';

import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-2xl font-light">
              LazyWhiz
            </Link>
            <p className="mt-4 text-gray-400 text-sm">
              決めることへの伴走をテーマに、プロダクトマネジメント、ブランディング、Web制作のサポートを提供しています。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">サービス</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/service#pdm"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  PdM支援
                </Link>
              </li>
              <li>
                <Link
                  href="/service#branding"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ブランド・言語化支援
                </Link>
              </li>
              <li>
                <Link
                  href="/service#web"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  軽やかなWeb制作
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">ナビゲーション</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/articles"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Articles
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">お問い合わせ</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:contact@lazywhiz.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  contact@lazywhiz.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} LazyWhiz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}; 