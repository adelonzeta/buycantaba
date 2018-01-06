var gulp      = require('gulp');
var loadTasks = require('gulp-task-loader')('build');

gulp.task('default', [
  'compile:html',
  'compile:styles',
  'compile:scripts',
  'minify:images',
  'compile:fonts'
]);

gulp.task('serve', ['site:watch']);

gulp.task('prod', [
  'minify:html',
  'minify:scripts',
  'minify:styles',
  'site:cname'
]);

gulp.task('deploy', ['site:publish']);
