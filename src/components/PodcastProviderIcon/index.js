import React from 'react';
import PropTypes from 'prop-types';

import BreakerIcon from './breaker';
import CastboxIcon from './castbox';
import CastroIcon from './castro';
import GooglePodcastsIcon from './googlepodcasts';
import ItunesIcon from './itunes';
import OvercastIcon from './overcast';
import PocketcastIcon from './pocketcasts';

const icons = {
  breaker: BreakerIcon,
  castbox: CastboxIcon,
  castro: CastroIcon,
  google: GooglePodcastsIcon,
  itunes: ItunesIcon,
  overcast: OvercastIcon,
  pocketcasts: PocketcastIcon,
};

const PodcastProviderIcon = ({ provider, size }) => {
  const Icon = icons[provider];
  return <Icon size={size} />;
};

PodcastProviderIcon.propTypes = {
  size: PropTypes.number,
  provider: PropTypes.oneOf(Object.keys(icons)).isRequired,
};

PodcastProviderIcon.defaultProps = {
  size: 40,
};

export default PodcastProviderIcon;
