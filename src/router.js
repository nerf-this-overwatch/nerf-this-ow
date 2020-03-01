import { mount, lazy } from 'navi';
import React, { Suspense } from 'react';
import { Router as RouterWrapper, View } from 'react-navi';

import Header from './views/base/Header';

const routes = mount({
  '/': lazy(() => import('./views/PodcastCoverWidget')),
});

const Router = () => (
  <RouterWrapper basename={process.env.REACT_APP_ROUTER_BASENAME} routes={routes}>
    <Header />

    <Suspense fallback={null}>
      <View />
    </Suspense>
  </RouterWrapper>
);

export default Router;
