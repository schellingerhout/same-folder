module.exports = function (dir1, dir2) {
    var path = require('path');      
    return (path.relative(dir1, dir2) === '');
}
