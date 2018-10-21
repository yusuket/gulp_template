var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var pleeease = require('gulp-pleeease');
var browserSync = require("browser-sync");
// var connect = require('gulp-connect-php');
var reload = browserSync.reload;
var rename = require('gulp-rename');


/* 
デフォルトタスク
*/
gulp.task('default', function() {
	gulp.run('browser-sync','watch');
	
});


/* 
watch
*/
gulp.task('watch', function () {
    gulp.watch('app/src/assets/sass/*.scss',["sass"]);
});



/* 
ブラウザシンク
*/
gulp.task('browser-sync', function () {
	browserSync({
		notify: false,
		server: {
			baseDir: "app/product/"
		}
	});
	// HTMLを監視
	gulp.watch('app/product/**/*.html', reload);
	// CSSを監視
	gulp.watch('app/product/assets/css/*.css', reload);
	// jsを監視
	gulp.watch('app/product/assets/js/*.js', reload);
});


/* 
sassのコンパイル
*/
gulp.task('sass',function() {
	console.log('test');
	gulp.src('app/src/assets/sass/*.scss')
		.pipe(plumber())　// エラー対策
		.pipe(sass())　// sassのコンパイル
		.pipe(pleeease({
			autoprefixer: ['last 2 versions'],
			minifier: false
		}))
		.pipe(gulp.dest('app/product/assets/css'));
});