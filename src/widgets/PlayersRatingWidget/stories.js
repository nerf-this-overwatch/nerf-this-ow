import React from 'react';
import { storiesOf } from '@storybook/react';

import { ApiProvider } from '../../containers/ApiContext';
import PlayersRatingWidget from '.';

const stories = storiesOf('PlayersRatingWidget', module);

stories.addDecorator(storyFn => <ApiProvider>{storyFn()}</ApiProvider>);

stories.add('default', () => <PlayersRatingWidget />);
