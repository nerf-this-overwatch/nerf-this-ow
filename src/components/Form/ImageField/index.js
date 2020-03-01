import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';

import Input from '../../Input';
import './index.scss';
import { isStringAImageURL } from '../../../utils/image';
import Button from '../../Button';

const InputField = ({ label, ...props }) => {
  const [field, , { setValue }] = useField(props);
  const fileInput = useRef();

  const handleChange = async str => {
    const isImage = await isStringAImageURL(str);
    if (isImage) setValue(str);
  };

  const handleTextInputPaste = e => handleChange(e.clipboardData.getData('text'));
  const onFileInputChange = e => {
    const url = URL.createObjectURL(e.target.files[0]);
    handleChange(url);
  };

  const handleButtonClick = () => fileInput.current.click();

  return (
    // eslint-disable-next-line react/destructuring-assignment
    <label className="image-field" htmlFor={props.id || props.name}>
      <span className="image-field__label">{label}</span>

      <div className="image-field__row">
        <Button className="image-field__button" onClick={handleButtonClick}>
          Choisir une image
        </Button>

        <input
          tabIndex="-1"
          className="image-field__file-input"
          type="file"
          onChange={onFileInputChange}
          ref={fileInput}
        />
        <Input
          className="image-form__paste-input"
          onPaste={handleTextInputPaste}
          onChange={() => null}
          value={field.value}
          type="text"
          placeholder="Coller l'url d'une image"
        />
      </div>
    </label>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
};

export default InputField;
