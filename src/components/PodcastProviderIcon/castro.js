import React from 'react';
import PropTypes from 'prop-types';

const CastroIcon = ({ size }) => (
  <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
    <defs>
      <linearGradient id="castroa" x1="24" x2="24" y2="48" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#00ccbf" />
        <stop offset="1" stopColor="#00b265" />
      </linearGradient>
      <linearGradient
        id="castrob"
        x1="-270.744"
        y1="271.037"
        x2="-270.744"
        y2="270.994"
        gradientTransform="matrix(891 0 0 -890.125 241257 241261.875)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#151515" />
        <stop offset="1" stopColor="#353535" />
      </linearGradient>
      <linearGradient
        id="castroc"
        x1="-270.842"
        y1="271.27"
        x2="-270.842"
        y2="271.227"
        gradientTransform="matrix(633.152 0 0 -572.607 171508.344 155341.29)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".3" stopColor="#fff" />
        <stop offset="1" stopColor="#9cc0b7" />
      </linearGradient>
    </defs>
    <path
      d="M5.05 42.95C1.365 39.268 0 33.268 0 24S1.366 8.732 5.05 5.05 14.732 0 24 0s15.267 1.366 18.95 5.05S48 14.732 48 24s-1.366 15.268-5.05 18.95S33.268 48 24 48 8.732 46.634 5.05 42.95z"
      fill="url(#castroa)"
    />
    <path d="M24 5.003a19 19 0 1 1-19 19 19 19 0 0 1 19-19z" fill="url(#castrob)" />
    <path
      d="M31.906 34.838L28.72 30.42a8.05 8.05 0 1 0-9.473.02l-3.187 4.42a13.502 13.502 0 1 1 15.846-.022zM23.997 20.66a3.248 3.248 0 1 1-3.248 3.248 3.248 3.248 0 0 1 3.248-3.248z"
      fill="url(#castroc)"
    />
  </svg>
);

CastroIcon.propTypes = {
  size: PropTypes.number,
};

CastroIcon.defaultProps = {
  size: 40,
};

export default CastroIcon;
