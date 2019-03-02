import React from 'react';
import PropTypes from 'prop-types';

const OvercastIcon = ({ size }) => (
  <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
    <defs>
      <linearGradient id="overcasta" x1="24" x2="24" y2="48" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#ff9a20" />
        <stop offset="1" stopColor="#ff7724" />
      </linearGradient>
      <linearGradient id="overcastb" x1="24" y1="5" x2="24" y2="43" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#444e58" />
        <stop offset="1" stopColor="#22312c" />
      </linearGradient>
    </defs>
    <path
      d="M5.05 42.95C1.365 39.268 0 33.268 0 24S1.366 8.732 5.05 5.05 14.732 0 24 0s15.267 1.366 18.95 5.05S48 14.732 48 24s-1.366 15.268-5.05 18.95S33.268 48 24 48 8.732 46.634 5.05 42.95z"
      fill="url(#overcasta)"
    />
    <circle cx="24" cy="24" r="18" fill="#fff" />
    <path
      d="M24 43a19 19 0 1 1 19-19 18.954 18.954 0 0 1-19 19zm0-7.52l1.425-1.426L24 28.592l-1.425 5.462zm-1.82-.08l-.713 2.692 1.662-1.663zm3.64 0l-.95.95 1.663 1.663zm1.347 4.908L24 37.142l-3.167 3.166a20.407 20.407 0 0 0 3.167.317 13.871 13.871 0 0 0 3.167-.317zM24 7.375a16.61 16.61 0 0 0-5.463 32.3l3.563-13.22a3.077 3.077 0 0 1-1.267-2.534 3.167 3.167 0 1 1 5.067 2.533l3.563 13.221A16.61 16.61 0 0 0 24 7.375z"
      fill="url(#overcastb)"
    />
    <path
      d="M34.846 32.233a1.228 1.228 0 0 1-1.663.238 1.076 1.076 0 0 1-.237-1.584 12.165 12.165 0 0 0 0-13.775 1.076 1.076 0 0 1 .237-1.583 1.228 1.228 0 0 1 1.663.238 14.28 14.28 0 0 1 0 16.466zm-5.78-3.087a1.344 1.344 0 0 1 .08-1.821A5.166 5.166 0 0 0 30.333 24a5.435 5.435 0 0 0-1.187-3.325 1.43 1.43 0 0 1-.08-1.82 1.09 1.09 0 0 1 1.663-.08 7.887 7.887 0 0 1 0 10.45 1.15 1.15 0 0 1-1.662-.08zm-10.133 0a1.15 1.15 0 0 1-1.662.079 7.887 7.887 0 0 1 0-10.45 1.088 1.088 0 0 1 1.662.08 1.344 1.344 0 0 1-.079 1.82A5.435 5.435 0 0 0 17.667 24a5.166 5.166 0 0 0 1.187 3.325 1.34 1.34 0 0 1 .08 1.82zm-4.116 3.325a1.228 1.228 0 0 1-1.663-.238 14.28 14.28 0 0 1 0-16.466 1.228 1.228 0 0 1 1.663-.238 1.076 1.076 0 0 1 .237 1.584 12.165 12.165 0 0 0 0 13.775 1.142 1.142 0 0 1-.237 1.583z"
      fill="#ff9a20"
    />
  </svg>
);

OvercastIcon.propTypes = {
  size: PropTypes.number,
};

OvercastIcon.defaultProps = {
  size: 40,
};

export default OvercastIcon;
