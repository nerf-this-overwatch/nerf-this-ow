import React from 'react';

import PodcastCoverWidget from './widgets/PodcastCoverWidget';
import PlayersRatingWidget from './widgets/PlayersRatingWidget';
import ResultsWidget from './widgets/ResultsWidget';
import { ApiProvider } from './containers/ApiContext';

const App = () => (
  <ApiProvider>
    <ResultsWidget />
    <PodcastCoverWidget />
    <PlayersRatingWidget />
  </ApiProvider>
);

export default App;
