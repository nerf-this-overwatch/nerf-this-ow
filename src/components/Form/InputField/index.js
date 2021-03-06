import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';

import Input from '../../Input';
import './index.scss';

const InputField = ({ label, type, className, ...props }) => {
  const [field, meta] = useField(props);
  return (
    // eslint-disable-next-line react/destructuring-assignment
    <label className={`input-field ${className}`} htmlFor={props.id || props.name}>
      {!!label && <span className="input-field__label">{label}</span>}
      <Input className="input-field__input" {...field} {...props} type={type} />
      {meta.touched && meta.error ? <div className="input-field__error">{meta.error}</div> : null}
    </label>
  );
};

InputField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
};

InputField.defaultProps = {
  type: 'text',
  className: '',
  label: '',
};

export default InputField;
