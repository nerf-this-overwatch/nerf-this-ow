import React from 'react';
import PropTypes from 'prop-types';

import Input from '../Input';

import './index.scss';
import Label from '../Label';

/* eslint-disable jsx-a11y/label-has-for */
const FormGroup = ({ label, value, placeholder, type, onChange, id, children }) => (
  <label className="form-group" htmlFor={id}>
    {!!label && <Label>{label}</Label>}

    {!children && <Input value={value} placeholder={placeholder} type={type} onChange={onChange} id={id} />}
    {children}
  </label>
);

FormGroup.propTypes = {
  value: PropTypes.any,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.oneOf(['text', 'number', 'file', 'checkbox']),
  onChange: PropTypes.func,
  id: PropTypes.string.isRequired,
  children: PropTypes.any,
};

FormGroup.defaultProps = {
  value: '',
  placeholder: undefined,
  label: undefined,
  type: 'text',
  onChange: () => undefined,
  children: undefined,
};

export default FormGroup;
