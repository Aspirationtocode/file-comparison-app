import { injectGlobal } from 'styled-components';
import reset from 'styled-reset';

injectGlobal`
  ${reset}
	* {
		box-sizing: border-box;
	}
	html, body {
		font-size: 20px;
	}
	body {
		line-height: 1;
		font-family: 'AmaticSCBold';
		background-color: #f1f3f5;
	}
`;
