import styled, { css } from 'styled-components';

const getBg = ({ outputIndex, isStringIsDefferent }) => {
	return isStringIsDefferent ? (outputIndex ? '#40c' : 'yellow') : '#0a0';
};

export const _ResultOutput = styled.div`
	width: calc(50% - 5px);
	overflow-x: auto;
`;

export const _ResultOutputInner = styled.div`
	display: inline-block;
	min-width: 100%;
`;

export const _ResultOutputStringText = styled.span`
	font-family: PT Mono;
	font-size: 1rem;
	background-color: rgba(255, 255, 255, 0.6);
	white-space: nowrap;
`;

export const _ResultOutputStringIndex = styled.div`
	user-select: none;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	font-family: PT Mono;
	font-size: 0.8rem;
	min-width: 46px;
	color: #fff;
	background-color: rgba(0, 0, 0, 1);
	padding-right: 2px;
	margin-bottom: 1px;
`;

export const _ResultOutputStringWrapper = styled.div`
	position: relative;
	display: flex;
`;

export const _ResultOutputString = styled.div`
	${props => css`
		min-height: 33px;
		position: relative;
		display: flex;
		flex: 1;
		align-items: center;
		background-color: ${getBg(props)};
		padding: 0 3px;
		margin-bottom: 1px;
		min-width: 100%;
	`};
`;
