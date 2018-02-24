import React, { Component } from 'react';
import FlexContainer from 'react-styled-flexbox';

import ResultOutput from '../ResultOutput';
import Header from '../Header';

import { getDiffIndexes } from './helpers';

class Result extends Component {
	render() {
		const { files } = this.props;
		if (files[0] && files[1]) {
			const fileContents = files.map(file =>
				file.content
					.split('\n')
					.map(string => string.replace(' ', String.fromCharCode(160))),
			);
			const diffIndexes = getDiffIndexes(...fileContents);
			return (
				<FlexContainer justifySpaceBetween>
					<ResultOutput
						strings={fileContents[0]}
						diffIndexes={diffIndexes}
						outputIndex={0}
					/>
					<ResultOutput
						strings={fileContents[1]}
						diffIndexes={diffIndexes}
						outputIndex={1}
					/>
				</FlexContainer>
			);
		}
		return <Header title="☝Для сравнения загрузите 2 файла.☝" size="1.2x" />;
	}
}

export default Result;
