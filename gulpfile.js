var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import');

gulp.task('default', function(){
  console.log('blah text!');
});

gulp.task('html', function() {
  console.log('imagine something happening to html');
});

gulp.task('styles', function() {
  return gulp.src('./site/assets/styles/styles.css')
    .pipe(postcss([cssImport, nested, cssvars, autoprefixer]))
    .pipe(gulp.dest('./site/temp/styles'));
});


gulp.task('watch', function () {
  watch('./site/index.html', function(){
    gulp.start('html');
  });

  watch('./site/assets/styles/**.css', function() {
    gulp.start('styles');
  });
});
