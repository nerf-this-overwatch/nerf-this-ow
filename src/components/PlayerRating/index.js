import React from 'react';
import { flag } from 'country-code-emoji';
import PropTypes from 'prop-types';

import './style.scss';

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

    <div className="player-rating__right-col">{rate}</div>
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
