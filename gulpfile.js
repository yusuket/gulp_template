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
watch
*/
gulp.task('watch', function () {
	gulp.watch('app/src/assets/sass/*.scss',gulp.task('sass'));
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
	gulp.watch('app/product/**/*.html').on('change', reload);
	// CSSを監視
	gulp.watch('app/product/assets/css/*.css').on('change', reload);
	// jsを監視
	gulp.watch('app/product/assets/js/*.js').on('change', reload);
});


/* 
sassのコンパイル
*/
gulp.task('sass',function() {
	console.log('test');
	return gulp.src('app/src/assets/sass/*.scss')
		.pipe(plumber())　// エラー対策
		.pipe(sass({
            outputStyle: 'expanded'
        }))　// sassのコンパイル
		.pipe(pleeease({
			autoprefixer: {"browsers": ["last 4 versions", "Android 2.3"]},
			minifier: false
		}))
		.pipe(gulp.dest('app/product/assets/css'));
});


/* 
デフォルトタスク
*/
gulp.task('default',gulp.parallel('browser-sync','watch'));