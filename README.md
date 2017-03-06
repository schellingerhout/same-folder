# same-path
Simple node module to check same path (including same destination relative paths and windows style casing)

## Installation

`npm install same-path`

or globally

`npm install same-path -g`

## Usage sample 
Simple program comparing 2 command line parameter directories

    var samepath = require('same-path')
    console.log (samepath(process.argv[2], process.argv[3]) )


