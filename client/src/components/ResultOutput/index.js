import React, { Component } from 'react';
import {
	_ResultOutput,
	_ResultOutputString,
	_ResultOutputStringText,
	_ResultOutputStringWrapper,
	_ResultOutputStringIndex,
	_ResultOutputInner,
} from './styles';

class ResultOutput extends Component {
	renderOutputStrings = () => {
		const { strings, diffIndexes, outputIndex } = this.props;
		return strings.map((string, stringIndex) => {
			return (
				<_ResultOutputStringWrapper key={stringIndex}>
					<_ResultOutputStringIndex>{stringIndex + 1}</_ResultOutputStringIndex>
					<_ResultOutputString
						isStringIsDefferent={diffIndexes.indexOf(stringIndex) !== -1}
						outputIndex={outputIndex}
					>
						<_ResultOutputStringText>{string}</_ResultOutputStringText>
					</_ResultOutputString>
				</_ResultOutputStringWrapper>
			);
		});
	};
	render() {
		return (
			<_ResultOutput>
				<_ResultOutputInner>{this.renderOutputStrings()}</_ResultOutputInner>
			</_ResultOutput>
		);
	}
}

export default ResultOutput;
