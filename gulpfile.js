var gulp = require("gulp"),
  deploy = require("gulp-gh-pages");

gulp.task('deploy', function () {
  return gulp.src("_book/**/*.*")
    .pipe(deploy({cname:"fe-base.books.mafengshe.com"}))
    .on("error", function(err){
      console.log(err)
    })
});