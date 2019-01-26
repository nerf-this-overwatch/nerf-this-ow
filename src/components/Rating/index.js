import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Rating = ({ rate, height, scale }) => (
  <div className="rating">
    {[...Array(rate)].map(() => (
      <svg className="rating__full-star" xmlns="http://www.w3.org/2000/svg" height={height} viewBox="0 0 18 18">
        <path d="M18.271 7.619l-4.049 3.949.959 5.576c.011.078.011.146.011.224 0 .29-.133.558-.457.558a.9.9 0 0 1-.445-.134l-5.01-2.633-5.008 2.633a.943.943 0 0 1-.446.134c-.323 0-.468-.268-.468-.558 0-.078.011-.146.022-.224l.959-5.576-4.06-3.949C.145 7.475 0 7.285 0 7.084c0-.335.346-.469.625-.513l5.6-.814L8.735.682c.1-.212.29-.457.546-.457s.446.245.546.457l2.509 5.075 5.6.814c.268.044.625.178.625.513 0 .201-.145.391-.29.535z" />
      </svg>
    ))}

    {[...Array(scale - rate)].map(() => (
      <svg className="rating__empty-star" xmlns="http://www.w3.org/2000/svg" height={height} viewBox="0 0 18 18">
        <path d="M18.271 7.619l-4.049 3.949.959 5.576c.011.078.011.146.011.224 0 .301-.133.558-.457.558a.9.9 0 0 1-.445-.134l-5.01-2.633-5.008 2.633a.943.943 0 0 1-.446.134c-.323 0-.468-.268-.468-.558 0-.078.011-.146.022-.224l.959-5.576-4.06-3.949C.145 7.475 0 7.285 0 7.084c0-.335.346-.469.625-.513l5.6-.814L8.735.682c.1-.212.29-.457.546-.457s.446.245.546.457l2.509 5.075 5.6.814c.268.044.625.178.625.513 0 .201-.145.391-.29.535zm-2.175.134l-4.707-.691L9.28 2.801 7.172 7.062l-4.707.691 3.414 3.313-.814 4.695 4.216-2.22 4.205 2.22-.804-4.695 3.414-3.313z" />
      </svg>
    ))}
  </div>
);

Rating.propTypes = {
  rate: PropTypes.number.isRequired,
  scale: PropTypes.number,
  height: PropTypes.number,
};

Rating.defaultProps = {
  scale: 5,
  height: 18,
};

export default Rating;
