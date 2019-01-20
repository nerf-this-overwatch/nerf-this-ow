import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style.scss';

const Button = ({ className, children, type, theme, ...props }) => (
  <button
    className={cn({
      button: true,
      [className]: !!className,
      [`button--${theme}`]: true,
    })}
    type={type}
    {...props}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.any.isRequired,
  type: PropTypes.oneOf(['button', 'submit']),
  className: PropTypes.string,
  theme: PropTypes.oneOf(['default', 'primary']),
};

Button.defaultProps = {
  type: 'button',
  className: undefined,
  theme: 'default',
};

export default Button;
