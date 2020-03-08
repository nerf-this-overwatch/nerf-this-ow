import React from 'react';
import { mount, route } from 'navi';
import * as Yup from 'yup';

import WidgetLayout from '../../components/WidgetLayout';
import PodcastCover from '../../components/PodcastCover';
import InputField from '../../components/Form/InputField';
import CheckboxField from '../../components/Form/CheckboxField';
import ImageField from '../../components/Form/ImageField';

import './index.scss';

const initialValues = {
  title: '',
  number: 0,
  guest: '',
  isModeHeadliner: false,
  image: '',
};

const validationSchema = Yup.object({
  title: Yup.string().max(100, 'Ton titre est trop long'),
  number: Yup.number(),
  guest: Yup.string(),
  isModeHeadliner: Yup.boolean(),
  image: Yup.string(),
});

const PodcastCoverWidget = () => (
  <WidgetLayout
    renderWidget={PodcastCover}
    initialValues={initialValues}
    validationSchema={validationSchema}
    name="podcast-cover"
    getName={({ number }) => `podcast-cover-ep-${number}`}
    imageSize={{ width: 500, height: 500 }}
  >
    <InputField label="Titre de l'épisode" name="title" />
    <InputField label="Numéro de l'épisode" name="number" type="number" />
    <InputField label="Invité" name="guest" />
    <CheckboxField label="Mode headline" name="isModeHeadliner" />
    <ImageField label="Image" name="image" />
  </WidgetLayout>
);

export default mount({
  '/': route({
    view: <PodcastCoverWidget />,
  }),
});
