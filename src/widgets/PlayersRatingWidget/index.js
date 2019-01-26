import React, { useState } from 'react';

import { teamIds } from '../../data/teams';
import PlayersRatingForm from '../../components/PlayersRatingForm';
import TeamTheme from '../../components/TeamTheme';
import PlayersRating from '../../components/PlayersRating';
import WidgetLayout, { WidgetLayoutPreview, WidgetLayoutForm } from '../../components/WidgetLayout';

const PlayersRatingWidget = () => {
  const [teamId, setTeamId] = useState(parseInt(Object.values(teamIds)[0]));
  const [players, setPlayers] = useState();

  return (
    <WidgetLayout>
      <WidgetLayoutPreview>
        <TeamTheme teamId={teamId}>
          <PlayersRating teamId={teamId} players={players} />
        </TeamTheme>
      </WidgetLayoutPreview>

      <WidgetLayoutForm>
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
      </WidgetLayoutForm>
    </WidgetLayout>
  );
};

export default PlayersRatingWidget;
