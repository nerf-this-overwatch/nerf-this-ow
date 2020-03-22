import React from 'react';
import { mount, route } from 'navi';
import * as Yup from 'yup';
import { FieldArray, useFormikContext } from 'formik';

import WidgetLayout from '../../components/WidgetLayout';
import Schedule from '../../components/Schedule';
import InputField from '../../components/Form/InputField';
import SelectField from '../../components/Form/SelectField';
// import GamesFieldArray, { getInitialGame } from '../../components/Form/GamesFieldArray';
import GamesFieldArray from '../../components/Form/GamesFieldArray';

import './index.scss';

const initialValues = {
  week: 3,
  type: 'schedule',
  // games: [getInitialGame()],
  games: [
    {
      id: 'e565275d-adce-4186-9fb5-f2560c5ffe48',
      home: { team: 'TOR', score: 1 },
      away: { team: 'FLO', score: 3 },
      time: '21:00',
    },
    {
      id: 'ba175963-41b0-44c3-ba77-21012bdf0152',
      home: { team: 'PAR', score: 0 },
      away: { team: 'HOU', score: 3 },
      time: '23:00',
    },
    {
      id: '673b4f25-6939-4eb1-a026-ad736f2f3eb4',
      home: { team: 'BOS', score: 1 },
      away: { team: 'WAS', score: 3 },
      time: '01:00',
    },
    {
      id: '43da67e7-e864-4fda-9857-73fdf5183bbf',
      home: { team: 'PAR', score: '' },
      away: { team: 'PHI', score: '' },
      time: '20:00',
    },
    {
      id: '5712c77f-6eed-42b9-9194-9fbeee1bf925',
      home: { team: 'NYE', score: '' },
      away: { team: 'WAS', score: '' },
      time: '22:00',
    },
    {
      id: 'da6a0e51-a8b0-441a-b969-db3c70e92293',
      home: { team: 'BOS', score: '' },
      away: { team: '', score: '' },
      time: '00:00',
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
    name="schedule"
  >
    <InputField label="Semaine" name="week" type="number" />
    <InputField label="Jour" name="day" type="date" />

    <SelectField label="type" name="type">
      <option value="schedule">Calendrier</option>
      <option value="results">Résultats</option>
    </SelectField>

    <ScheduleWidgetGameFieldArray />
  </WidgetLayout>
);

const ScheduleWidgetGameFieldArray = () => {
  const { values } = useFormikContext();
  return (
    <div className="field-array__grid">
      <FieldArray name="games" render={helpers => <GamesFieldArray type={values.type} {...helpers} />} />
    </div>
  );
};

export default mount({
  '/': route({
    view: <ScheduleWidget />,
  }),
});
