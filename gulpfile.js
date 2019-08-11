var gulp = require("gulp");
var jshint = require("gulp-jshint");
var sass = require("gulp-sass");
var sourcemaps = require('gulp-sourcemaps');

gulp.task("test", function (done) {
   console.log('test');
   done();
});

gulp.task("jshint", function () {
   return gulp.src("js/*.js")
       .pipe(jshint())
       .pipe(jshint.reporter("default"))

});

gulp.task("sass", function () {
    return gulp.src("scss/main.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded'
        }).on("error", sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("css"))
});


gulp.task("watch", function() {
   gulp.watch("scss/**/*.scss", gulp.series("sass"));
});



