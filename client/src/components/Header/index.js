import React from 'react';
import PropTypes from 'prop-types';
import { _Header } from './styles';

const Header = ({ title, size, extStyle }) => (
	<_Header size={size} extStyle={extStyle}>
		{title}
	</_Header>
);

Header.defaultProps = {
	size: '1x',
	extStyle: '',
};

Header.propTypes = {
	title: PropTypes.string.isRequired,
	size: PropTypes.string,
	extStyle: PropTypes.string,
};

export default Header;
