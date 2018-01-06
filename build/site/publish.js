var gulp    = require('gulp');
var ghpages = require('gulp-gh-pages');

module.exports = function() {
  return gulp.src('dist/**/*')
    .pipe(ghpages());
};

module.exports.dependencies = ['prod'];
