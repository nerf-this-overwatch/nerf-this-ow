import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '.';

const stories = storiesOf('Button', module);

stories.add('themes', () => (
  <React.Fragment>
    <Button theme="default">default</Button>
    <Button theme="primary" style={{ marginLeft: '1em' }}>
      primary
    </Button>
  </React.Fragment>
));
