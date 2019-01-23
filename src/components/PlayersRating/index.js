import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ApiContext from '../../containers/ApiContext';

import './style.scss';
import PlayerRating from '../PlayerRating';

const PlayersRating = ({ teamId }) => {
  const { teams } = useContext(ApiContext);
  const { players } = teams.competitors.find(({ competitor }) => competitor.id === teamId).competitor;

  return (
    <div className="players-rating">
      {players.map(({ player }) => {
        console.log(player);
        return (
          <PlayerRating
            key={player.id}
            name={player.name}
            playerNumber={player.attributes.player_number}
            nationality={player.nationality}
            position={player.attributes.role}
            rate={3}
          />
        );
      })}
    </div>
  );
};

PlayerRating.propTypes = {
  teamId: PropTypes.number.isRequired,
};

export default PlayersRating;
