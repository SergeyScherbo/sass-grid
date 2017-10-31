const gulp = require('gulp');
const sass = require('gulp-sass');
const bs   = require('browser-sync');

gulp.task('html', function() {
  gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('sass', function() {
  return gulp.src('src/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'))
    .pipe(bs.stream());
});

gulp.task('serve', ['sass'], function() {
  bs.init({
    server: './dist'
  });

  gulp.watch(['src/scss/*.scss'], ['sass']);
  gulp.watch(['src/*.html'], ['html']);
  gulp.watch(['src/*.html']).on('change', bs.reload);
});

gulp.task('default', ['serve']);
