import React from 'react';
import * as R from 'ramda';

import TEAMS from '../../data/teams';
import './style.scss';

const getTeam = R.curry((typeCity, game) => {
  const team = R.path([typeCity, 'team'], game);
  return R.path(['byId', team], TEAMS);
});

const GameResult = ({ game, style, ...props }) => {
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
    <div {...props} className="game-result" style={style}>
      <div className="game-result__team" ref={lineRef} style={{ paddingLeft: squareSize }}>
        <div
          className="game-result__team-logo-wrapper"
          style={{ backgroundColor: homeTeam.bgColor, fontSize: squareSize }}
        >
          <img className="game-result__team-logo" src={`/team-logos/${homeTeam.id}.svg`} alt="" />
        </div>

        <div className="game-result__team-title">
          {homeTeam.city}
          <span className="game-result__team-name">{homeTeam.name}</span>
        </div>

        <div className={`game-result__team-score ${!game.home.score && 'game-result__team-score--invisible'}`}>
          {game.home.score || 0}
        </div>
      </div>

      <div className="game-result__team" style={{ paddingLeft: squareSize }}>
        <div
          className="game-result__team-logo-wrapper"
          style={{ backgroundColor: awayTeam.bgColor, fontSize: squareSize }}
        >
          <img className="game-result__team-logo" src={`/team-logos/${awayTeam.id}.svg`} alt="" />
        </div>

        <div className="game-result__team-title">
          {awayTeam.city}
          <span className="game-result__team-name">{awayTeam.name}</span>
        </div>

        <div className={`game-result__team-score ${!game.away.score && 'game-result__team-score--invisible'}`}>
          {game.away.score || 0}
        </div>
      </div>
    </div>
  );
};

export default GameResult;
