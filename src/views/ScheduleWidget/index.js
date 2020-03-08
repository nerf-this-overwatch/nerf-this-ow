import React from 'react';
import { mount, route } from 'navi';
import * as Yup from 'yup';
import { FieldArray } from 'formik';
import * as R from 'ramda';

import WidgetLayout from '../../components/WidgetLayout';
import Schedule from '../../components/Schedule';
import InputField from '../../components/Form/InputField';
// import GamesFieldArray, { getInitialGame } from '../../components/Form/GamesFieldArray';
import GamesFieldArray from '../../components/Form/GamesFieldArray';

import './index.scss';

const initialValues = {
  week: 3,
  // games: [getInitialGame()],
  games: [
    {
      id: 'e565275d-adce-4186-9fb5-f2560c5ffe48',
      home: { team: 'TOR', score: 1 },
      away: { team: 'FLO', score: 3 },
      date: '2020-03-07T21:00',
    },
    {
      id: 'ba175963-41b0-44c3-ba77-21012bdf0152',
      home: { team: 'PAR', score: 0 },
      away: { team: 'HOU', score: 3 },
      date: '2020-03-07T23:00',
    },
    {
      id: '673b4f25-6939-4eb1-a026-ad736f2f3eb4',
      home: { team: 'BOS', score: 1 },
      away: { team: 'WAS', score: 3 },
      date: '2020-03-08T01:00',
    },
    {
      id: '43da67e7-e864-4fda-9857-73fdf5183bbf',
      home: { team: 'PAR', score: '' },
      away: { team: 'PHI', score: '' },
      date: '2020-03-08T20:00',
    },
    {
      id: '5712c77f-6eed-42b9-9194-9fbeee1bf925',
      home: { team: 'NYE', score: '' },
      away: { team: 'WAS', score: '' },
      date: '2020-03-08T22:00',
    },
    {
      id: 'da6a0e51-a8b0-441a-b969-db3c70e92293',
      home: { team: 'BOS', score: '' },
      away: { team: '', score: '' },
      date: '2020-03-09T00:00',
    },
  ],
};

const validationSchema = Yup.object({
  week: Yup.number(),
});

const ScheduleWidget = () => (
  <WidgetLayout
    renderWidget={Schedule}
    initialValues={initialValues}
    validationSchema={validationSchema}
    getName={({ week }) => `schedule-week-${week}`}
    imageSize={{ width: 1000, height: 500 }}
  >
    <InputField label="Semaine" name="week" type="number" />
    <FieldArray name="games" component={GamesFieldArray} />
  </WidgetLayout>
);

export default mount({
  '/': route({
    view: <ScheduleWidget />,
  }),
});
