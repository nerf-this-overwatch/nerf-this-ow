import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { ApiProvider } from '../../containers/ApiContext';
import PlayersRatingForm from '.';
import { teamIds } from '../../data/teams';

const stories = storiesOf('PlayersRatingForm', module);

stories.addDecorator(storyFn => <ApiProvider>{storyFn()}</ApiProvider>);

stories.add('default', () => {
  const team = parseInt(select('team', teamIds, Object.values(teamIds)[0]));

  return <PlayersRatingForm teamId={team} onChange={action('onChange')} />;
});
