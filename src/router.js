import { mount, lazy } from 'navi';
import React, { Suspense } from 'react';
import { Router as RouterWrapper, View } from 'react-navi';

import Header from './views/base/Header';
import { ApiProvider } from './containers/ApiContext';

const routes = mount({
  '/': lazy(() => import('./views/ResultsWidget')),
  '/podcast-cover-results': lazy(() => import('./views/PodcastCoverWidget')),
  '/players-rating': lazy(() => import('./views/PlayersRatingWidget')),
});

const Router = () => (
  <RouterWrapper basename={process.env.REACT_APP_ROUTER_BASENAME} routes={routes}>
    <Header />

    <Suspense fallback={null}>
      <ApiProvider>
        <View />
      </ApiProvider>
    </Suspense>
  </RouterWrapper>
);

export default Router;
