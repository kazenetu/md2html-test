var gulp = require('gulp');
var markdown = require('gulp-markdown');
var emojiParser = require('emoji-parser');
var marked = require('marked');
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
    var renderer = new marked.Renderer();
    renderer.text = function(text) {
      return emojiParser.parse(text, './emojis');
    };

    return gulp.src('./sample-md/*.md')
        .pipe(markdown({renderer:renderer}))
        .pipe(gulp.dest('./temp'));
});
