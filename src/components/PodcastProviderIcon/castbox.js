import React from 'react';
import PropTypes from 'prop-types';

const CastboxIcon = ({ size }) => (
  <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
    <defs>
      <linearGradient id="castboxa" x1="5.049" y1="5.049" x2="42.951" y2="42.951" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#ff9e57" />
        <stop offset="1" stopColor="#ff5321" />
      </linearGradient>
    </defs>
    <path
      d="M5.05 42.95C1.365 39.268 0 33.268 0 24S1.366 8.732 5.05 5.05 14.732 0 24 0s15.267 1.366 18.95 5.05S48 14.732 48 24s-1.366 15.268-5.05 18.95S33.268 48 24 48 8.732 46.634 5.05 42.95z"
      fill="url(#castboxa)"
    />
    <path
      d="M27.994 17.79v10.293a1.5 1.5 0 0 1-3 0v-2.904a1.02 1.02 0 0 0-1.99.043H23v2.68a1.5 1.5 0 0 1-3 0v-3.64a1.021 1.021 0 0 0-2 0v7.224a1.5 1.5 0 0 1-3 0v-5.305a.92.92 0 0 0-1-.814.92.92 0 0 0-1 .815v.389a1.5 1.5 0 1 1-3 0v-4.635a1.5 1.5 0 1 1 3 0v.39a.92.92 0 0 0 1 .814.92.92 0 0 0 1-.815v-3.34a1.5 1.5 0 0 1 3 0v1.412a1.021 1.021 0 0 0 2 0v-3.893a1.5 1.5 0 0 1 3 0v4.861h.004a1.02 1.02 0 0 0 1.99.043V17.79a1.5 1.5 0 0 1 3 0zm3.506 2.516a1.488 1.488 0 0 0-1.5 1.476v5.884a1.5 1.5 0 0 0 3 0v-5.884a1.488 1.488 0 0 0-1.5-1.476zm5 2.988a1.488 1.488 0 0 0-1.5 1.475v1.467a1.5 1.5 0 0 0 3 0v-1.467a1.488 1.488 0 0 0-1.5-1.475z"
      fill="#fff"
    />
  </svg>
);

CastboxIcon.propTypes = {
  size: PropTypes.number,
};

CastboxIcon.defaultProps = {
  size: 40,
};

export default CastboxIcon;
