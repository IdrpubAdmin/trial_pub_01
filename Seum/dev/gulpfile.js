"use strict";

// Load plugins
const gulp = require('gulp');
const sass = require('gulp-sass');
const fileinclude = require('gulp-file-include');

// html파일 인클루드
gulp.task('fileinclude', async function () {
    gulp.src(['**/*.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('../page'));
});

// compile scss into css
gulp.task('sass', function(){
    // 1. where is my scss file
    return gulp.src('./css_dev/sass-disp/*.scss')
        // 2. pass that file through sass compiler
        .pipe(sass().on('error', sass.logError))
        // 3. where do i save the compiled css? / dest : 해당 task의 결과물이 저장될 경로 지정
        .pipe(gulp.dest('../css'))
});

// 파일 변경 감지
gulp.task('default', function () {
    gulp.watch('./css_dev/**/*.scss', gulp.series('sass')),
    gulp.watch('**/*.html', gulp.series('fileinclude'));
    return
});