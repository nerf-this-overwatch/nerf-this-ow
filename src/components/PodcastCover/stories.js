import React from 'react';
import { storiesOf } from '@storybook/react';

import PodcastCover from '.';

const stories = storiesOf('Podcast Cover', module);

stories.add('Default', () => <PodcastCover />);

stories.add('Classic fill', () => (
  <PodcastCover
    number="10"
    title="Cet épisode est fabuleux"
    image="https://www.nbcsports.com/philadelphia/sites/csnphilly/files/styles/article_hero_image/public/2018/07/23/philadelphia-fusion.jpg?itok=ssj3M1oQ"
  />
));

stories.add('With a guest', () => (
  <PodcastCover
    number="10"
    title="Cet épisode est fabuleux"
    guest="Rivenzi"
    image="https://www.nbcsports.com/philadelphia/sites/csnphilly/files/styles/article_hero_image/public/2018/07/23/philadelphia-fusion.jpg?itok=ssj3M1oQ"
  />
));
