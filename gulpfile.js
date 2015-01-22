var gulp = require("gulp");

// Plugins
var jade = require("gulp-jade"),
	stylus = require("gulp-stylus"),
	watch = require("gulp-watch");

// Start doing the tasks :)
gulp.task("jade", function(){
	gulp.src("./src/index.jade")
		.pipe(jade())
		.pipe(gulp.dest("./"));
});

gulp.task("stylus", function(){
	gulp.src("./src/stylus/*.styl")
		.pipe(stylus())
		.pipe(gulp.dest("assets/css/"));
});

// Watch all tasks
gulp.task("watch", function(){
	// Stylus
	gulp.watch("./src/stylus/*.styl", ["stylus"]);

	// Jade
	gulp.watch("./src/index.jade", ["jade"]);
});

// Default task
gulp.task("default", ["watch"]);