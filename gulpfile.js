
// started with: http://markgoodyear.com/2014/01/getting-started-with-gulp/
// get all the plugins
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss');
    autoprefixer = require('autoprefixer'),
    minifycss = require('gulp-clean-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del'),
    sasslint = require('gulp-sass-lint'),
    read = require('gulp-read');;

// Stop Gulp from crashing on every SASS error
// via: http://stackoverflow.com/questions/23971388/prevent-errors-from-breaking-crashing-gulp-watch/23973536#23973536
function swallowError (error) {
    //If you want details of the error in the console
    console.log(error.toString());

    this.emit('end');
}


// lint the CSS
gulp.task('lint_styles', function() {
  return gulp.src(['sass/**/*.scss', '!sass/global/_rem-calc.scss'])
    .pipe(sasslint({
      options: {
        formatter: 'stylish',
        'config-file': '.sass-lint.yml'
      }
    }))
    .pipe(sasslint.format())
    .pipe(sasslint.failOnError());
});

// process CSS
gulp.task('crunch_styles', function() {
  return gulp.src(['sass/**/*.scss'])
    .pipe(sass({ style: 'expanded' }))
    .on('error', swallowError)
    .pipe(postcss([ autoprefixer() ]))
    .pipe(gulp.dest('css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('css'))
    .pipe(notify({ message: 'styles crunched!' }));
});

// do JS stuff
// source scripts go in 'scripts' folder and are compiled into 'js'
// we're ignoring modernizr because we need that to be a separate file so we can load it in the head
gulp.task('scripts', function() {
  return gulp.src(['scripts/**/*.js', '!scripts/modernizr.js'])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(concat('app.js'))
    .pipe(gulp.dest('js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('js'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

// watch task
gulp.task('watch', function() {

  // Watch .scss files
  // gulp.watch('sass/**/*.scss', ['lint_styles', 'crunch_styles']);
  gulp.watch('sass/**/*.scss', ['lint_styles', 'crunch_styles']);

  // Watch .js files
  gulp.watch('scripts/**/*.js', ['scripts']);

  // Create LiveReload server
  livereload.listen();

  // Watch any files in dist/, reload on change
  gulp.watch(['css/**','js/**', '*.html']).on('change', livereload.changed);

});

// default task
gulp.task('default', ['watch']);
