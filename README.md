# same-path
Simple node module to check same path (including same destination relative paths and windows style casing).

## Why use this
You are targeting multiple platforms that have case-sensitive or case-insensitive file systems. You want to compare folder paths according to the current platform's rules. 

You are comparing folders that contain relative path elements, you want to compare the actual endpoint folders for equivalency as dictated by the current platform and not the strings of the path.

## Installation

`npm install same-path`

or globally

`npm install same-path -g`

## Usage sample 
Simple program comparing 2 command line parameter directories

    var samepath = require('same-path')
    console.log (samepath(process.argv[2], process.argv[3]) )


