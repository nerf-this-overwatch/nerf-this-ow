import React from 'react';
import * as R from 'ramda';
import PropTypes from 'prop-types';

import TEAMS from '../../data/teams';
import './index.scss';
import GameResult from '../GameResult';
import GameSchedule from '../GameSchedule';
import Logo from '../Logo';

const getTeam = R.curry((typeCity, game) => {
  const team = R.path([typeCity, 'team'], game);
  return R.path(['byId', team], TEAMS);
});

const isGameDisplayable = R.allPass([getTeam('home'), getTeam('away')]);

const getResultsLinesCount = R.compose(
  Math.ceil,
  R.divide(R.__, 2),
  R.length,
  R.filter(isGameDisplayable)
);

const Schedule = ({ week, games, type, day }) => {
  const isSchedule = type === 'schedule';
  const isResults = type === 'results';

  const date = new Date(day).toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const displayableGames = R.filter(isGameDisplayable, games);

  const layout = R.ifElse(
    R.anyPass([
      R.both(
        R.compose(
          R.lt(6),
          R.length
        ),
        R.always(isResults)
      ),
      R.both(
        R.compose(
          R.lt(5),
          R.length
        ),
        R.always(isSchedule)
      ),
    ]),
    R.always('complex'),
    R.always('simple')
  )(displayableGames);

  return (
    <div className="schedule">
      <svg className="schedule__pattern" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 500">
        <path
          fill="#110942"
          fillRule="evenodd"
          opacity=".107"
          d="M824.797 0l-625.77 500H0v-35.764L543.967 0zM343.155 32.653c9.785 12.022 7.972 29.704-4.051 39.489L0 357.234V261L290.371 12.268c12.024-9.786 29.702-7.973 39.49 4.05l13.294 16.335zM1000 0v60.883L710.054 277.704c-12.018 9.78-29.689 7.966-39.469-4.048l-13.287-16.322c-9.782-12.013-7.969-29.679 4.05-39.458L954.521 0H1000zM569.718 370.716c9.757 12.036 7.95 29.737-4.04 39.534L456.422 500H417l-13.717-22.716c-9.76-12.036-7.95-29.736 4.04-39.534l109.76-87.442c11.99-9.797 29.618-7.982 39.378 4.054l13.257 16.354zM866.399 308.008L645.059 500h23.011l209.631-178.13a8.933 8.933 0 001.29-12.576c-3.122-3.828-8.76-4.403-12.592-1.286z"
        />
      </svg>

      <div className="schedule__content">
        <div className="schedule__head">
          <div className="schedule__head-content">
            <h1 className="schedule__heading">
              {isSchedule ? 'Programme' : 'Résultats'} {date}
            </h1>
            <h2 className="schedule__sub-heading" style={{ margin: 0 }}>
              Overwatch League {!!week && `- Semaine ${week}`}
            </h2>
          </div>
          <Logo className="schedule__nf-logo" />
        </div>

        <div className={`schedule__body schedule__body--${type}-layout schedule__body--${layout}`}>
          {R.map(game => {
            let fontSize = displayableGames.length > 5 ? 14 : 16;

            if (isResults) {
              fontSize = 24 - getResultsLinesCount(games) * 2;
              return <GameResult key={game.id} game={game} style={{ fontSize }} />;
            }

            return (
              <GameSchedule key={game.id} game={game} style={{ fontSize }} isSmall={displayableGames.length > 5} />
            );
          }, displayableGames)}
        </div>
      </div>
    </div>
  );
};
export default Schedule;

Schedule.propTypes = {
  week: PropTypes.number,
  games: PropTypes.arrayOf(PropTypes.object),
  type: PropTypes.oneOf(['schedule', 'results']),
  day: PropTypes.string,
};

Schedule.defaultProps = {
  week: undefined,
  games: [],
  type: 'schedule',
  day: '',
};
