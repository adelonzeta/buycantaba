var gulp    = require('gulp');
var panini  = require('panini');
var connect = require('gulp-connect');

module.exports = function() {
  return gulp.src('app/pages/**/*.html')
    .pipe(panini({
      root: 'app/pages',
      layouts: 'app/layouts',
      partials: 'app/partials',
      helpers: 'app/helpers',
      data: 'app/data'
    }))
    .pipe(connect.reload())
    .pipe(gulp.dest('dist'));
};
