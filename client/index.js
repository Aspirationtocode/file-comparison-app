import React from 'react';
import { render } from 'react-dom';
import 'babel-polyfill';
import './styles/';
import FileComparison from './src/containers/FileComparison';

const rootElement = document.getElementById('root');

render(<FileComparison />, rootElement);

if (module.hot && !PRODUCTION) {
	module.hot.accept();
}
