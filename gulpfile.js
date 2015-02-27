'use strict';

//Initalise Gulp
var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    paths = require('./package.json');

paths = paths.paths;

// Error Handler
function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

gulp.task('styles', function () {
  return gulp.src(paths.styles.files)
    .pipe($.plumber({
      errorHandler: $.notify.onError({
        title: 'Error',
        message: '<%= error.message %>'
      })
    }))
    .pipe($.sass({
      outputStyle: 'compressed',
      errLogToConsole: false
    }))
    .pipe($.autoprefixer({
      browsers: ['last 2 version', 'ie 8'],
      cascade: false
    }))
    .pipe($.rename({ basename: 'noot' }))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe($.plumber.stop())
    .pipe($.minifyCss())
    .pipe(gulp.dest(paths.styles.dest));
})


// Javascript
gulp.task('scripts', function () {
  return gulp.src(paths.scripts.files)
    .pipe($.plumber({
      errorHandler: $.notify.onError({
        title: 'Error',
        message: '<%= error.message %>'
      })
    }))
    .pipe($.jshint('.jshintrc'))
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.uglify())
    .pipe($.rename({ basename: 'noot' }))
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe($.size({
      title: 'scripts'
    }));
})
// Default gulp task
gulp.task('default', function() {
  gulp.start('scripts', 'styles');
});
