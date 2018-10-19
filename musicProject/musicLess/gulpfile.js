var gulp = require('gulp');
var uglifycss = require('gulp-minify-css');
var cssconcat = require('gulp-concat');
var cssrename = require('gulp-rename');
gulp.task('final',function(){
	gulp.src('./Mless/*.css')
		.pipe(uglifycss())
		.pipe(cssconcat('main.css'))
		.pipe(cssrename({
			suffix:'.min'
		}))
		.pipe(gulp.dest('build/css'))
})
gulp.task('default',function(){
	gulp.start('final')
})