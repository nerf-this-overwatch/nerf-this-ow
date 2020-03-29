import React from 'react';
import { useField } from 'formik';

import './index.scss';

const CheckboxField = ({ label, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    // eslint-disable-next-line react/destructuring-assignment
    <label className="checkbox-field" htmlFor={props.id || props.name}>
      <input type="checkbox" {...field} {...props} />
      <span className="checkbox-field__label">{label}</span>
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </label>
  );
};

export default CheckboxField;
