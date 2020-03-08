import React from 'react';
import * as R from 'ramda';
import PropTypes from 'prop-types';

import TEAMS from '../../data/teams';
import './index.scss';

const getTeam = R.curry((typeCity, game) => {
  const team = R.path([typeCity, 'team'], game);
  return R.path(['byId', team], TEAMS);
});

const renderDoneGame = game => {
  const homeTeam = getTeam('home', game);
  const awayTeam = getTeam('away', game);

  return (
    <li key={game.id}>
      {homeTeam.city} {homeTeam.name} {game.home.score}-{game.away.score} {awayTeam.city} {awayTeam.name}
    </li>
  );
};

const renderPreviewGame = game => {
  const homeTeam = getTeam('home', game);
  const awayTeam = getTeam('away', game);

  return (
    <li key={game.id}>
      {homeTeam.city} {homeTeam.name} - {game.date} - {awayTeam.city} {awayTeam.name}
    </li>
  );
};

const isGameDoneDisplay = R.allPass([
  getTeam('home'),
  getTeam('away'),
  R.compose(
    R.not,
    R.isEmpty,
    R.path(['home', 'score'])
  ),
  R.compose(
    R.not,
    R.isEmpty,
    R.path(['away', 'score'])
  ),
]);

const isGamePreviewDisplay = R.allPass([
  getTeam('home'),
  getTeam('away'),
  R.compose(
    R.not,
    R.isEmpty,
    R.prop('date')
  ),
]);

const renderGame = R.cond([
  [isGameDoneDisplay, renderDoneGame],
  [isGamePreviewDisplay, renderPreviewGame],
  [(R.T, R.always(null))],
]);

const Schedule = ({ week, games }) => (
  <div className="schedule">
    {!!week && <h2 style={{ margin: 0 }}>Semaine {week}</h2>}
    <h3 style={{ fontSize: 20, color: 'red', fontWeight: 900 }}>DO NOT SHARE ON TWITTER</h3>
    <ul>{R.map(renderGame, games)}</ul>
  </div>
);
export default Schedule;

Schedule.propTypes = {
  week: PropTypes.number,
  games: PropTypes.arrayOf(PropTypes.object),
};

Schedule.defaultProps = {
  week: undefined,
  games: [],
};
