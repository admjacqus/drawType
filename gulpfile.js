var gulp = require("gulp");
var sass = require("gulp-sass");
var babel = require("gulp-babel");
var browserSync = require("browser-sync").create();
var babelify = require("babelify");
var browserify = require("browserify");
var source = require("vinyl-source-stream");

//SASS
gulp.task("sass", function() {
	return gulp
		.src("./src/styles/*.scss")
		.pipe(sass().on("error", sass.logError))
		.pipe(gulp.dest("./dist/css"));
});
gulp.task(
	"sass-watch",
	gulp.series("sass", function(done) {
		browserSync.reload();
		done();
	})
);

//JS
gulp.task("js", function(done) {
	browserify(["./src/scripts/app.js"])
		.transform(babelify.configure({ presets: ["@babel/preset-env"] }))
		.bundle()
		.pipe(source("bundle.js"))
		.pipe(gulp.dest("dist/js"));
	done();
});
gulp.task(
	"js-watch",
	gulp.series("js", function(done) {
		browserSync.reload();
		done();
	})
);

gulp.task(
	"default",
	gulp.parallel("js", "sass", function() {
		// Serve files from the root of this project
		browserSync.init({
			server: {
				baseDir: "./"
			}
		});
	})
);

gulp.watch("./src/scripts/*.js", gulp.series("js-watch"));
gulp.watch("./src/styles/*.scss", gulp.series("sass-watch"));
gulp.watch("**/*.html").on("change", browserSync.reload);
