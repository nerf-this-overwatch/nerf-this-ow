import React from 'react';
import { storiesOf } from '@storybook/react';

import Image from '.';

const stories = storiesOf('Image', module);

const landscapeImg =
  'https://images2.minutemediacdn.com/image/upload/c_scale,w_912,h_516,c_fill,g_auto/shape/cover/sport/5b2165ed7134f695ba000002.jpeg';

const portraitImg = 'https://66.media.tumblr.com/5c40e80011135c94752a1d0f7bcb5b63/tumblr_p3nklendGC1rhn8j0o1_500.jpg';

const squareWrapper = { width: 400, height: 400 };
const landscapeWrapper = { width: 500, height: 200 };
const portraitWrapper = { width: 200, height: 500 };

stories.add('Landscape img in square wrapper', () => <Image src={landscapeImg} size={squareWrapper} />);
stories.add('Portrait img in square wrapper', () => <Image src={portraitImg} size={squareWrapper} />);
stories.add('Landscape img in landscape wrapper', () => <Image src={landscapeImg} size={landscapeWrapper} />);
stories.add('Portrait img in landscape wrapper', () => <Image src={portraitImg} size={landscapeWrapper} />);
stories.add('Landscape img in portrait wrapper', () => <Image src={landscapeImg} size={portraitWrapper} />);
stories.add('Portrait img in portrait wrapper', () => <Image src={portraitImg} size={portraitWrapper} />);
