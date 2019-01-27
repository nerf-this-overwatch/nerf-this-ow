import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { isStringAImageURL } from '../../utils/image';
import Input from '../Input';
import FormGroup from '../FormGroup';
import Button from '../Button';

import './style.scss';

const ImageFormGroup = ({ onChange, id }) => {
  const [image, setImage] = useState('');
  const fileInput = useRef();

  useEffect(
    async () => {
      const isImage = await isStringAImageURL(image);
      if (!isImage) return false;
      return onChange(image);
    },
    [image]
  );

  const onTextInputPaste = e => setImage(e.clipboardData.getData('text'));

  const onFileInputChange = e => {
    const url = URL.createObjectURL(e.target.files[0]);
    setImage(url);
  };

  const onButtonClick = () => fileInput.current.click();

  return (
    <FormGroup label="image" id={id}>
      <div className="image-form__row">
        <Button className="image-input__button" onClick={onButtonClick}>
          Choisir une image
        </Button>

        <input
          tabIndex="-1"
          className="image-input__file-input"
          type="file"
          onChange={onFileInputChange}
          ref={fileInput}
        />
        <Input
          className="image-form__paste-input"
          onPaste={onTextInputPaste}
          onChange={() => null}
          value={image}
          type="text"
          placeholder="Coller l'url d'une image"
        />
      </div>
    </FormGroup>
  );
};

ImageFormGroup.propTypes = {
  onChange: PropTypes.func,
  id: PropTypes.string.isRequired,
};

ImageFormGroup.defaultProps = {
  onChange: () => undefined,
};

export default ImageFormGroup;
