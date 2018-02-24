import webpackModule from './webpackModule';
import devServer from './devServer';
import plugins from './plugins';
import { DIST, CLIENT } from './constants';

const isProd = process.env.NODE_ENV === 'PRODUCTION' ? true : false;

export default {
	entry: [`${CLIENT}/index.js`],
	output: {
		path: `${DIST}`,
		filename: 'bundle.js',
	},
	devtool: isProd ? false : 'source-map',
	module: webpackModule,
	devServer,
	plugins,
};
