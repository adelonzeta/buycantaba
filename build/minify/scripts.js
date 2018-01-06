var gulp   = require('gulp');
var minify = require('gulp-minify');

module.exports = function() {
  return gulp.src('dist/scripts/**/*.js')
    .pipe(minify({
      ext: {
        src: '-debug.js',
        min: '.js'
      },
      noSource: true
    }))
    .pipe(gulp.dest('dist/scripts'));
};

module.exports.dependencies = ['minify:html'];
