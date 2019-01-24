import React, { useState } from 'react';

import { teamIds } from '../../data/teams';
import PlayersRatingForm from '../PlayersRatingForm';
import TeamTheme from '../TeamTheme';
import PlayersRating from '../PlayersRating';

const PlayersRatingWidget = () => {
  const [teamId, setTeamId] = useState(parseInt(Object.values(teamIds)[0]));
  const [players, setPlayers] = useState();

  return (
    <div>
      <TeamTheme teamId={teamId}>
        <div style={{ padding: '1rem', backgroundColor: 'var(--bg-color)', color: 'var(--color)' }}>
          <PlayersRating players={players} />
        </div>
      </TeamTheme>

      <div>
        <select value={teamId} onChange={e => setTeamId(parseInt(e.target.value))}>
          {Object.keys(teamIds).map(name => {
            const id = teamIds[name];
            return (
              <option key={id} value={id}>
                {name}
              </option>
            );
          })}
        </select>

        <PlayersRatingForm teamId={teamId} onChange={setPlayers} />
      </div>
    </div>
  );
};

export default PlayersRatingWidget;
