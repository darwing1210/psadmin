"use strict";

/********* Requirements ***********/

var gulp = require('gulp');
var connect = require('gulp-connect'); // Runs local dev server
var open = require('gulp-open'); //  Open URL in a Web browser

var browserify = require('browserify'); // Bundles JS
var reactify = require('reactify');  // Transforms React JSX to JS
var source = require('vinyl-source-stream'); // Use conventional text streams with Gulp

var concat = require('gulp-concat'); // Concatenates files

/********* Configs ***********/
var config = {
	port: 9005,
	devBaseUrl: 'http://localhost',
	paths: {
		html: './src/*.html',
		js: './src/**/*.js',
		css: [
      		'node_modules/bootstrap/dist/css/bootstrap.min.css',
      		'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
    	],
		dist: './dist',
		mainJs: './src/main.js'
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

// Bubdle js with browserify
gulp.task('js', function(){
	browserify(config.paths.mainJs)
		.transform(reactify)
		.bundle()
		.on('error', console.error.bind(console))
		.pipe(source('bundle.js'))
		.pipe(gulp.dest(config.paths.dist + '/scripts'))
		.pipe(connect.reload());
});

gulp.task('css', function(){
	gulp.src(config.paths.css)
		.pipe(concat('bundle.css'))
		.pipe(gulp.dest(config.paths.dist + '/css'));
});

// Task Watch files and every time we made a change gulp reloads
gulp.task('watch', function(){
	gulp.watch(config.paths.html, ['html']); // runs html task when something changes
	gulp.watch(config.paths.js, ['js']);
});

// Tasks to run by default, just type gulp
gulp.task('default', ['html', 'js', 'css','open', 'watch']);