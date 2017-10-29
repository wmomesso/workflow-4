var gulp = require("gulp");
var htmlMin = require("gulp-html-minifier2");
var cleanCss = require("gulp-clean-css");

gulp.task('minify-html', function(){
	return gulp.src('./source/*.html')
	.pipe(htmlMin({collapseWhitespace: true}))
	.pipe(gulp.dest('./dist'))
});

gulp.task('minify-scss', () =>{
	return gulp.src('./source/scss/*.scss')
	.pipe(cleanCss({compatibility: 'ie8'}))
	.pipe(gulp.dest('./dist/css'));
});

gulp.task('watch', function(){
	gulp.watch('./source/scss/*.scss', ['minify-scss']);
	gulp.watch('./source/*.html',['minify-html']);
});

