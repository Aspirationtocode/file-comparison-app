import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import { DIST, CLIENT } from './constants';

const isProd = process.env.NODE_ENV === 'PRODUCTION' ? true : false;

export default [
	new HtmlWebpackPlugin({ template: `${CLIENT}/index.html` }),
	new webpack.HotModuleReplacementPlugin(),
	new webpack.DefinePlugin({
		PRODUCTION: JSON.stringify(isProd),
	}),
];
