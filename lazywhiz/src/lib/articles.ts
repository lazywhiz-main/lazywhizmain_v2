export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  readTime: string;
  category: string;
  tags: string[];
  themeColor: 'coral' | 'blue' | 'green';
  images?: {
    hero?: string;
    content?: Array<{
      id: string;
      src: string;
      alt: string;
      caption?: string;
    }>;
  };
}

export const articles: Article[] = [
  {
    id: 'ai-service-design-with-chatgpt',
    title: 'AIと即興セッションでつくる ─ 企画から実装まで走り切るVibe Codingプロセス',
    excerpt: '思考支援プラットフォーム「POCONEST」の立ち上げにおいて、AI（ChatGPT・Claude）との対話を通じて、「アイデア出し → 設計 → 実装」までを一気通貫で進めたプロセスをご紹介します。',
    content: `## 概要

この事例では、思考支援プラットフォーム「POCONEST」の立ち上げにおいて、  
**AI（ChatGPT・Claude）との対話を通じて、「アイデア出し → 設計 → 実装」までを一気通貫で進めた**プロセスをご紹介します。

開発にはCursorAI（React + React Native Web対応）を使用。  
3週間の片手間プロジェクトながら、構想から実働プロトタイプまで到達できた背景には、  
**即興性とAIの構造力を融合させた"Vibe Coding"のアプローチ**があります。

---

## 使用技術と環境

| 項目 | 使用ツール・技術 |
|------|------------------|
| 構想・要件整理 | ChatGPT（構想壁打ち） |
| UIトーン／構造設計 | Claude（デザインシステム／UX設計） |
| 実装 | CursorAI（React + React Native Web） |
| バックエンド | Supabase（認証・DB・リアルタイム） |
| デプロイ | Vercel |

---

## プロセス概要

### 1. アイデア出し ─ ChatGPTで"問いから考える"

開発は、ふとした思いつきから始まりました。  
「会話や思考の断片が散らからずに、あとから整理できるツールが欲しい」

ChatGPTを壁打ち相手として、

- 想定ユーザーは？  
- どういう課題がある？  
- まず何を作るべきか？

と問いを返してもらいながら、構想を整理。  
その過程で、以下のような**MVPの方向性**が自然と見えてきました：

> チャット → アイデア化（カード） → 整理（ボード） → 構造分析

![ChatGPTとの構想対話ログ](IMAGE_PLACEHOLDER_1)

---

### 2. 設計 ─ Claudeで構造・デザイン・UXを編む

ChatGPTで"何を作るか"が定まったあと、**"どう作るか"の設計フェーズ**へ。

Claudeには、以下のような問いを投げました：

- 「このサービスに合うUIトーンは？」  
- 「各スペースの関係性はどう整理すべき？」  
- 「D3でネットワーク可視化するには何が必要？」

Claudeは、感覚的な要望を**構造／設計レベルに変換する支援**が得意で、  
具体的なパーツ構成・階層設計・UIの参考例などを提示してくれました。

ここで、

- **Nest / Chat / Board / Meeting / Analysis** という5つのスペース  
- 情報の流れと視覚構造の骨格  
- カード構造や関係性の抽象モデル

が決まり、Cursorに渡せる設計が整いました。

![Claudeから得た構造メモ](IMAGE_PLACEHOLDER_2)

---

### 3. 実装 ─ CursorAIで開発を一気に進める

整った設計とプロンプトをもとに、CursorAIで実装をスタート。  
ReactとReact Native Web対応のコードが自動生成され、手直しを加えつつプロトタイプが急速に立ち上がっていきました。

- 画面ごとの実装は、Claudeのアウトラインをそのままプロンプト化  
- Tailwindスタイル込みでベースを生成し、Cursorで細部を微調整  
- Supabaseとの連携（認証・DB構造・リアルタイム）も並行対応

**「まず動くものをつくって、試して考える」**が実現できたのは、Vibe Codingならではのスピード感と柔軟性の賜物です。

![Cursorで構築中のUI](IMAGE_PLACEHOLDER_3)

---

## 学びと価値

この即興的な開発プロセスで得た実感は、以下の通りです：

### ● 設計とは、AIとの"翻訳の往復"である  
- 人間の直感 → AIの構造提案 → 判断 → さらに洗練  
- この往復を高速で回せることが、企画フェーズを一気に進める鍵になった

### ● 決めながら作る、作りながら決める  
- 構想が明確になるごとに、次のUIが自然に見えてくる  
- 実装が進むごとに、次の判断基準がアップデートされる  
- 決定と行動が常に循環するのが、Vibe Codingの本質

---

## 関連記事

- [#1 作りながら決める、決めながら作る。](#)
- [#2 問いを返してくる相棒──ChatGPTと構想を壁打ちする](#)
- [#3 Claudeは構造を編むエンジニアだった（近日公開）](#)

---

**LAZYWHIZは、プロダクトの"輪郭のない瞬間"から、AIとともに言語化・設計・実装まで並走します。**  
「まずつくってみたい」その気持ちを、最速で"かたち"に変えるお手伝いをします。`,
    publishedAt: '2025.06.12',
    readTime: '8 min read',
    category: 'AI活用',
    tags: ['ChatGPT', 'Claude', 'Vibe Coding', 'プロダクト開発', 'CursorAI'],
    themeColor: 'coral',
    images: {
      hero: '/images/articles/vibe-coding-hero.jpg',
      content: [
        {
          id: 'IMAGE_PLACEHOLDER_1',
          src: '/images/articles/chatgpt-brainstorm-dialog.png',
          alt: 'ChatGPTとの構想対話ログ',
          caption: 'ChatGPTとの構想対話ログ（画像挿入可）'
        },
        {
          id: 'IMAGE_PLACEHOLDER_2',
          src: '/images/articles/claude-structure-memo.png',
          alt: 'Claudeから得た構造メモ',
          caption: 'Claudeから得た構造メモ or UIイメージ提案（画像）'
        },
        {
          id: 'IMAGE_PLACEHOLDER_3',
          src: '/images/articles/cursor-ui-development.png',
          alt: 'Cursorで構築中のUI',
          caption: 'Cursorで構築中のUIスクショ（横並びでビフォーアフター比較してもOK）'
        }
      ]
    }
  }
];

export function getArticleById(id: string): Article | undefined {
  return articles.find(article => article.id === id);
}

export function getAllArticles(): Article[] {
  return articles.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
} 