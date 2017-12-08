/* REQUIRE */
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const pump = require('pump');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');

/* TOP LEVEL FUNCTIONS
 *
 * gulp.task - Define tasks
 * gulp.src - Point to files to use
 * gulp.dest - Point to folder to output
 * gulp.watch
 *
 */

// Copy HTML
gulp.task('copyHtml', function() {
  gulp.src('src/*.html')
      .pipe(gulp.dest('app'));
});

// Compile SASS
gulp.task('sass', function () {
  return gulp.src('src/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/css/style.css'));
});

// Minify + Concat JS files
gulp.task('scripts', function() {
  gulp.src('src/js/*.js')
      .pipe(concat('main.js'))
      .pipe(uglify())
      .pipe(gulp.dest('app/js'));
});

// Minify Images
gulp.task('imageMin', () =>
	gulp.src('src/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('app/images'))
);

// Default task
gulp.task('default', ['copyHtml', 'sass', 'scripts', 'imageMin']);
