import { configure, addDecorator } from '@storybook/react';
import { withBackgrounds } from '@storybook/addon-backgrounds';

import '../src/style/font.scss';
import '../src/style/base.scss';

// Add decorators

addDecorator(
  withBackgrounds([
    { name: 'white', value: '#ffffff', default: true },
    { name: 'black', value: '#000000', default: true },
    { name: 'twitter', value: '#00aced' },
    { name: 'facebook', value: '#3b5998' },
  ])
);


// Load dynamically stories

const req = require.context('../src/', true, /\**\/stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}
configure(loadStories, module);
