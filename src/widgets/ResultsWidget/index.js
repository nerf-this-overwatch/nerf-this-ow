import React, { useState } from 'react';
import moment from 'moment';

import { useMatchStringFromDate } from '../../hooks/schedule';

const ResultsWidget = () => {
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const [isDisplayingResults, setIsDisplayingResults] = useState(false);
  const matchesString = useMatchStringFromDate(date, isDisplayingResults);
  const onDateChange = e => setDate(e.target.value);
  const onIsDisplayingResults = e => setIsDisplayingResults(e.target.checked);
  const heading = isDisplayingResults ? 'Les résultats de la nuit' : 'Le programme de la nuit';
  const label = `${heading} :\n\n${matchesString}\n#OWL2019`;

  return (
    <div>
      <input type="date" value={date} onChange={onDateChange} />

      <label htmlFor="isDisplayResults">
        Display Results ?{' '}
        <input id="isDisplayResults" type="checkbox" onChange={onIsDisplayingResults} checked={isDisplayingResults} />
      </label>

      {!matchesString && <p>No matches !</p>}
      {!!matchesString && <textarea style={{ width: '400px', height: '150px' }} value={label} readOnly />}
    </div>
  );
};

export default ResultsWidget;
