export default {
	rules: [
		{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
			},
		},
		{
			test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
			use: {
				loader: 'file-loader',
			},
		},
	],
};
