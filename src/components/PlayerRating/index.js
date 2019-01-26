import React from 'react';
import { flag } from 'country-code-emoji';
import PropTypes from 'prop-types';

import xqcEmote from './xqc-emote.png';
import Rating from '../Rating';
import './style.scss';

const PlayerRating = ({ playerNumber, name, role, rate, nationality, isDramaQueen }) => (
  <div className="player-rating">
    <div className="player-rating__infos">
      <div className="player-rating__infos-top">
        <span className="player-rating__number">{playerNumber}</span>
        <span className="player-rating__nationality">{flag(nationality)}</span>

        <span className="player-rating__name">
          {name}

          {isDramaQueen && <img className="player-rating__drama-img" src={xqcEmote} />}
        </span>
      </div>

      <div className="player-rating__role">{role}</div>
    </div>

    <div className="player-rating__stars">
      <Rating rate={rate} height={20} />
    </div>
  </div>
);

PlayerRating.propTypes = {
  playerNumber: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  nationality: PropTypes.string.isRequired,
  isDramaQueen: PropTypes.bool.isRequired,
};

export default PlayerRating;
