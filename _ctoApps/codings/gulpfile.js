"use strict";

let gulp = require('gulp');
let include = require('gulp-file-include');
let i18n = require('gulp-i18n-localize');
let htmlmin = require('gulp-htmlmin');
let uglify = require('gulp-uglify');
let minifyCSS = require('gulp-csso');
let mocha = require('gulp-mocha');
let rename = require('gulp-rename');
let flatten = require('gulp-flatten');
let babel = require('gulp-babel');

function dest() {
    return gulp.dest('dist');
}

function translate() {
    return i18n({
        locales: ['en', 'de'],
        localeDir: './dist/locales',
        schema: 'suffix'
    });
}

gulp.task('collect-locales', function() {
    return gulp.src(['src/*/locales/*/*.json'])
        .pipe(rename(function(path) {
            path.dirname = path.dirname.substring(path.dirname.lastIndexOf('/') + 1)
        }))
        .pipe(gulp.dest('./dist/locales'));
});

gulp.task('html', ['collect-locales'], function () {
    return gulp.src(['src/*/*.html', '!src/common/**', '!src/test/**'])
        .pipe(include())
        .pipe(translate())
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(dest());
});

gulp.task('js', ['collect-locales'], function (){
    return gulp.src(['src/*/*.js', '!src/common/**', '!src/test/**', '!src/**/t_*.js'])
        .pipe(include())
        .pipe(translate())
        .pipe(babel())
        .pipe(uglify())
        .pipe(dest());
});

gulp.task('css', function (){
    return gulp.src(['src/*/*.css', '!src/common/**', '!src/test/**'])
        .pipe(include())
        .pipe(minifyCSS())
        .pipe(dest());
});

gulp.task('config', function () {
    return gulp.src(['src/*/cto.config.json', '!src/common/**', '!src/test/**'])
        .pipe(include())
        .pipe(dest());
});

gulp.task('build-tests', function () {
    return gulp.src('src/**/t_*.js')
        .pipe(include())
        .pipe(flatten())
        .pipe(gulp.dest('dist/test'));
});

gulp.task('test', ['build-tests'], function () {
    return gulp.src('dist/test/*.js')
        .pipe(mocha());
});

gulp.task('bootstrap', function () {
    return gulp.src(['node_modules/bootstrap/dist/css/bootstrap.css', 'node_modules/bootstrap/dist/js/bootstrap.js'])
        .pipe(dest())
});

gulp.task('jquery', function() {
    return gulp.src('node_modules/jquery/dist/jquery.js')
        .pipe(dest())
});

gulp.task('morse-radio-messages', function() {
    return gulp.src('src/morsecode/morse/**')
        .pipe(gulp.dest('dist/morsecode/morse'))
});

gulp.task('default', [ 'test', 'bootstrap', 'jquery', 'html', 'js', 'css', 'config', 'morse-radio-messages' ]);