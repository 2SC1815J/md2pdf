# md2pdf

Markdown原稿から、CSS組版によってPDFにビルドするフローを紹介します。

## こんなときに

- Visual Studio Codeで、ソフトウェア開発に付随する報告書などの作成も行いたい
- 文書はMarkdownで執筆し、PDFで提出したい
- コマンドライン操作のみでPDFビルドが完了するようにしたい
- GitHubでのMarkdown表示のようなスタイリングにしたい
- PDFには表紙や目次、ノンブル（ページ番号）を付けたい
- 目次は、項目タイトルとページ番号、ドキュメント内リンクを自動作成してほしい
- ノンブルは、表紙や目次を除いた本文ページのみに振りたい
- PDFには余計なプロパティを含めたくない

## 必要条件

- [Node.js](https://nodejs.org/ja/) 10+
- [AH CSS Formatter](https://www.antenna.co.jp/AHF/) V6.6 MR5+（評価版でも動作可）

## インストール

```
$ npm install
```

## PDFのビルド

```
$ npm run build
```
distフォルダに、CSS組版された[PDF](dist/all.pdf)が出力されます。

## ライセンス

MITライセンス
