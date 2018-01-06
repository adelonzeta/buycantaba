var gulp = require('gulp');
var esLint = require('gulp-eslint');

module.exports = function() {
  return gulp.src([
    'app/scripts/**/*.js',
    '!node_modules/**/*',
    '!build/**/*'])

    .pipe(esLint())
    .pipe(esLint.format());
};
