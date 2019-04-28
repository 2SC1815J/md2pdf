# 付録 ソースファイル抜粋

この文書の作成に用いたソースファイル一式のファイル構成と、主要なファイルの内容を挙げます。

## ファイル構成

```
md2pdf
│  package.json
│  
├─ css
│      custom.css
│      github-markdown.css
│      
├─ dist
│      all.html
│      all.pdf
│      
├─ doc
│      appendix.md
│      fig001.png
│      fig002.png
│      main.md
│      preface.md
│      template.html
│      toc.md
│      
├─ node_modules
│      
├─ scripts
│      ejs.js
│      mdit.js
│      
└─ work
```

## package.json

<pre><code><%= include('../package.json') %></code></pre>

## scripts/mdit.js

<pre><code><%= include('../scripts/mdit.js') %></code></pre>

## scripts/ejs.js

<pre><code><%= include('../scripts/ejs.js') %></code></pre>
