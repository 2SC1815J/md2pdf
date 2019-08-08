# md2pdf

In this repository, I will introduce the workflow to build a PDF document from a Markdown manuscript by CSS formatting.

## In such cases:

- To create reports accompanying software development in Visual Studio Code
- To write a document in Markdown and submit it as PDF
- To make PDF build complete with command line operation only
- To style like Markdown display on GitHub
- To add a cover, table of contents, and page numbers in PDF
- To automatically generate item titles, page numbers, and links within documents in the table of contents
- To put page numbers only on the text pages, excluding the cover and the table of contents
- To not include extra properties in PDF

## Requirements

- [Node.js](https://nodejs.org/) 10+
- [AH CSS Formatter](https://www.antennahouse.com/formatter/) V6.6 MR5+ (Works also with evaluation version) 

## Install

```
$ npm install
```

## Building PDF

```
$ npm run build-en
```
[PDF](dist/all-en.pdf) created by CSS formatting is output to the dist folder.

## License

MIT License
