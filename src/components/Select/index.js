import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Select = ({ className, ...props }) => <select className={`select ${className}`} {...props} />;

Select.propTypes = {
  className: PropTypes.string,
};

Select.defaultProps = {
  className: '',
};

export default Select;
