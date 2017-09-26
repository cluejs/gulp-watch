const watch = require('gulp-watch');
const debounce = require('lodash.debounce');

module.exports = function (glob, opts, callback) {

    if (typeof opts === 'function') {
        callback = opts;
        opts = {};
    }

    let idle = opts.debounce || 100;

    return watch(glob, opts, debounce(callback, idle));
};