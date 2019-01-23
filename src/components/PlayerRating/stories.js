import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';

import PlayerRating from '.';
import { teamIds } from '../../data/teams';
import TeamTheme from '../TeamTheme';

const stories = storiesOf('PlayerRating', module);

stories.add('default', () => {
  const team = select('team', teamIds, Object.values(teamIds)[0]);

  return (
    <TeamTheme teamId={team}>
      <div style={{ padding: '1rem', backgroundColor: 'var(--bg-color)', color: 'var(--color)' }}>
        <PlayerRating playerNumber={99} name="Krusher" position="Main Tank" rate={4} nationality="GB" />
      </div>
    </TeamTheme>
  );
});
