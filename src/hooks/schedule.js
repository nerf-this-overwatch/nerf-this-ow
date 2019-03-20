import { useContext } from 'react';
import ApiContext from '../containers/ApiContext';

export const useFlattenSchedule = () => {
  const { schedule } = useContext(ApiContext);

  const emptyData = { byId: {}, allIds: [] };

  if (!schedule) return emptyData;

  const flatten = schedule.allIds.reduce((flattenSchedule, stageId) => {
    const stage = schedule.byId[stageId];
    return {
      byId: {
        ...flattenSchedule.byId,
        ...stage.matches.byId,
      },
      allIds: [...flattenSchedule.allIds, ...stage.matches.allIds],
    };
  }, emptyData);

  return flatten;
};

export const useMatchFromDate = date => {
  const flattenSchedule = useFlattenSchedule();

  const sorted = flattenSchedule.allIds.reduce(
    (allMatches, matchId) => {
      const match = flattenSchedule.byId[matchId];
      const matchDate = match.localStartDate.format('YYYY-MM-DD');

      if (matchDate !== date) return allMatches;

      return {
        byId: {
          ...allMatches.byId,
          [matchId]: match,
        },
        allIds: [...allMatches.allIds, matchId],
      };
    },
    { byId: {}, allIds: [] }
  );

  return sorted;
};

export const useMatchStringFromDate = (date, askToDisplayResults = false) => {
  const { teams } = useContext(ApiContext);
  const matches = useMatchFromDate(date);

  const string = matches.allIds.reduce((str, matchId) => {
    const match = matches.byId[matchId];
    if (!match.competitors) return str;

    const isDisplayResults = askToDisplayResults && match.status === 'CONCLUDED';
    const startDate = match.startDate.format('HH:mm');

    const matchLabel = match.competitors.allIds.reduce(
      (matchStr, competitorId, index) => {
        const { fullName, teamName } = teams.byId[competitorId];
        const separatorToDisplay = isDisplayResults ? ' - ' : ' vs ';
        const separator = index ? separatorToDisplay : '';

        let title = fullName;

        if (isDisplayResults) {
          const { score } = match.competitors.byId[competitorId];
          title = teamName;
          title = index ? `${score} ${teamName}` : `${teamName} ${score}`;
        }

        const lineBreak = index ? '\n' : '';
        return `${matchStr}${separator}${title}${lineBreak}`;
      },
      isDisplayResults ? '' : `${startDate} `
    );

    return `${str}${matchLabel}`;
  }, '');

  return string !== '' ? string : undefined;
};
