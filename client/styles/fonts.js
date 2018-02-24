import { injectGlobal } from 'styled-components';
import AmaticSCRegular from '../static/fonts/AmaticSC/AmaticSC-Regular.ttf';
import AmaticSCBold from '../static/fonts/AmaticSC/AmaticSC-Bold.ttf';
import PTMono from '../static/fonts/PTMono/PTMono.ttf';

injectGlobal`
  @font-face {
    font-family: AmaticSCRegular;
    src: url('${AmaticSCRegular}');
  }
	@font-face {
    font-family: AmaticSCBold;
    src: url('${AmaticSCBold}');
  }
	@font-face {
    font-family: AmaticSCBold;
    src: url('${AmaticSCBold}');
  }
	@font-face {
    font-family: PT Mono;
    src: url('${PTMono}');
  }
`;
