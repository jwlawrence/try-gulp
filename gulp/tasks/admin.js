var gulp         = require('gulp');
var less         = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var minifycss    = require('gulp-minify-css');
var rename       = require('gulp-rename');
var uglify       = require('gulp-uglify');
var browserSync  = require('browser-sync');
var handleErrors = require('../util/handleErrors');
var paths        = require('../../package.json').paths;

gulp.task('adminScripts', function() {
	return gulp.src([paths.theme + '/admin/admin.js'], { base: paths.theme + '/admin' })
		.on('error', handleErrors)
		.pipe(gulp.dest(paths.dist + '/admin'))
		.pipe(rename({ suffix: '.min' }))
		.pipe(uglify())
		.pipe(gulp.dest(paths.dist + '/admin'))
		.pipe(browserSync.reload({ stream: true }));
});

gulp.task('adminStyles', function() {
	return gulp.src([paths.theme + '/admin/admin.less'], { base: paths.theme + '/admin' })
		.pipe(less())
		.on('error', handleErrors)
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
		.pipe(rename({ basename: 'admin' }))
		.pipe(gulp.dest(paths.dist + '/admin'))
		.pipe(minifycss())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest(paths.dist + '/admin'))
		.pipe(browserSync.reload({ stream: true }));
});

gulp.task('editorStyles', function() {
	return gulp.src([paths.theme + '/admin/editor.less'], { base: paths.theme + '/admin' })
		.pipe(less())
		.on('error', handleErrors)
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
		.pipe(rename({ basename: 'editor' }))
		.pipe(gulp.dest(paths.dist + '/admin'))
		.pipe(minifycss())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest(paths.dist + '/admin'))
		.pipe(browserSync.reload({ stream: true }));
});

gulp.task('admin', ['adminScripts', 'adminStyles', 'editorStyles']);