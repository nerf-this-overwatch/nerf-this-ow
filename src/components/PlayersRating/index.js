import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import PlayerRating from '../PlayerRating';
import positions from '../../data/positions';

const PlayersRating = ({ players = {} }) => {
  const emptyPosObjPlayers = positions.reduce(
    (acc, pos) => ({
      ...acc,
      [pos]: [],
    }),
    {}
  );

  const posObjPlayers = Object.keys(players).reduce((acc, playerId) => {
    const player = players[playerId];

    return {
      ...acc,
      [player.position]: [...acc[player.position], player].sort((playerA, playerB) => playerB.rate - playerA.rate),
    };
  }, emptyPosObjPlayers);

  return (
    <div className="players-rating">
      {positions.map(position =>
        posObjPlayers[position].map(player => (
          <PlayerRating
            key={player.id}
            name={player.name}
            playerNumber={player.playerNumber}
            nationality={player.nationality}
            position={player.position}
            rate={player.rate}
            isDramaQueen={player.isDramaQueen}
          />
        ))
      )}
    </div>
  );
};
PlayersRating.propTypes = {
  players: PropTypes.object,
};

export default PlayersRating;
