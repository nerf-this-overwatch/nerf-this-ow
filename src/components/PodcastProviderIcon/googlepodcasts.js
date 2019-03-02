import React from 'react';
import PropTypes from 'prop-types';

const GooglePodcastsIcon = ({ size }) => (
  <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
    <path
      stroke="#e5e5e5"
      fill="#fff"
      d="M24 47.5c-9.6 0-15.16-1.5-18.6-4.9S.5 33.6.5 24 2 8.84 5.4 5.4 14.4.5 24 .5 39.16 2 42.6 5.4s4.9 9 4.9 18.6-1.5 15.16-4.9 18.6-9 4.9-18.6 4.9z"
    />
    <path stroke="#fab908" fill="none" strokeWidth="4" strokeLinecap="round" d="M24 10.25v2M24 35.75v2M24 18.25v11.5" />
    <path stroke="#ea4335" fill="none" strokeWidth="4" strokeLinecap="round" d="M17 16.5v7M17 29.5v2" />
    <path stroke="#34a853" fill="none" strokeWidth="4" strokeLinecap="round" d="M31 24.5v7M31 18.5v-2" />
    <path stroke="#4285f4" fill="none" strokeWidth="4" strokeLinecap="round" d="M38 23v2" />
    <path stroke="#0066d9" fill="none" strokeWidth="4" strokeLinecap="round" d="M10 23v2" />
  </svg>
);

GooglePodcastsIcon.propTypes = {
  size: PropTypes.number,
};

GooglePodcastsIcon.defaultProps = {
  size: 40,
};
export default GooglePodcastsIcon;
