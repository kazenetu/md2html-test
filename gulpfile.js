var gulp = require('gulp');
var markdown = require('gulp-markdown');
var pug = require('gulp-pug');
var tap = require('gulp-tap');
var path = require('path');
var rename = require('gulp-rename');

gulp.task('default',['_default'], function () {
  return gulp.src('./temp/*.html')
      .pipe(tap(function(file, t){
          return gulp.src('./lib/template.pug')
            .pipe(pug({
              pretty: true,
              data:{
                filedata:file.contents
              }
            }))
            .pipe(rename(path.parse(file.path).base))
            .pipe(gulp.dest('./dist/'));
      }));
});

gulp.task('_default', function () {
    return gulp.src('./sample-md/*.md')
        .pipe(markdown())
        .pipe(gulp.dest('./temp'));
});
