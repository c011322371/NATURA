// ----------------------------------------
// public
// ----------------------------------------
var gulp = require('gulp');

// ----------------------------------------
// gulp-react-templates
// ----------------------------------------
var rt = require('gulp-react-templates');
 
gulp.task('rt', function() {
    gulp.src('src/templates/*.rt')
        .pipe(rt({modules: 'amd'}))
        .pipe(gulp.dest('src/dist/templates'));
});

// ----------------------------------------
// gulp-sass
// ----------------------------------------
// sass compiler
var sass = require('gulp-sass');
// add vender prifix
var autoprefixer = require('gulp-autoprefixer');
// error handling
var plumber = require('gulp-plumber');

gulp.task('sass', function() {
    gulp.src('src/sass/index.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ["> 1% in JP"],
            cascade: false
        }))
        .pipe(gulp.dest('src/dist/css/'));
});

// ----------------------------------------
// default
// ----------------------------------------
gulp.task('default', function() {
    gulp.watch('src/sass/**/*.scss',['sass']);
});