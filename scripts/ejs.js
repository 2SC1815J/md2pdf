/*
 * md2html
 * Copyright 2019 2SC1815J, MIT license 
 */
'use strict';
if (process.argv.length < 4) {
    console.error('Usage: node ejs.js template.html output.html');
    process.exit(1);
}

const { promisify } = require('util');
const ejs = require('ejs');
const tidy = require('htmltidy2');
const fs = require('fs');

(async () => {
    const text = await promisify(ejs.renderFile)(process.argv[2]);
    const options = {
        doctype: 'html5',
        indent: 'auto',
        wrap: 0,
        tidyMark: false,
        quoteAmpersand: false,
        hideComments: true,
        dropEmptyElements: false,
        newline: 'LF'
    };
    const tidied = await promisify(tidy.tidy)(text, options);
    await promisify(fs.writeFile)(process.argv[3], tidied, 'utf8');
})()
    .then(() => {
        console.log('Done.');
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });