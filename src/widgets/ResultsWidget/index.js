import React, { useState, useContext } from 'react';
import moment from 'moment';

import ApiContext from '../../containers/ApiContext';
import { useMatchFromDate } from '../../hooks/schedule';
import { strWithEmoji } from '../../utils/emojis';

const ResultsWidget = () => {
  const { teams } = useContext(ApiContext);
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const matches = useMatchFromDate(date);
  const onDateChange = e => setDate(e.target.value);

  const matchList = matches.allIds.reduce((str, matchId) => {
    const match = matches.byId[matchId];
    const startDate = strWithEmoji(match.startDate.format('HH:mm'));

    const matchLabel = match.competitors.allIds.reduce((matchStr, competitorId, index) => {
      const separator = index ? ' vs ' : '';
      const { fullName } = teams.byId[competitorId];
      const lineBreak = index ? '\n' : '';
      return `${matchStr}${separator}${fullName}${lineBreak}`;
    }, `${startDate} `);

    return `${str}${matchLabel}`;
  }, '');

  const label = `Le programme de la nuit :\n\n${matchList}\n#OWL2019`;

  return (
    <div>
      <input type="date" value={date} onChange={onDateChange} />

      {!matches.allIds.length && <p>No matches !</p>}
      {!!matches.allIds.length && <textarea style={{ width: '400px', height: '150px' }} value={label} readOnly />}
    </div>
  );
};

export default ResultsWidget;
