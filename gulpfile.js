'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('styles', function() {
  return gulp.src(['frontend/styles/main.sass', 'frontend/styles/media.sass'])
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('public/css'))
});

gulp.task('assets', function () {
  return gulp.src('frontend/assets/**', {since: gulp.lastRun('assets')})
	.pipe(gulp.dest('public'));
});

gulp.task('build', gulp.parallel('styles', 'assets'));

gulp.watch('frontend/styles/**/*.*', gulp.series('styles'));
gulp.watch('frontend/assets/**/*.*', gulp.series('assets'));
