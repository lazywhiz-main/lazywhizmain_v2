# LazyWhiz

決めることへの伴走をテーマに、プロダクトマネジメント、ブランディング、Web制作のサポートを提供するウェブサイトです。

## 技術スタック

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- microCMS

## 開発環境のセットアップ

1. リポジトリをクローン
```bash
git clone https://github.com/yourusername/lazywhiz.git
cd lazywhiz
```

2. 依存関係のインストール
```bash
npm install
```

3. 環境変数の設定
`.env.local`ファイルを作成し、以下の環境変数を設定してください：

```env
MICROCMS_SERVICE_DOMAIN=your-service-domain
MICROCMS_API_KEY=your-api-key
```

4. 開発サーバーの起動
```bash
npm run dev
```

## プロジェクト構造

```
src/
  ├── app/              # Next.js アプリケーションのルート
  ├── components/       # React コンポーネント
  │   ├── home/        # ホームページのコンポーネント
  │   ├── layout/      # レイアウトコンポーネント
  │   ├── shared/      # 共有コンポーネント
  │   └── ui/          # UI コンポーネント
  ├── lib/             # ユーティリティ関数と設定
  └── types/           # TypeScript 型定義
```

## デプロイ

このプロジェクトは Vercel にデプロイすることを想定しています。以下の手順でデプロイできます：

1. Vercel にプロジェクトをインポート
2. 環境変数を設定
3. デプロイを実行

## ライセンス

MIT