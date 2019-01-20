import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ImageFormGroup from '.';

const stories = storiesOf('ImageFormGroup', module);

stories.add('Default', () => <ImageFormGroup id="example-1" onChange={action('onChange')} />);
