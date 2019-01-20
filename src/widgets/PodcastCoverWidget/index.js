import React, { useState, useRef } from 'react';

import { useImageGeneration } from '../../hooks/image';
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
  const coverRef = useRef();
  const [generateImage] = useImageGeneration(coverRef, `nerf-this-episode-${number}`, { width: 500, height: 500 });

  return (
    <WidgetLayout>
      <WidgetLayoutPreview>
        <PodcastCover innerRef={coverRef} number={number} guest={guest} title={title} image={image} />
      </WidgetLayoutPreview>

      <WidgetLayoutForm onSubmit={generateImage}>
        <FormGroup value={title} id="title" label="Titre" onChange={e => setTitle(e.target.value)} />
        <FormGroup
          value={number}
          id="episode-numner"
          label="Numéro d'épisode"
          type="number"
          onChange={e => setNumber(e.target.value)}
        />
        <FormGroup value={guest} id="guest" label="Invité" onChange={e => setGuest(e.target.value)} />
        <ImageFormGroup id="image" onChange={url => setImage(url)} />
      </WidgetLayoutForm>
    </WidgetLayout>
  );
};

export default PodcastCoverWidget;
