import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import PlayerRating from '../PlayerRating';
import xqcEmote from '../PlayerRating/xqc-emote.png';
import NfLogo from './nf-logo.js';
import Backdrop from './backdrop.js';
import Rating from '../Rating';
import ApiContext from '../../containers/ApiContext';
import { sortPlayersByRole } from '../../utils/data/teams';

const PlayersRating = ({ playersRates, playersIsXqc, teamId }) => {
  const { teams } = useContext(ApiContext);
  const team = teams.byId[teamId];

  // to use once the teams api data is reshaped
  const sortedPlayers = sortPlayersByRole(team.players, playersRates);

  const hasDramaQueen = Object.keys(playersIsXqc).some(playerId => playersIsXqc[playerId]);

  return (
    <div className="players-rating">
      <div className="players-rating__left-col">
        {/* <img className="players-rating__team-logo" src={team.icons.mainNameColorContrast.svg} /> */}
        <img className="players-rating__team-logo" alt={team.name} src={team.icons.mainName} />

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
              <img src={xqcEmote} alt="Is a drama queen" />
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
        {sortedPlayers.allIds.map(playerId => {
          const player = sortedPlayers.byId[playerId];
          return (
            <PlayerRating
              key={player.id}
              player={player}
              rate={playersRates[player.id]}
              isXqc={playersIsXqc[player.id]}
            />
          );
        })}
      </div>

      <Backdrop />
    </div>
  );
};
PlayersRating.propTypes = {
  playersRates: PropTypes.object.isRequired,
  playersIsXqc: PropTypes.object.isRequired,
  teamId: PropTypes.number.isRequired,
};

export default PlayersRating;
