import styled, { css } from 'styled-components';

const getSize = sizeProp => {
	const regularSize = 1;
	return sizeProp ? parseFloat(sizeProp) : regularSize;
};

export const _Header = styled.div`
	text-align: center;
	margin: 0 auto;
	line-height: 1.1;
	${({ size, extStyle }) => css`
		font-size: ${getSize(size)}rem;
		${extStyle};
	`};
`;
