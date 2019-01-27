import React, { useState, useContext } from 'react';

import { teamIds } from '../../data/teams';
import PlayersRatingForm from '../../components/PlayersRatingForm';
import TeamTheme from '../../components/TeamTheme';
import PlayersRating from '../../components/PlayersRating';
import WidgetLayout, { WidgetLayoutPreview, WidgetLayoutForm } from '../../components/WidgetLayout';
import ApiContext from '../../containers/ApiContext';
import TeamSelect from '../../containers/TeamSelect';

const PlayersRatingWidget = () => {
  const { teams } = useContext(ApiContext);
  const [teamId, setTeamId] = useState(teams.allIds[0]);
  const [playersEvaluation, setPlayersEvaluation] = useState({ rates: {}, isXqc: {} });

  return (
    <WidgetLayout>
      <WidgetLayoutPreview>
        <TeamTheme teamId={teamId}>
          <PlayersRating
            teamId={teamId}
            playersRates={playersEvaluation.rates}
            playersIsXqc={playersEvaluation.isXqc}
          />
        </TeamTheme>
      </WidgetLayoutPreview>

      <WidgetLayoutForm onSubmit={() => true}>
        <TeamSelect value={teamId} onChange={setTeamId} />
        <PlayersRatingForm teamId={teamId} onChange={setPlayersEvaluation} />
      </WidgetLayoutForm>
    </WidgetLayout>
  );
};

export default PlayersRatingWidget;
