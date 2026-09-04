# フォルダー構成

```text
src/
├── main.js
├── App.vue
│
├── router/
│   └── index.js                      # ルーティング定義 (/books, /books/new)
│
├── stores/                           # Pinia
│   └── useBookStore.js               # 蔵書データの状態管理（一覧⇔登録で共有）
│
├── layouts/
│   └── DefaultLayout.vue             # ヘッダー＋ページ本体を包む共通レイアウト
│
├── views/                            # ページ単位のコンポーネント（router-viewに対応）
│   ├── BookListPage.vue              # 蔵書一覧画面
│   └── BookRegisterPage.vue          # 蔵書登録画面
│
├── components/
│   ├── common/                       # 全画面共通の部品
│   │   ├── AppHeader.vue             # タブ切替（蔵書一覧／蔵書登録）
│   │   ├── NotificationToast.vue     # 登録完了などの通知
│   │   └── Pagination.vue            # ◀ 1/4 ▶
│   │
│   ├── book-list/                    # 蔵書一覧画面専用の部品
│   │   ├── BookListToolbar.vue       # 検索・フィルタ・exportの行
│   │   ├── SearchInput.vue
│   │   ├── GenreDropdown.vue
│   │   ├── StatusDropdown.vue
│   │   ├── ExportButton.vue
│   │   ├── BookCardGrid.vue          # カードのグリッド全体
│   │   └── BookCard.vue              # カード1枚分
│   │
│   └── book-register/                # 蔵書登録画面専用の部品
│       ├── BookRegisterTable.vue     # テーブル全体
│       ├── BookRegisterTableRow.vue  # テーブルの1行
│       ├── AddRowButton.vue          # "+" 行追加ボタン
│       └── RegisterButton.vue        # 登録ボタン
│
├── composables/                      # ロジックの再利用（Composition API）
│   ├── useIsbnScanner.js             # ISBN読取→書籍情報自動取得
│   └── usePagination.js              # ページング処理の共通ロジック
│
├── api/                              # API通信部分
│   ├── bookApi.js                    # 蔵書CRUD（一覧取得・登録など）
│   └── isbnLookupApi.js              # ISBNから書籍情報を取得する外部API
│
└── assets/
    └── styles/
        └── main.css                  # 全体スタイル
```

## 各ディレクトリの役割

| ディレクトリ | 役割 |
|---|---|
| `router/` | Vue Routerのルーティング設定を管理 |
| `stores/` | Piniaを使ったアプリ全体の状態管理 |
| `layouts/` | ヘッダーなどを含む共通レイアウト |
| `views/` | URLごとに表示されるページ単位のコンポーネント |
| `components/common/` | 複数画面で共通して利用するUI部品 |
| `components/book-list/` | 蔵書一覧画面専用のUI部品 |
| `components/book-register/` | 蔵書登録画面専用のUI部品 |
| `composables/` | 複数コンポーネントで再利用する処理・ロジック |
| `api/` | バックエンドや外部APIとの通信処理 |
| `assets/styles/` | アプリ全体で使用するCSS |

## 画面構成

### 蔵書一覧画面

`/books`

主に以下のコンポーネントを使用します。

- `BookListPage.vue`
- `BookListToolbar.vue`
- `SearchInput.vue`
- `GenreDropdown.vue`
- `StatusDropdown.vue`
- `ExportButton.vue`
- `BookCardGrid.vue`
- `BookCard.vue`
- `Pagination.vue`

### 蔵書登録画面

`/books/new`

主に以下のコンポーネントを使用します。

- `BookRegisterPage.vue`
- `BookRegisterTable.vue`
- `BookRegisterTableRow.vue`
- `AddRowButton.vue`
- `RegisterButton.vue`
- `NotificationToast.vue`

## データ・処理の流れ

```text
画面（views）
   ↓
コンポーネント（components）
   ↓
状態管理（stores / Pinia）
   ↓
API通信（api）
   ↓
バックエンド・外部API
```

ISBN読み取りやページングなど、画面から独立して再利用できる処理は `composables/` にまとめます。
