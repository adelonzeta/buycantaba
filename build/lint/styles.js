var gulp     = require('gulp');
var sassLint = require('gulp-sass-lint');

module.exports = function() {
  return gulp.src('app/styles/**/*.scss')
    .pipe(sassLint({
      rules: {
        'leading-zero': 0,
        'space-before-colon': 0,
        'mixins-before-declarations': 0
      }
    }))
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
};
