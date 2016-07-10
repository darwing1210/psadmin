"use strict";

/********* Requirements ***********/

var gulp = require('gulp');
var connect = require('gulp-connect'); // Runs local dev server
var open = require('gulp-open'); //  Open URL in a Web browser

/********* Configs ***********/
var config = {
	port: 9005,
	devBaseUrl: 'http://localhost',
	paths: {
		html: './src/*.html',
		dist: './dist'
	}
}

/********* Tasks ***********/

// Start a local development server
gulp.task('connect', function() {
	connect.server({
		root: ['dist'],
		port: config.port,
		base: config.devBaseUrl,
		livereload: true,
	});
});

// Open given file on the server, depends of connect
gulp.task('open', ['connect'], function(){
	gulp.src('dist/index.html')
		.pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/' }));
});

// Move HTML to dist
gulp.task('html', function(){
	gulp.src(config.paths.html)
		.pipe(gulp.dest(config.paths.dist)) //destination
		.pipe(connect.reload()); // we call connect to reload
});

// Task Watch files and every time we made a change gulp reloads
gulp.task('watch', function(){
	gulp.watch(config.paths.html, ['html']); // runs html task when something changes
});

// Tasks to run by default, just type gulp
gulp.task('default', ['html', 'open', 'watch']);