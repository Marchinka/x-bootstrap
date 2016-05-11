var gulp = require('gulp');

var clean = require('gulp-clean');
 gulp.task('clean', function () {
	return gulp.src('./public', { read: false })
		.pipe(clean());
});

var webpack = require('webpack-stream');
var webpackConfiguration = {
	context: __dirname + "/src",
	entry: "./js/app.js",
	output: {
	filename: "js/app.js",
		path: __dirname + "/public",
	},
	module: {
  		loaders: [
    		{
      			test: /\.jsx?$/,
      			exclude: /(node_modules|bower_components)/,
      			loader: 'babel', // 'babel-loader' is also a legal name to reference
      			query: {
        			presets: ['es2015']
      			}
    		}
  		]
	}
};
gulp.task('js-bundle', function() {
  return gulp.src('src/index.js')
    .pipe(webpack(webpackConfiguration))
    .pipe(gulp.dest('public'));
});