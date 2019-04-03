import React from 'react';
import { mount, route } from 'navi';

const Home = () => <div>hello world !</div>;

export default mount({
  '/': route({
    view: <Home />,
  }),
});
