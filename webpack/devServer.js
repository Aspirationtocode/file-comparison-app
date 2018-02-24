import { DIST } from './constants';
export default {
	contentBase: DIST,
	compress: true,
	port: 3000,
	open: true,
	historyApiFallback: true,
	hot: true,
};
