const gulp = require('gulp');
const less = require('gulp-less');
const LessAutoprefix = require('less-plugin-autoprefix');
const cssmin = require('gulp-cssmin');
const autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });

gulp.task('compile', function () {
  return gulp.src('./*.less')
    .pipe(less({
      plugins: [autoprefix]
    }))
    .pipe(cssmin())
    .pipe(gulp.dest('../../lib/theme-default'))
});


// 针对修改某个组件之后，watch模式并不更新index.css  // 貌似没有依赖分析，./common/vars.less变动了之后watch模式也不能更新！！
gulp.task('compile-index', function () {
  return gulp.src('./index.less')
  .pipe(less({
    plugins: [autoprefix]
  }))
  .pipe(cssmin())
  .pipe(gulp.dest('../../lib/theme-default'))
})

gulp.task('copyfont', function () {
  return gulp.src('./fonts/**')
    .pipe(cssmin())
    .pipe(gulp.dest('../../lib/theme-default/fonts'));
});

gulp.task('build', ['compile', 'copyfont']);
gulp.task('watch', function () {
  gulp.watch('./*.less', ['compile', 'compile-index']);
});