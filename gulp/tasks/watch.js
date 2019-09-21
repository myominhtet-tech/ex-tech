var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();

gulp.task('watch', function() {

    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"

        }
    });
    watch('./app/index.html', function() {
        browserSync.reload();

    });

    watch('./app/assets/styles/**/*.css', gulp.series('cssInject'));


});

gulp.task('cssInject', gulp.series('styles', function() {

    //  gulp.watch("")
    return gulp.src('./app/temp/styles/styles.css')
        .pipe(browserSync.stream());
}));