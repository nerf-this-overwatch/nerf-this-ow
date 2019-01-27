import React from 'react';

import PodcastCoverWidget from './widgets/PodcastCoverWidget';
import PlayersRatingWidget from './widgets/PlayersRatingWidget';
import { ApiProvider } from './containers/ApiContext';

const App = () => (
  <ApiProvider>
    <PodcastCoverWidget />
    <PlayersRatingWidget />
  </ApiProvider>
);

export default App;
