import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style.scss';

const Input = ({ className, ...props }) => (
  <input
    className={cn({
      input: true,
      [className]: !!className,
    })}
    {...props}
  />
);

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'number', 'file', 'checkbox', 'date', 'datetime-local', 'time']),
  className: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  className: undefined,
};

export default Input;
