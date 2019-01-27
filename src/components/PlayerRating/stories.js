import React from 'react';
import { storiesOf } from '@storybook/react';

import PlayerRating from '.';
import { player } from '../../mocks';
import { teamThemeDecorator } from '../../../.storybook/decorators';

const stories = storiesOf('PlayerRating', module).addDecorator(teamThemeDecorator);
stories.add('default', () => <PlayerRating player={player} rate={4} isXqc />);
