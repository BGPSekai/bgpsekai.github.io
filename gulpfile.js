var gulp = require('gulp'),
  connect = require('gulp-connect'),
  shell = require('shelljs'),
  less = require('gulp-less');

gulp.task('connect', function() {
  connect.server({
    root: '',
    livereload: true
  });
});

// 定义 less 任务
gulp.task('less', function() {
    gulp.src('./app/less/main.less')
        .pipe(less())
        .pipe(gulp.dest('assets'))
        .pipe(connect.reload());
});

gulp.task('html', function () {
  gulp.src('*.html')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  shell.exec('webpack --watch', {
    async: true
  });
  gulp.watch([
	'./app/**',
	'index.html'
  ], ['html','less']);
});


gulp.task('default', ['connect', 'watch','less']);
