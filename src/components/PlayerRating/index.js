import React from 'react';
import { flag } from 'country-code-emoji';
import PropTypes from 'prop-types';

import './style.scss';

const FullStar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
    <path d="M18.271 7.619l-4.049 3.949.959 5.576c.011.078.011.146.011.224 0 .29-.133.558-.457.558a.9.9 0 0 1-.445-.134l-5.01-2.633-5.008 2.633a.943.943 0 0 1-.446.134c-.323 0-.468-.268-.468-.558 0-.078.011-.146.022-.224l.959-5.576-4.06-3.949C.145 7.475 0 7.285 0 7.084c0-.335.346-.469.625-.513l5.6-.814L8.735.682c.1-.212.29-.457.546-.457s.446.245.546.457l2.509 5.075 5.6.814c.268.044.625.178.625.513 0 .201-.145.391-.29.535z" />
  </svg>
);

const EmptyStar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
    <path d="M18.271 7.619l-4.049 3.949.959 5.576c.011.078.011.146.011.224 0 .301-.133.558-.457.558a.9.9 0 0 1-.445-.134l-5.01-2.633-5.008 2.633a.943.943 0 0 1-.446.134c-.323 0-.468-.268-.468-.558 0-.078.011-.146.022-.224l.959-5.576-4.06-3.949C.145 7.475 0 7.285 0 7.084c0-.335.346-.469.625-.513l5.6-.814L8.735.682c.1-.212.29-.457.546-.457s.446.245.546.457l2.509 5.075 5.6.814c.268.044.625.178.625.513 0 .201-.145.391-.29.535zm-2.175.134l-4.707-.691L9.28 2.801 7.172 7.062l-4.707.691 3.414 3.313-.814 4.695 4.216-2.22 4.205 2.22-.804-4.695 3.414-3.313z" />
  </svg>
);

const PlayerRating = ({ playerNumber, name, position, rate, nationality }) => (
  <div className="player-rating">
    <div className="player-rating__infos">
      <div className="player-rating__infos-top">
        <span className="player-rating__number">{playerNumber}</span>
        <span className="player-rating__nationality">{flag(nationality)}</span>
        <span className="player-rating__name">{name}</span>
      </div>

      <div className="player-rating__position">{position}</div>
    </div>

    <div className="player-rating__stars">
      {[...Array(rate)].map(() => (
        <FullStar />
      ))}

      {[...Array(5 - rate)].map(() => (
        <EmptyStar />
      ))}
    </div>
  </div>
);

PlayerRating.propTypes = {
  playerNumber: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  nationality: PropTypes.string.isRequired,
};

export default PlayerRating;
