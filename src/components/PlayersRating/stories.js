import React, { useContext } from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';

import { ApiProvider } from '../../containers/ApiContext';
import PlayersRating from '.';
import TeamTheme from '../TeamTheme';
import { teamIds } from '../../data/teams';

const stories = storiesOf('PlayersRating', module);

stories.addDecorator(storyFn => <ApiProvider>{storyFn()}</ApiProvider>);

stories.add('default', () => {
  const team = parseInt(select('team', teamIds, Object.values(teamIds)[0]));

  return (
    <TeamTheme teamId={team}>
      <div style={{ padding: '1rem', backgroundColor: 'var(--bg-color)', color: 'var(--color)' }}>
        <PlayersRating teamId={team} />
      </div>
    </TeamTheme>
  );
});
