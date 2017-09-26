# gulp-watch
Wrapper watcher for gulp with debounce

#### Install:

```bash
npm i cluejs/gulp-watch --save-dev
```

```bash
yarn add cluejs/gulp-watch -D
```

#### API:
**watch(glob, [options, callback])**


#### Options:
- (Number) debounce: 100 **default**

#### Usage:
``` javascript
...
global.$$ = {};
$$.env = require('@cluejs/gulp-env');
$$.gulp_watch = require('@cluejs/gulp-watch');

gulp.task('watch', (callback) => {
    $$.env.setDevelopment();
    
    function bundle_css() {
        // ... some code ... //
    }
    
    $$.gulp_watch([
        '**/*.css'
        ], {
            cwd: './src/css/', 
            debounce: 200
        }, bundle_css);
})
...
```