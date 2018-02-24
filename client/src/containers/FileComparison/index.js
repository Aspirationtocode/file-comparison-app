import React, { Component } from 'react';
import FlexContainer from 'react-styled-flexbox';
import { _FileComparison } from './styles';

import Separator from '../../components/Separator';
import Header from '../../components/Header';
import FileReaderElement from '../../components/FileReaderElement';
import Result from '../../components/Result';

class FileComparison extends Component {
	state = {
		files: Array.from({ length: 2 }),
	};

	handleReadFile = (fileIndex, file) => {
		const { files } = this.state;
		const newFiles = files.map((f, index) => (index === fileIndex ? file : f));
		this.setState({
			files: newFiles,
		});
	};

	renderFileReaderElements = () => {
		const { state } = this;
		return state.files.map((el, index) => (
			<FileReaderElement
				key={index}
				index={index}
				handleReadFile={this.handleReadFile}
			/>
		));
	};

	render() {
		const { files } = this.state;
		return (
			<_FileComparison>
				<Header title="☝Построчное сравнение файлов☝" size="1.6x" />
				<Separator />
				<FlexContainer justifySpaceBetween>
					{this.renderFileReaderElements()}
				</FlexContainer>
				<Separator />
				<Result files={files} />
			</_FileComparison>
		);
	}
}

export default FileComparison;
