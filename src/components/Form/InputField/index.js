import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';

import Input from '../../Input';
import './index.scss';

const InputField = ({ label, type, ...props }) => {
  const [field, meta] = useField(props);
  return (
    // eslint-disable-next-line react/destructuring-assignment
    <label className="input-field" htmlFor={props.id || props.name}>
      <span className="input-field__label">{label}</span>
      <Input className="input-field__input" {...field} {...props} type={type} />
      {meta.touched && meta.error ? <div className="input-field__error">{meta.error}</div> : null}
    </label>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
};

InputField.defaultProps = {
  type: 'text',
};

export default InputField;
