var gulp = require('gulp');
var markdown = require('gulp-markdown');
var pug = require('gulp-pug');

gulp.task('default',['_default'], function () {
  return gulp.src('./lib/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('_default', function () {
    return gulp.src('./sample-md/README.md')
        .pipe(markdown())
        .pipe(gulp.dest('./temp'));
});
