import React from 'react';
import { storiesOf } from '@storybook/react';

import Results from '.';

const stories = storiesOf('Results', module);

stories.add('Default', () => <Results />);

stories.add('Classic fill', () => (
  <Results image="https://www.nbcsports.com/philadelphia/sites/csnphilly/files/styles/article_hero_image/public/2018/07/23/philadelphia-fusion.jpg?itok=ssj3M1oQ" />
));
