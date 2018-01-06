var gulp = require('gulp');

module.exports = function() {
  return gulp.src('CNAME')
    .pipe(gulp.dest('dist'));
};
