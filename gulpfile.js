const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// compile scss into css
function style(){
  //1. where is my scss file
   return gulp.src('./scss/*.scss')
  //2. pass that file through the sass compiler
    .pipe(sass())
  //3. where do I save the compiled css
    .pipe(gulp.dest('./dist/css'))
    //4. stream changes to all browser
    .pipe(browserSync.stream());
}

function watch(){
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('./scss/*.scss', style);
  gulp.watch('./*.html').on('change', browserSync.reload);

}

exports.style = style;
exports.watch = watch;












