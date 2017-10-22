var gulp = require('gulp');
var clean = require('gulp-clean');
 
gulp.task('clean-scripts', function () {
    return gulp.src('dist/*', {read: false})
      .pipe(clean());
});
   
gulp.task('default', ['clean-scripts']);
