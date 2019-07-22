const path = require('path');

module.exports = {
	entry:  __dirname + "/src/index.js",
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'lib'),
		libraryTarget: 'umd',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: ["thread-loader", "babel-loader"],
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader?importLoaders=1',
			},
			{
				test: /\.svg$/,
				loader: 'file-loader',
				query: {
					name: 'static/media/[name].[hash:8].[ext]',
				},
			},
			{
                test: /.tsx?$/,
                loader: "awesome-typescript-loader"
            }
		],
	},
};
