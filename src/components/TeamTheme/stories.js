import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';

import TeamTheme from '.';
import { teamIds } from '../../mocks';
import { ApiProvider } from '../../containers/ApiContext';

const stories = storiesOf('TeamTheme', module).addDecorator(storyFn => <ApiProvider>{storyFn()}</ApiProvider>);

stories.add('default', () => {
  const team = select('team', teamIds, Object.values(teamIds)[0]);
  const teamName = Object.keys(teamIds).find(name => teamIds[name] === team);

  return (
    <TeamTheme teamId={team}>
      <div style={{ padding: '1rem', backgroundColor: 'var(--bg-color)', color: 'var(--color)' }}>
        {teamName}
        <span style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>{teamName}</span>
      </div>
    </TeamTheme>
  );
});
