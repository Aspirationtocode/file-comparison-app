import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import FontAwesome from 'react-fontawesome';

import { statusTypes, readFile } from './helpers';
import { _DropZoneStatus, _DropZoneStatusText, dropZoneStyles } from './styles';

class FileReaderElement extends Component {
	static propTypes = {
		index: PropTypes.number.isRequired,
		handleReadFile: PropTypes.func.isRequired,
	};

	state = {
		status: statusTypes().DEFAULT,
	};

	handleFileAccept = accepted => {
		const { handleReadFile, index } = this.props;
		const file = accepted[0];
		const { name } = file;
		readFile(file).then(content => {
			const newFileState = {
				name,
				content,
			};
			handleReadFile(index, newFileState);
			this.setState({
				status: statusTypes(name).ACCEPTED,
			});
		});
	};

	handleFileReject = rejected => {
		const { handleReadFile, index } = this.props;
		const rejectedObject = rejected[0];
		const { name } = rejectedObject;
		handleReadFile(index, null);
		this.setState({
			status: statusTypes(name, !rejectedObject.type).REJECTED,
		});
	};

	handleFileDrop = (accepted, rejected) => {
		accepted.length && this.handleFileAccept(accepted);
		rejected.length && this.handleFileReject(rejected);
	};

	render() {
		const { state } = this;
		return (
			<Dropzone
				multiple={false}
				accept="text/*, application/javascript"
				onDrop={this.handleFileDrop}
				{...dropZoneStyles}
			>
				<_DropZoneStatus>
					<_DropZoneStatusText>{state.status.text}</_DropZoneStatusText>
					<FontAwesome
						name={state.status.icon}
						style={{
							textShadow: '4px 4px 0 rgba(0, 0, 0, 0.1)',
							fontSize: '30px',
						}}
					/>
				</_DropZoneStatus>
			</Dropzone>
		);
	}
}

export default FileReaderElement;
