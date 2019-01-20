import React from 'react';

import './style.scss';

const MatchLine = () => (
  <div className="match-line">
    <div className="match-line__team match-line__team-away">
      <img
        className="match-line__team-logo"
        src="https://bnetcmsus-a.akamaihd.net/cms/template_resource/M1KNTZW8SGHZ1507822883041.svg"
      />
      <span className="match-line__team-score">3</span>
    </div>

    <span>final</span>

    <div className="match-line__team match-line__team-home">
      <img
        className="match-line__team-logo"
        src="https://bnetcmsus-a.akamaihd.net/cms/template_resource/0SY7LHKHV86R1507822883113.svg"
      />
      <span className="match-line__team-score">1</span>
    </div>
  </div>
);

export default MatchLine;
