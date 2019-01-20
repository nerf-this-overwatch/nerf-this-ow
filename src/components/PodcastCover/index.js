import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import Icon from './icon';
import Image from '../Image';

const PodcastCover = ({ number, guest, title, image, innerRef, ...props }) => (
  <div className="podcast-cover" ref={innerRef} {...props}>
    <div className="podcast-cover__content">
      <h1 className="podcast-cover__heading">
        Nerf This
        <span className="podcast-cover__number-wrapper">
          <span className="podcast-cover__number">#{number}</span>
          <Icon className="podcast-cover__icon" width="127" height="109" />
        </span>
      </h1>

      {!!guest && (
        <h3 className="podcast-cover__guest">
          Avec <span className="podcast-cover__guest-name">{guest}</span>
        </h3>
      )}

      {!!title && <h2 className="podcast-cover__title">{title}</h2>}
    </div>

    <Image
      src={image}
      size={{
        width: 500,
        height: 500,
      }}
    />
  </div>
);

PodcastCover.propTypes = {
  innerRef: PropTypes.object,
  number: PropTypes.string,
  guest: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
};

PodcastCover.defaultProps = {
  innerRef: undefined,
  number: '0',
  guest: undefined,
  title: '',
  image: undefined,
};

export default PodcastCover;
