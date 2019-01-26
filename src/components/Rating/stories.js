import React from 'react';
import { storiesOf } from '@storybook/react';

import Rating from '.';

const stories = storiesOf('Rating', module);

stories.add('Default', () => <Rating rate={3} />);
