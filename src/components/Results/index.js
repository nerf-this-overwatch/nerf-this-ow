import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import Image from '../Image';

const Results = ({ image, innerRef, ...props }) => (
  <div className="results" ref={innerRef} {...props}>
    <Image
      src={image}
      size={{
        width: 1024,
        height: 512,
      }}
    />
  </div>
);

Results.propTypes = {
  innerRef: PropTypes.object,
};

Results.defaultProps = {
  innerRef: undefined,
};

export default Results;
