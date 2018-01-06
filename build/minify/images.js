var gulp     = require('gulp');
var imagemin = require('gulp-imagemin');
var connect  = require('gulp-connect');

module.exports = function() {
  return gulp.src('app/images/**/*')
    .pipe(imagemin())
    .pipe(connect.reload())
    .pipe(gulp.dest('dist/images'));
};
