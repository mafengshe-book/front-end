var gulp = require("gulp"),
  deploy = require("gulp-gh-pages");
  
var file = require('gulp-file');

gulp.task('deploy', function () {
  return gulp.src("_book/**/*.*")
    .pipe(file('CNAME', "fe-base.books.mafengshe.com"))
    .pipe(deploy({cname:"fe-base.books.mafengshe.com"}))
    .on("error", function(err){
      console.log(err)
    })
});