import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ApiContext from '../../containers/ApiContext';

import './style.scss';

const defaultPlayersState = (teamId, teams) => {
  const { players } = teams.competitors.find(({ competitor }) => competitor.id === teamId).competitor;

  return players.reduce(
    (acc, { player }) => ({
      ...acc,
      [player.id]: {
        id: player.id,
        rate: 3,
        name: player.name,
        role: player.attributes.role,
        playerNumber: player.attributes.player_number,
        nationality: player.nationality,
        isDramaQueen: false,
      },
    }),
    {}
  );
};

const PlayersRatingForm = ({ teamId, onChange }) => {
  const { teams } = useContext(ApiContext);
  const [playersData, setPlayersData] = useState(defaultPlayersState(teamId, teams));

  useEffect(() => onChange(playersData), [playersData]);

  useEffect(() => setPlayersData(defaultPlayersState(teamId, teams)), [teamId]);

  const onPositionChange = (id, event) => {
    setPlayersData({
      ...playersData,
      [id]: {
        ...playersData[id],
        position: event.target.value,
      },
    });
  };

  const onRateChange = (id, event) => {
    setPlayersData({
      ...playersData,
      [id]: {
        ...playersData[id],
        rate: parseInt(event.target.value),
      },
    });
  };

  const onDramaQueenChange = (id, event) => {
    setPlayersData({
      ...playersData,
      [id]: {
        ...playersData[id],
        isDramaQueen: event.target.checked,
      },
    });
  };

  return (
    <form>
      {Object.keys(playersData).map(playerId => {
        const player = playersData[playerId];

        return (
          <fieldset key={player.id}>
            <span>{player.name}</span>

            <span>{player.role}</span>

            <input type="range" min={1} max={5} value={player.rate} onChange={onRateChange.bind(null, player.id)} />

            <label>
              dramaqueen ?
              <input
                type="checkbox"
                checked={player.isDramaQueen}
                onChange={onDramaQueenChange.bind(null, player.id)}
              />
            </label>
          </fieldset>
        );
      })}
    </form>
  );
};

PlayersRatingForm.propTypes = {
  teamId: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PlayersRatingForm;
