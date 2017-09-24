var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
var watch = require('gulp-watch');
var config = require('./package.json').config;
var path = require('path');

var path = {
  css_source: path.resolve(__dirname, config["asset-dir"] + 'scss/**/*.scss'),
  css_dest: path.resolve(__dirname, config["web-dir"] + 'css/')
};

gulp.task('css', function () {
  return gulp.src(path.css_source)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(path.css_dest));
});

gulp.task('watch', function () {
  // Endless stream mode
  watch(path.css_source, function () {
    gulp.start('css');
  })
});

gulp.task('default', ['css']);
