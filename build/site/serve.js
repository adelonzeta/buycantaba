var gulp    = require('gulp');
var connect = require('gulp-connect');
var open    = require('gulp-open');

module.exports = function() {
  connect.server({
    root: 'dist',
    port: 8000,
    livereload: true
  });
  gulp.src('dist')
  .pipe(open({
    uri: 'http://localhost:8000',
    app: 'google chrome'
  }));
};

module.exports.dependencies = ['default'];
