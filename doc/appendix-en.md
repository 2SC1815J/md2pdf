# Appendix: Source file details

Here is the file structure of the set of source files used to create this document, and the contents of the main files.

## Source files structure

```
md2pdf
│  package.json
│  
├─ css
│      custom.css
│      custom-en.css
│      github-markdown.css
│      
├─ dist
│      all-en.html
│      all-en.pdf
│      
├─ doc
│      appendix-en.md
│      fig001-en.png
│      fig002-en.png
│      main-en.md
│      preface-en.md
│      template-en.html
│      toc-en.md
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
