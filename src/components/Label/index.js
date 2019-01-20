import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Label = ({ children }) => <span className="label">{children}</span>;

Label.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Label;
