// REQUIRES
const gulp = require('gulp');
const sass = require('gulp-sass');


// TASKS

// Sass task
gulp.task('sass', () => {
  return gulp.src('src/assets/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/assets/css/style.css'));
});

// Watch tasks
gulp.task('watch',['sass'], () =>{
  gulp.watch('src/assets/scss/**/*.scss',['sass']);
});

// Default Tasks
gulp.task('default',['watch']);
