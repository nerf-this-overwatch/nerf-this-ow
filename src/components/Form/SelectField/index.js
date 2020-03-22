import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';

import Select from '../../Select';

import './index.scss';

const SelectField = ({ label, className, children, ...props }) => {
  const [field, meta] = useField(props);
  return (
    // eslint-disable-next-line react/destructuring-assignment
    <label className={`input-field ${className}`} htmlFor={props.id || props.name}>
      {!!label && <span className="input-field__label">{label}</span>}
      <Select className="input-field__select" {...field} {...props}>
        {children}
      </Select>
      {meta.touched && meta.error ? <div className="input-field__error">{meta.error}</div> : null}
    </label>
  );
};

SelectField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
};

SelectField.defaultProps = {
  type: 'text',
  className: '',
  label: '',
};

export default SelectField;
