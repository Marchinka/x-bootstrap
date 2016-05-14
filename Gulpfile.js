var gulp = require('gulp');

var webpack = require('webpack-stream');
var webpackConfiguration = {
	context: __dirname + "/sources",
	entry: "./x-bootstrap.js",
	output: {
    filename: "x-bootstrap.js"
	},
	module: {
  		loaders: [
    		{
      			test: /\.jsx?$/,
      			exclude: /(node_modules|bower_components)/,
      			loader: 'babel',
      			query: {
        			presets: ['es2015']
      			}
    		}
  		]
	}
};
gulp.task('js-bundle', function() {
  return gulp.src('sources/x-bootstrap.js')
    .pipe(webpack(webpackConfiguration))
    .pipe(gulp.dest('dist'));
});