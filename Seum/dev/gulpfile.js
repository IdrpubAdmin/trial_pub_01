const fileinclude = require('gulp-file-include');
const gulp = require('gulp');


gulp.task('fileinclude', async function () {
    gulp.src(['page_dev/*.html', 'page_include/*.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('../page'));
});