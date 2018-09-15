var gulp = require('gulp'),
watch = require('gulp-watch'),
broswerSync = require('browser-sync').create();


gulp.task('watch', function () {

  broswerSync.init({
    notify: false,
    server: {
      baseDir: "site"
    }
  });

  watch('./site/index.html', function() {
    broswerSync.reload();
  });

  watch('./site/assets/styles/**/*.css', function() {
    gulp.start('cssInject');
  });

  watch('.site/assets/scripts/**/*.js', function() {
    gulp.start('scriptsRefresh');
  })
  
});

gulp.task('cssInject', ['styles'], function() {
  return gulp.src('./site/temp/styles/styles.css')
    .pipe(broswerSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function() {
  broswerSync.reload();
});
