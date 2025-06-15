'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import { getArticleById } from '../../../lib/articles';
import Link from 'next/link';

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleById(params.slug);

  if (!article) {
    notFound();
  }

  // Markdownライクなコンテンツを簡単なHTMLに変換する関数
  const formatContent = (content: string) => {
    // テーブルブロックを検出して一括変換
    content = content.replace(/((?:^\|.*\|\n?)+)/gm, (tableBlock) => {
      // 各行を分割
      const rows = tableBlock.trim().split('\n').filter(Boolean);
      if (rows.length < 2) return tableBlock; // テーブルでなければそのまま
      const htmlRows = rows.map((row, i) => {
        const cells = row.split('|').slice(1, -1).map(cell => cell.trim());
        if (i === 0) {
          return `<tr>${cells.map(cell => `<th>${cell}</th>`).join('')}</tr>`;
        } else if (cells.every(cell => /^-+$/.test(cell))) {
          return '';
        } else {
          return `<tr>${cells.map(cell => `<td>${cell}</td>`).join('')}</tr>`;
        }
      }).filter(Boolean).join('');
      return `<div class="article-table-wrapper"><table class="article-table">${htmlRows}</table></div>`;
    });

    return content
      // コードブロック処理（三連バッククォート）
      .replace(/```(\w+)?\n([\s\S]*?)```/g, (match, lang, code) => {
        return `<div class="article-code-block">
          <div class="article-code-header">CODE${lang ? ` (${lang})` : ''}</div>
          <pre><code>${code.trim()}</code></pre>
        </div>`;
      })
      // インラインコード処理
      .replace(/`([^`]+)`/g, '<code class="article-inline-code">$1</code>')
      // 見出し処理（##と###をサポート）
      .replace(/^### (.+)$/gm, '<h3 class="article-h3">$1</h3>')
      .replace(/^## (.+)$/gm, '<h2 class="article-h2">$1</h2>')
      // 太字（**text**）
      .replace(/\*\*(.+?)\*\*/g, '<strong class="article-strong">$1</strong>')
      // 引用処理（> で始まる行）
      .replace(/^> (.+)$/gm, '<blockquote class="article-quote">$1</blockquote>')
      // 重要な箇所のハイライト（!で始まる段落）
      .replace(/^!\s*(.+)$/gm, '<div class="article-highlight"><span class="article-highlight-icon">💡</span>$1</div>')
      // リスト処理（- で始まる行）
      .replace(/^- (.+)$/gm, '<li class="article-li">$1</li>')
      // 画像プレースホルダー処理
      .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, alt, src) => {
        if (src === 'IMAGE_PLACEHOLDER_1' || src === 'IMAGE_PLACEHOLDER_2' || src === 'IMAGE_PLACEHOLDER_3') {
          return `<div class="article-image-placeholder">
            <div class="article-image-placeholder-content">
              <div class="article-image-placeholder-icon">📷</div>
              <div class="article-image-placeholder-text">${alt}</div>
              <div class="article-image-placeholder-caption">画像挿入予定</div>
            </div>
          </div>`;
        }
        return `<img src="${src}" alt="${alt}" class="article-image" />`;
      })
      // 水平線処理
      .replace(/^---$/gm, '<hr class="article-divider" />')
      // 段落処理（連続する改行を段落に変換）
      .replace(/\n\n/g, '</p><p class="article-p">')
      // 最初と最後に段落タグを追加
      .replace(/^(.)/gm, '<p class="article-p">$1')
      .replace(/(.+)$/gm, '$1</p>')
      // 空の段落を削除
      .replace(/<p class="article-p"><\/p>/g, '')
      // HTMLタグが含まれる段落の重複を修正
      .replace(/<p class="article-p">(<h[23]|<div|<hr|<blockquote|<li|<table)/g, '$1')
      .replace(/(<\/h[23]>|<\/div>|<\/hr>|<\/blockquote>|<\/li>|<\/table>)<\/p>/g, '$1');
  };

  return (
    <div className={`article-detail-page theme-${article.themeColor}`}>
      <div className="article-header">
        <div className="article-header-content">
          <div className="article-breadcrumb">
            <Link href="/articles" className="breadcrumb-link">
              Articles
            </Link>
            <span className="breadcrumb-separator">→</span>
            <span className="breadcrumb-current">{article.category}</span>
          </div>
          
          <h1 className="article-title-main">{article.title}</h1>
          
          <div className="article-meta">
            <span className="article-date">{article.publishedAt}</span>
            <span className="article-separator">|</span>
            <span className="article-read-time">{article.readTime}</span>
            <span className="article-separator">|</span>
            <span className="article-category">{article.category}</span>
          </div>
          
          <div className="article-tags">
            {article.tags.map((tag, index) => (
              <span key={index} className="article-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="article-content-wrapper">
        <div className="article-content">
          <div 
            className="article-body"
            dangerouslySetInnerHTML={{ 
              __html: `<p class="article-p">${formatContent(article.content)}</p>` 
            }}
          />
        </div>
      </div>

      <div className="article-footer">
        <div className="article-footer-content">
          <div className="article-navigation">
            <Link href="/articles" className="back-to-articles">
              <span>← Articles一覧に戻る</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}