import styled from 'styled-components';

export const _DropZoneStatus = styled.div`
	min-width: 120px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 30px;
	height: 100%;
	color: #fff;
	&:hover {
		cursor: pointer;
	}
`;

export const _DropZoneStatusText = styled.div`
	font-size: 1rem;
	text-align: center;
	margin-bottom: 4px;
	min-height: 2rem;
`;

export const dropZoneStyles = {
	style: {
		backgroundColor: 'rgba(0, 0, 0, 0.2)',
		border: '2px dashed #999',
		width: 'calc(50% - 5px)',
		transition: 'all ease .4s',
	},
	acceptStyle: {
		backgroundColor: 'rgba(0, 200, 0, 0.5)',
	},
	rejectStyle: {
		backgroundColor: 'rgba(255, 0, 0, 0.5)',
	},
};
