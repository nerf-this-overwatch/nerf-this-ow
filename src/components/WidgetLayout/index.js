import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import Button from '../Button';
import { useImageGeneration } from '../../hooks/image';

// Wrapper
const WidgetLayout = ({ children, imageName, imageSize }) => {
  const previewRef = useRef();
  const [generateImage] = useImageGeneration(previewRef, imageName, imageSize);

  return (
    <div className="widget-layout">
      {React.Children.map(children, child =>
        React.cloneElement(child, {
          previewRef,
          onSubmit: generateImage,
        })
      )}
    </div>
  );
};

WidgetLayout.propTypes = {
  children: PropTypes.any.isRequired,
  imageName: PropTypes.string.isRequired,
  imageSize: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }),
};

WidgetLayout.defaultProps = {
  imageSize: undefined,
};

export default WidgetLayout;

// Preview
export const WidgetLayoutPreview = ({ children, previewRef }) => (
  <div className="widget-layout__preview" ref={previewRef}>
    {children}
  </div>
);

WidgetLayoutPreview.propTypes = {
  children: PropTypes.any.isRequired,
  previewRef: PropTypes.object,
};

WidgetLayoutPreview.defaultProps = {
  previewRef: undefined,
};

// Form
export const WidgetLayoutForm = ({ onSubmit, children }) => (
  <form className="widget-layout__form" onSubmit={onSubmit}>
    {children}

    <div>
      <Button type="submit" theme="primary">
        Generate Image
      </Button>
    </div>
  </form>
);

WidgetLayoutForm.propTypes = {
  children: PropTypes.any.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
