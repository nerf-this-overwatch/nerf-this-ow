import React from 'react';
import * as R from 'ramda';

import TEAMS from '../../data/teams';
import './style.scss';

const getTeam = R.curry((typeCity, game) => {
  const team = R.path([typeCity, 'team'], game);
  return R.path(['byId', team], TEAMS);
});

const GameSchedule = ({ game, style, isSmall = false }) => {
  const homeTeam = getTeam('home', game);
  const awayTeam = getTeam('away', game);
  const lineRef = React.useRef();
  const [squareSize, setSquareSize] = React.useState(0);

  React.useLayoutEffect(
    () => {
      if (lineRef.current) {
        const height = lineRef.current.clientHeight;
        setSquareSize(height + 1);
      }
    },
    [style]
  );

  return (
    <div className="game-schedule" style={style} ref={lineRef}>
      <div className="game-schedule__time">{game.time}</div>
      <div className="game-schedule__team game-schedule__team--home" style={{ paddingLeft: squareSize }}>
        {!isSmall && <span className="game-schedule__team-city">{homeTeam.city}</span>}
        <span className="game-schedule__team-name">{homeTeam.name}</span>

        <div
          className="game-schedule__team-logo-wrapper"
          style={{ backgroundColor: homeTeam.bgColor, fontSize: squareSize }}
        >
          <img className="game-result__team-logo" src={`/team-logos/${homeTeam.id}.svg`} alt="" />
        </div>
      </div>
      <div className="game-schedule__team-separator">vs</div>
      <div className="game-schedule__team game-schedule__team--away" style={{ paddingRight: squareSize }}>
        <span className="game-schedule__team-name">{awayTeam.name}</span>
        {!isSmall && <span className="game-schedule__team-city">{awayTeam.city}</span>}

        <div
          className="game-schedule__team-logo-wrapper"
          style={{ backgroundColor: awayTeam.bgColor, fontSize: squareSize }}
        >
          <img className="game-result__team-logo" src={`/team-logos/${awayTeam.id}.svg`} alt="" />
        </div>
      </div>
    </div>
  );
};

export default GameSchedule;
