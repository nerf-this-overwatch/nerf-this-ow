import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ApiContext from '../../containers/ApiContext';

import './style.scss';
import positions from '../../data/positions';

const defaultPlayersState = (teamId, teams) => {
  const { players } = teams.competitors.find(({ competitor }) => competitor.id === teamId).competitor;

  return players.reduce(
    (acc, { player }) => ({
      ...acc,
      [player.id]: {
        id: player.id,
        position: positions[0],
        rate: 3,
        name: player.name,
        playerNumber: player.attributes.player_number,
        nationality: player.nationality,
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

  return (
    <form>
      {Object.keys(playersData).map(playerId => {
        const player = playersData[playerId];

        return (
          <fieldset key={player.id}>
            <span>{player.name}</span>

            <select value={player.position} onChange={onPositionChange.bind(null, player.id)}>
              {positions.map(position => (
                <option key={position} value={position}>
                  {position}
                </option>
              ))}
            </select>

            <input type="range" min={1} max={5} value={player.rate} onChange={onRateChange.bind(null, player.id)} />
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
