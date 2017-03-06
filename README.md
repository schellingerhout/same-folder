# same-path
Simple node module to check same path (including same destination relative paths and windows style casing)

## Usage sample 
same folder, 2 command line parameters

    var samepath = require('./samepath')
    console.log (samepath(process.argv[2], process.argv[3]) )

