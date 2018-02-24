import styled, { css } from 'styled-components';

const getBg = ({ outputIndex, isStringIsDefferent }) => {
	return isStringIsDefferent ? (outputIndex ? '#40c' : 'yellow') : '#0a0';
};

export const _ResultOutput = styled.div`
	width: calc(50% - 5px);
	overflow-x: auto;
`;

export const _ResultOutputStringText = styled.span`
	position: relative;
	top: -3px;
	font-family: PT Mono;
	font-size: 1rem;
	background-color: rgba(255, 255, 255, 0.6);
	white-space: nowrap;
`;

export const _ResultOutputStringIndex = styled.div`
	user-select: none;
	position: absolute;
	z-index: 10;
	top: 0;
	left: 0;
	height: calc(100% - 1px);
	display: flex;
	align-items: center;
	justify-content: flex-end;
	font-family: PT Mono;
	font-size: 0.8rem;
	min-width: 46px;
	color: #fff;
	background-color: rgba(0, 0, 0, 1);
	padding-right: 2px;
`;

export const _ResultOutputStringWrapper = styled.div`
	position: relative;
`;

export const _ResultOutputString = styled.div`
	${props => css`
		min-height: 33px;
		position: relative;
		display: inline-block;
		vertical-align: middle;
		background-color: ${getBg(props)};
		padding: 1px;
		padding-left: 50px;
		padding-right: 3px;
		margin-bottom: 1px;
		min-width: 100%;
	`};
`;
