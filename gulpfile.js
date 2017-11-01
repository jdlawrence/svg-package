var gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');

// Basic configuration example
config = {
  mode: {
    css: {		// Activate the «css» mode
      render: {
        css: true	// Activate CSS output (with default options)
      }
    },
    view: true,		// Create a «view» sprite
    defs: true,		// Create a «defs» sprite
    symbol: true,		// Create a «symbol» sprite
    stack: true		// Create a «stack» sprite
  }
};

gulp.task('svg', function () {
  gulp.src('**/*.svg', { cwd: './sprites/' })
    .pipe(svgSprite(config))
    .pipe(gulp.dest('out'));
});

gulp.task('default', function () {
  // place code for your default task here
});