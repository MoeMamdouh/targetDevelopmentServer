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
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');

var port = '8888';
var root = 'app';

var paths = {
	sass: [
		root + '/modules/**/*.scss',
		// 'www/common/directives/**/*.scss',
	]
};

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
 
 //grip sass files and conver to css and export them in the right directory
 gulp.task('sass', function(done) {
	gulp.src(paths.sass)
		.pipe(sass())
		.on('error', sass.logError)
		.pipe(rename({dirname: ''}))
		// .pipe(cleanCSS({
		// 	compatibility: 'ie8'
		// }))
		// .pipe(rename({ extname: '.min.css' }))
		.pipe(gulp.dest(root+'/css/do'))
		done();
});

//watch changes in files
gulp.task('watch', function () {
	gulp.watch(['./' + root + '/**/**/*.*', ], ['sass', 'reload']);
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
gulp.task('default', ['connect', 'watch', 'openBrowser', 'sass']);