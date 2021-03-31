const fileinclude = require('gulp-file-include'),
    sass = require("gulp-sass"),
    gulp = require('gulp');

// html파일 인클루드
gulp.task('fileinclude', async function () {
    gulp.src(['page_dev/*.html', 'page_include/*.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('../page'));
});

// Sass
gulp.task('sass', function(){
    return gulp.src('./css_dev/sass-disp/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('../css'));
});

