import React from 'react';
import { flag } from 'country-code-emoji';
import PropTypes from 'prop-types';

import xqcEmote from './xqc-emote.png';
import Rating from '../Rating';
import './style.scss';

const PlayerRating = ({ player, rate, isXqc }) => (
  <div className="player-rating">
    <div className="player-rating__infos">
      <div className="player-rating__infos-top">
        <span className="player-rating__number">{player.number}</span>
        <span className="player-rating__nationality">{flag(player.nationality)}</span>

        <span className="player-rating__name">
          {player.name}

          {isXqc && <img className="player-rating__drama-img" alt={`${player.name} is a drama queen`} src={xqcEmote} />}
        </span>
      </div>

      <div className="player-rating__role">{player.role}</div>
    </div>

    <div className="player-rating__stars">
      <Rating rate={rate} height={20} />
    </div>
  </div>
);

PlayerRating.propTypes = {
  player: PropTypes.object.isRequired,
  rate: PropTypes.number,
  isXqc: PropTypes.bool,
};

PlayerRating.defaultProps = {
  rate: 0,
  isXqc: false,
};

export default PlayerRating;
