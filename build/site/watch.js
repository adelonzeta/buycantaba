var gulp   = require('gulp');
var panini = require('panini');

module.exports = function() {
  gulp.watch('app/styles/**/*.scss', ['compile:styles']);
  gulp.watch('app/**/*.html', ['refresh', 'compile:html']);
  gulp.watch('app/scripts/**/*.js', ['compile:scripts']);
  gulp.watch('app/images/**/*', ['minify:images']);
};

gulp.task('refresh', function() {
  return panini.refresh();
});

module.exports.dependencies = ['site:serve'];
