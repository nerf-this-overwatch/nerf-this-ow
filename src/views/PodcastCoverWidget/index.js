import React, { useState } from 'react';
import { mount, route } from 'navi';

import FormGroup from '../../components/FormGroup';
import ImageFormGroup from '../../components/ImageFormGroup';
import PodcastCover from '../../components/PodcastCover';
import WidgetLayout, { WidgetLayoutPreview, WidgetLayoutForm } from '../../components/WidgetLayout';
import './index.scss';

const PodcastCoverWidget = () => {
  const [title, setTitle] = useState('');
  const [number, setNumber] = useState('0');
  const [guest, setGuest] = useState('');
  const [image, setImage] = useState();
  const [isModeHeadliner, setIsModeHeadliner] = useState(false);

  return (
    <WidgetLayout imageName={`nerf-this-episode-${number}`} imageSize={{ width: 500, height: 500 }}>
      <WidgetLayoutPreview>
        <PodcastCover number={number} guest={guest} title={title} image={image} isModeHeadliner={isModeHeadliner} />
      </WidgetLayoutPreview>

      <WidgetLayoutForm>
        <FormGroup value={title} id="title" label="Titre" onChange={e => setTitle(e.target.value)} />
        <FormGroup
          value={number}
          id="episode-numner"
          label="Numéro d'épisode"
          type="number"
          onChange={e => setNumber(e.target.value)}
        />
        <FormGroup value={guest} id="guest" label="Invité" onChange={e => setGuest(e.target.value)} />

        <FormGroup
          value={isModeHeadliner}
          type="checkbox"
          id="isModeHeadliner"
          label="Mode Headliner"
          onChange={e => setIsModeHeadliner(e.target.checked)}
        />

        <ImageFormGroup id="image" onChange={url => setImage(url)} />
      </WidgetLayoutForm>
    </WidgetLayout>
  );
};

export default mount({
  '/': route({
    view: <PodcastCoverWidget />,
  }),
});