var gulp         = require('gulp');
var strip        = require('gulp-strip-css-comments');
var purify       = require('gulp-purifycss');
var autoprefixer = require('gulp-autoprefixer');

module.exports = function() {
  return gulp.src('dist/styles/*.css')
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(purify([
      'dist/**/*.html',
      'dist/**/*.js'
    ], {minify: true}))
    .pipe(strip({
      preserve: false
    }))
    .pipe(gulp.dest('dist/styles'));
};

module.exports.dependencies = ['minify:html', 'minify:scripts'];
