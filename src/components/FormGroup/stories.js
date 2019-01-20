import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import FormGroup from '.';

const stories = storiesOf('FormGroup', module);

stories.add('Without value', () => (
  <FormGroup id="example-1" label="Label" onChange={action('onChange')} placeholder="placeholder" />
));
stories.add('With value', () => <FormGroup id="example-2" label="Label" onChange={action('onChange')} value="value" />);
