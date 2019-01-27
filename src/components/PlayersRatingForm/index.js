import React, { useContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import ApiContext from '../../containers/ApiContext';
import { sortPlayersByRole } from '../../utils/data/teams';

import './style.scss';

const defaultState = team =>
  team.players.allIds.reduce(
    (state, playerId) => ({
      ...state,
      rates: {
        ...state.rates,
        [playerId]: 3,
      },
      isXqc: {
        ...state.isXqc,
        [playerId]: false,
      },
    }),
    { rates: {}, isXqc: {} }
  );

const PlayersRatingForm = ({ teamId, onChange }) => {
  const { teams } = useContext(ApiContext);

  const [state, dispatch] = useReducer((currentState, action) => {
    switch (action.type) {
      case 'UPDATE_PLAYER_RATE': {
        return {
          ...currentState,
          rates: {
            ...currentState.rates,
            [action.playerId]: action.rate,
          },
        };
      }

      case 'UPDATE_PLAYER_ISXQC': {
        return {
          ...currentState,
          isXqc: {
            ...currentState.isXqc,
            [action.playerId]: action.isXqc,
          },
        };
      }

      case 'RESET_STATE': {
        return defaultState(teams.byId[teamId]);
      }

      default: {
        return currentState;
      }
    }
  }, defaultState(teams.byId[teamId]));

  useEffect(
    () =>
      dispatch({
        type: 'RESET_STATE',
      }),
    [teamId]
  );

  useEffect(() => onChange(state), [state]);

  const players = sortPlayersByRole(teams.byId[teamId].players);

  return (
    <div>
      {players.allIds.map(playerId => {
        const player = players.byId[playerId];

        return (
          <div className="player-form" key={player.id}>
            <div className="player-form__col player-form__col-info">
              <h4 className="player-form__name">{player.name}</h4>
              <h5 className="player-form__role">{player.role}</h5>
            </div>

            <div className="player-form__col player-form__col-inputs">
              <div>
                <input
                  type="range"
                  min={1}
                  max={5}
                  value={state.rates[playerId]}
                  key={`${playerId}-rate-input`}
                  onChange={e =>
                    dispatch({
                      type: 'UPDATE_PLAYER_RATE',
                      playerId,
                      rate: parseInt(e.target.value),
                    })
                  }
                />
              </div>

              <div>
                <label htmlFor={`is-${player.id}-dramaqueen`}>
                  dramaqueen ?
                  <input
                    type="checkbox"
                    id={`is-${player.id}-dramaqueen`}
                    checked={state.isXqc[playerId]}
                    onChange={e =>
                      dispatch({
                        type: 'UPDATE_PLAYER_ISXQC',
                        playerId,
                        isXqc: e.target.checked,
                      })
                    }
                  />
                </label>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

PlayersRatingForm.propTypes = {
  teamId: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PlayersRatingForm;
