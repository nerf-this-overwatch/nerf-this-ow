import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';

import './style.scss';

const Image = ({ src, size, ...props }) => {
  const [srcSize, setSrcSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(
    () => {
      if (src) {
        const imageDom = document.createElement('img');
        imageDom.setAttribute('src', src);

        imageDom.onload = () => {
          const { naturalWidth, naturalHeight } = imageDom;

          setSrcSize({
            width: naturalWidth,
            height: naturalHeight,
          });
        };
      }
    },
    [src]
  );

  const { width, height } = srcSize;

  if (!src || width === 0 || height === 0) return null;

  const orientation = getMoveOrientation(size, { width, height });

  // used if the orientation is 'landscape'
  const innerWidth = (width * size.height) / height;

  // used if the orientation is 'portrait'
  const innerHeight = (height * size.width) / width;

  return (
    <div className="image-wrapper" style={{ ...size }}>
      <Draggable
        axis={orientation}
        bounds={{
          left: size.width - innerWidth,
          right: 0,
          top: size.height - innerHeight,
          bottom: 0,
        }}
        {...props}
      >
        <span
          className={`image image--${orientation}`}
          style={{
            width: orientation === 'x' ? innerWidth : 'inherit',
            height: orientation === 'y' ? innerHeight : 'inherit',
          }}
        >
          <img src={src} className="image__source" alt="cover illustration" />
        </span>
      </Draggable>
    </div>
  );
};

const getMoveOrientation = (wrapper, image) => {
  const wrapperRatio = wrapper.height / wrapper.width;
  const imageRatio = image.height / image.width;

  // if wrapper is landscape
  if (wrapperRatio > 1) {
    // => if image is landscape : width : 100%
    // => if image is portrait : width : 100%
    return 'x';
  }

  // if wrapper is portrait
  if (wrapperRatio < 1) {
    // => if image is landscape : height : 100%
    // => if image is portrait : height : 100%

    return 'y';
  }
  // if wrapper is square

  // => if image is landscape : height : 100%
  // => if image is portrait : width : 100%
  return imageRatio > 1 ? 'y' : 'x';
};

Image.propTypes = {
  src: PropTypes.string,
  size: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
};

Image.defaultProps = {
  src: undefined,
};

export default Image;
