import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import PlayerRating from '../PlayerRating';
import xqcEmote from '../PlayerRating/xqc-emote.png';
import NfLogo from './nf-logo.js';
import Backdrop from './backdrop.js';
import Rating from '../Rating';
import positions from '../../data/positions';
import { getTeamInfo } from '../../data/teams';
import ApiContext from '../../containers/ApiContext';
import { getTeam, sortPlayersByRole } from '../../utils/data/teams';

const PlayersRating = ({ playersRates = {}, teamId }) => {
  const { teams } = useContext(ApiContext);
  const team = getTeam(teams, teamId);

  // to use once the teams api data is reshaped
  const sortedPlayers = sortPlayersByRole(team, playersRates);

  // sort players
  const emptyPosObjPlayers = positions.reduce(
    (acc, pos) => ({
      ...acc,
      [pos]: [],
    }),
    {}
  );

  const posObjPlayers = Object.keys(playersRates).reduce((acc, playerId) => {
    const player = playersRates[playerId];

    return {
      ...acc,
      [player.role]: [...acc[player.role], player].sort((playerA, playerB) => playerB.rate - playerA.rate),
    };
  }, emptyPosObjPlayers);

  const teamInfo = getTeamInfo(teamId);

  const hasDramaQueen = Object.keys(playersRates).some(playerId => playersRates[playerId].isDramaQueen);

  return (
    <div className="players-rating">
      <div className="players-rating__left-col">
        <img className="players-rating__team-logo" src={teamInfo.icons.mainNameColorContrast.svg} />

        <div className="players-rating__legend">
          <div className="rate-legend">
            <Rating rate={5} height={15} />
            <p className="rate-legend__label">Superstar</p>
          </div>

          <div className="rate-legend">
            <Rating rate={4} height={15} />
            <p className="rate-legend__label">Excellent joueur</p>
          </div>

          <div className="rate-legend">
            <Rating rate={3} height={15} />
            <p className="rate-legend__label">Titulaire correct</p>
          </div>

          <div className="rate-legend">
            <Rating rate={2} height={15} />
            <p className="rate-legend__label">Bon remplaçant</p>
          </div>

          <div className="rate-legend">
            <Rating rate={1} height={15} />
            <p className="rate-legend__label">Meeeh</p>
          </div>

          {hasDramaQueen && (
            <div className="rate-legend rate-legend--drama-queen">
              <img src={xqcEmote} />
              <p className="rate-legend__label">
                Potentiel
                <br />
                dramas
              </p>
            </div>
          )}
        </div>

        <div>
          <NfLogo />
        </div>
      </div>

      <div className="players-rating__grid">
        {positions.map(position =>
          posObjPlayers[position].map(player => (
            <PlayerRating
              key={player.id}
              name={player.name}
              playerNumber={player.playerNumber}
              nationality={player.nationality}
              role={player.role}
              rate={player.rate}
              isDramaQueen={player.isDramaQueen}
            />
          ))
        )}
      </div>

      <Backdrop />
    </div>
  );
};
PlayersRating.propTypes = {
  playersRates: PropTypes.object,
};

export default PlayersRating;
