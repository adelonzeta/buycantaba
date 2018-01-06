var gulp       = require('gulp');
var source     = require('vinyl-source-stream');
var browserify = require('browserify');
var connect    = require('gulp-connect');

module.exports = function() {
  return browserify('app/scripts/app.js')
    .transform('babelify')
    .transform({
      global:true
    }, 'browserify-shim')
    .bundle()
    .pipe(source('app.js'))
    .pipe(connect.reload())
    .pipe(gulp.dest('dist/scripts'));
};

module.exports.dependencies = ['lint:scripts'];
