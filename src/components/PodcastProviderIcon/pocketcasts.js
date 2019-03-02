import React from 'react';
import PropTypes from 'prop-types';

const PocketcastIcon = ({ size }) => (
  <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
    <path
      d="M5.05 42.95C1.365 39.268 0 33.268 0 24S1.366 8.732 5.05 5.05 14.732 0 24 0s15.267 1.366 18.95 5.05S48 14.732 48 24s-1.366 15.268-5.05 18.95S33.268 48 24 48 8.732 46.634 5.05 42.95z"
      fill="#f44336"
    />
    <path
      d="M23.567 36.472a12.487 12.487 0 1 1 12.905-12.905.442.442 0 0 0 .442.426h3.633a.444.444 0 0 0 .443-.457A17.003 17.003 0 1 0 23.535 40.99a.444.444 0 0 0 .457-.443v-3.633a.442.442 0 0 0-.425-.442zm.426-22.31a9.83 9.83 0 0 0-.463 19.65.443.443 0 0 0 .463-.443v-2.883a.45.45 0 0 0-.411-.44 6.066 6.066 0 1 1 6.463-6.464.45.45 0 0 0 .441.41h2.883a.443.443 0 0 0 .443-.462 9.83 9.83 0 0 0-9.82-9.367z"
      fill="#fff"
    />
  </svg>
);

PocketcastIcon.propTypes = {
  size: PropTypes.number,
};

PocketcastIcon.defaultProps = {
  size: 40,
};

export default PocketcastIcon;
