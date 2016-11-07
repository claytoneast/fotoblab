'use strict'

var gulp = require('gulp')
var sass = require('gulp-sass')

gulp.task('sass', function () {
  return gulp.src('styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('public/stylesheets'))
})

gulp.task('sass:watch', function () {
  gulp.watch('styles/*.scss', ['sass'])
})