import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';

import PlayersRating from '.';
import { teamIds, getTeamInfo } from '../../data/teams';

const stories = storiesOf('TeamTheme', module);

stories.add('default', () => {
  const team = select('team', teamIds, Object.values(teamIds)[0]);
  const teamInfo = getTeamInfo(team);

  return (
    <PlayersRating teamId={team}>
      <div style={{ padding: '1rem' }}>
        {teamInfo.cityName}{' '}
        <span style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>{teamInfo.teamName}</span>
      </div>
    </PlayersRating>
  );
});
