import React from 'react';
import { select } from '@storybook/addon-knobs';

import { teamIds } from '../src/mocks';

import TeamTheme from '../src/components/TeamTheme';
import { ApiProvider } from '../src/containers/ApiContext';

export const teamThemeDecorator = storyFn => {
  const team = select('team', teamIds, Object.values(teamIds)[0]);
  return (
    <ApiProvider>
      <TeamTheme teamId={team}>
        <div style={{
          padding: '1.5rem',
          backgroundColor: 'var(--bg-color)',
          color: 'var(--color)',
          width: '100vw',
          height: '100vh'
        }}>
          {storyFn()}
        </div>
      </TeamTheme>
    </ApiProvider>
  );
};
