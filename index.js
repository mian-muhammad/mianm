#!/usr/bin/env node
const clearConsole = require('clear-any-console');
const pkgJSON = require('./package.json')
const welcome = require('cli-welcome')

welcome({
    title: pkgJSON.name,
    tagLine: `Howdy, nice to meet you!`,
    description: pkgJSON.description,
    version: pkgJSON.version,
    bgColor: `#FADC00`,
    color: `##000000`,
    bold: true,
    clear: true,
})

console.log(`
Mian Muhammad

Hello my name is Mian Muhammad.
`)