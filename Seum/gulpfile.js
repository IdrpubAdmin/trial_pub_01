var fileinclude = require('gulp-file-include'),
    gulp = require('gulp');

gulp.task('fileinclude', async function() {
    gulp.src(['sub/greeting.html'], {base : './'})
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./dist'));
});
