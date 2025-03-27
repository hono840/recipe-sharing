

# 📌 レシピ共有アプリ

## 📝 アプリ概要

- **目的**: レシピを他の人と共有できるようにする
- **ターゲット**: 特に限定せず、料理をしている人同士の研鑽の場
- **開発体制**: 一人で開発
- **技術スタック**:
    - **フロントエンド**: Next.js
        - **状態管理:** Redux
        - **ユニットテスト:** Jest
    - **バックエンド**: supabase
        - **画像アップロード:** Supabase Storage
    - **インフラ**: supabase

---

# 要件定義

## ✅ MVP機能（最小限のリリース機能）

### 1️⃣ ユーザー認証

- **サインアップ**（メール & パスワードで登録）
- **ログイン**（認証済みユーザーのみ投稿可能）
- **ログアウト**
- **プロフィール管理**（ニックネーム・アイコン変更）
    - `users.avatar_url` に保存

### 2️⃣ レシピ管理

- **レシピ投稿**
    - タイトル、説明文、画像（オプション）
        - **レシピ画像:** `recipes.image_url` に保存
    - 材料リスト（名前・分量）
    - 作り方（ステップごと）
    - 投稿者情報（ユーザーID）
- **レシピ一覧表示**
    - 最新のレシピを表示
    - 人気順（オプション）
    - **検索機能**（タイトル・材料・投稿者）
- **レシピ詳細**
    - 各レシピの詳細表示
    - 投稿者情報の表示
    - レシピ編集（投稿者のみ）
    - レシピ削除（投稿者のみ）

### 3️⃣ いいね機能

- **レシピごとに「いいね」ボタンを設置**
- **ログインユーザーのみ「いいね」が可能**
- **いいね数をレシピ一覧・詳細ページで表示**
- **同じユーザーが2回以上いいねできないように制御**
- **「いいねしたレシピ」一覧をマイページで表示**

### 4️⃣ マイページ

- **ログインユーザーの情報を表示**
- **自分が投稿したレシピ一覧**
- **「いいね」したレシピ一覧**
- **プロフィール編集（アイコン・ニックネーム）**
- **投稿の編集・削除**

---

## ✅ 画面構成

### 1️⃣ 認証関連

| 画面名 | パス | 機能 |
| --- | --- | --- |
| **サインアップ** | `/signup` | ユーザー登録フォーム |
| **ログイン** | `/login` | メール & パスワードでログイン |
| パスワードリセット | /reset-password | パスワードをリセット |

### 2️⃣ レシピ関連

| 画面名 | パス | 機能 |
| --- | --- | --- |
| **ホーム（レシピ一覧）** | `/` | 全レシピの一覧表示 |
| **レシピ詳細** | `/recipes/[id]` | 1つのレシピの詳細情報を表示 |
| **レシピ投稿** | `/recipes/new` | レシピの新規投稿 |
| **レシピ編集** | `/recipes/edit/[id]` | 自分が投稿したレシピを編集 |

### 3️⃣ マイページ関連

| 画面名 | パス | 機能 |
| --- | --- | --- |
| **マイページ** | `/mypage` | 自分の情報・投稿・いいね一覧 |
| **プロフィール編集** | `/mypage/edit` | ニックネーム・アイコン変更 |

### 4️⃣ その他

| 画面名 | パス | 機能 |
| --- | --- | --- |
| **404ページ** | `/404` | 存在しないページのエラーページ |

---

## ✅ アップデート予定項目（将来的に追加する機能）

### 1️⃣ ソーシャル機能

- **コメント機能**（レシピごとに感想・質問ができる）
- **シェア機能**（SNSでレシピを共有）

### 2️⃣ カテゴリ & フィルタ

- **カテゴリー別（和食・洋食・スイーツなど）**
- **アレルギー情報・栄養成分の表示**
- **レシピの難易度・調理時間**

### 3️⃣ その他の便利機能

- **レシピの印刷**
- **レシピの動画添付**
- **レシピの公開・非公開設定**
- レシピ投稿の際にマークダウンが使用可能になる。
- レシピ投稿の際に手順をドラッグ&ドロップさせる
- 

---






This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
