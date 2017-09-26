var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
var watch = require('gulp-watch');
var config = require('./package.json').config;
var fs = require('path');
var webpack = require('webpack-stream');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');

var path = {
  css_source: fs.resolve(__dirname, config["asset-dir"] + '/scss/**/*.scss'),
  css_dest: fs.resolve(__dirname, config["web-dir"] + '/css/'),
  js_source: fs.resolve(__dirname, config["asset-dir"] + '/javascript/basic.js'),
  js_dest: fs.resolve(__dirname, config["web-dir"] + '/javascript/')
};

gulp.task('css', function () {
  return gulp.src(path.css_source)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer({browsers: ['last 2 versions']}))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(path.css_dest));
});

gulp.task('js', function () {
  return gulp.src(path.js_source)
    .pipe(plumber())
    .pipe(webpack({
      output: {
        filename: 'basic.js',
      }
    }))
    .pipe(uglify())
    .pipe(gulp.dest(path.js_dest));
});

gulp.task('watch', function () {
  watch(path.css_source, function () {
    gulp.start('css');
  });
  watch(path.js_source, function () {
    gulp.start('js');
  })
});

gulp.task('default', ['css', 'js', 'watch']);

gulp.task('build', ['css', 'js']);
