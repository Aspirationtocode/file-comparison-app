import React from 'react';
import { _Header } from './styles';

export default ({ title, size, extStyle }) => (
	<_Header size={size} extStyle={extStyle}>
		{title}
	</_Header>
);
