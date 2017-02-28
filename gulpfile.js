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
var port = '8888'
var root = 'app'
 //setup connect server
gulp.task('connect', function() {
	connect.server({
		root: root,
		livereload: true,
		port: port
	});
});
 
 //reload data
gulp.task('reload', function () {
	gulp.src('./' + root + '/index.html')
	.pipe(connect.reload());
});
 
//watch changes in files
gulp.task('watch', function () {
	gulp.watch(['./' + root + '/**/*.*', ], ['reload']);
});

//open browser
gulp.task('openBrowser', function(){
	var options = {
		uri: 'http://localhost:'+port,
		app: 'google chrome'
	};
	gulp.src('./' + root + '/index.html')
	.pipe(open(options));
});
 
 //default task
gulp.task('default', ['connect', 'watch', 'openBrowser']);