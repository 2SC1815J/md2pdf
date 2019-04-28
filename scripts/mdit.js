/*
 * md2html
 * Copyright 2019 2SC1815J, MIT license 
 */
'use strict';
if (process.argv.length < 4) {
    console.error('Usage: node mdit.js input.md output.html');
    process.exit(1);
}

const header_instances = {};
const anchor = require('anchor-markdown-header');
const mdit = require('markdown-it')(
    {
        html: true
    })
    .use(require('markdown-it-named-headers'), {
        slugify: function(header) {
            if (header_instances[header] !== void 0) {
                header_instances[header]++;
            } else {
                header_instances[header] = 0;
            }
            const match = anchor(header, 'github.com', header_instances[header]).match(/]\(#(.+?)\)$/);
            return match ? decodeURI(match[1]) : header;
        }
    })
    .use(require('markdown-it-implicit-figures'), {
        figcaption: true
    });

const { promisify } = require('util');
const fs = require('fs');

(async () => {
    const md = await promisify(fs.readFile)(process.argv[2], 'utf8');
    const html = mdit.render(md);
    await promisify(fs.writeFile)(process.argv[3], html, 'utf8');
})()
    .then(() => {
        console.log('Done.');
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });