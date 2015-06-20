var gulp = require("gulp");

// Plugins
var jade = require("gulp-jade"),
	stylus = require("gulp-stylus"),
	watch = require("gulp-watch")
	eslint = require("gulp-eslint");

// Start doing the tasks :)
gulp.task("jade", function(){
	gulp.src("./src/index.jade")
		.pipe(jade())
		.pipe(gulp.dest("./"));

	gulp.src("./src/en/index.jade")
		.pipe(jade())
		.pipe(gulp.dest("./en/"));	
});

gulp.task("stylus", function(){
	gulp.src("./src/stylus/*.styl")
		.pipe(stylus())
		.pipe(gulp.dest("assets/css/"));
});

gulp.task("lint", function(){
	gulp.src(".assets/js/*.js")
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failOnError());
});

// Watch all tasks
gulp.task("watch", function(){
	// Stylus
	gulp.watch(["./src/stylus/*/**.styl", "./src/stylus/*.styl"], ["stylus"]);

	// Jade
	gulp.watch(["./src/*.jade" ,"./src/*/**.jade"], ["jade"]);

	gulp.watch(["./assets/js/*.js"], ["lint"]);
});

// Default task
gulp.task("default", ["watch"]);