// var gulp = require('gulp');
// var webserver = require('gulp-webserver');
 
// gulp.task('webserver', function() {
// 	gulp.src('./app')
// 	.pipe(webserver({
// 		livereload: true,
// 		//   directoryListing: true,
// 		fallback: './index.html',
// 		open: true
// 	}));
// });


var gulp = require('gulp');
var connect = require('gulp-connect');
var open = require('gulp-open');
 
gulp.task('connect', function() {
	connect.server({
		root: 'app',
		livereload: true,
		port: 8888
	});
});
 
gulp.task('html', function () {
	gulp.src('./app/index.html')
	.pipe(connect.reload());
});
 
gulp.task('watch', function () {
	gulp.watch(['./app/**/*.*', ], ['html']);
});

gulp.task('open-browser', function(){
	var options = {
		uri: 'http://localhost:8888',
		app: 'google chrome'
	};
	gulp.src('./app/index.html')
	.pipe(open(options));
});
 
gulp.task('default', ['connect', 'watch', 'open-browser']);