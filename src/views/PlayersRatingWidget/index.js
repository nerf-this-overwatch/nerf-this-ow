import React, { useState, useContext } from 'react';
import { mount, route } from 'navi';

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
    <WidgetLayout imageName={`rating ${teams.byId[teamId].fullName}`} imageSize={{ width: 1000, height: 500 }}>
      <WidgetLayoutPreview>
        <TeamTheme teamId={teamId}>
          <PlayersRating
            teamId={teamId}
            playersRates={playersEvaluation.rates}
            playersIsXqc={playersEvaluation.isXqc}
          />
        </TeamTheme>
      </WidgetLayoutPreview>

      <WidgetLayoutForm>
        <TeamSelect value={teamId} onChange={setTeamId} />
        <PlayersRatingForm key={teamId} teamId={teamId} onChange={setPlayersEvaluation} />
      </WidgetLayoutForm>
    </WidgetLayout>
  );
};

export default mount({
  '/': route({
    view: <PlayersRatingWidget />,
  }),
});
