var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var minifycss = require('gulp-minify-css');
rename = require('gulp-rename');

gulp.task('serve',['sass'], function(){
    browserSync.init({
    proxy: "himalayainternetmarketing.com/pruebas/gev",
        //proxy: "localhost/fiestas-tematicas",
        open: false,
       
    });
     gulp.watch("build/scss/*.scss", ['sass']);
     gulp.watch("dist/css/*.css").on('change', browserSync.reload);
});

gulp.task('sass', function() {
     setTimeout(function () {
    return gulp.src("build/scss/style.scss")
         .pipe(sass({
            // includePaths: require('node-neat').includePaths
        }))
        //.pipe(concat('style.css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest("dist/css/"))
        .pipe(browserSync.stream());
            }
    ,1000)
});

gulp.task('default', ['serve']);