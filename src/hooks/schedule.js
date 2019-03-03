import { useContext } from 'react';
import ApiContext from '../containers/ApiContext';

export const useFlattenSchedule = () => {
  const { schedule } = useContext(ApiContext);

  const emptyData = { byId: {}, allIds: [] };

  if (!schedule) return emptyData;

  const flatten = schedule.allIds.reduce((flattenSchedule, stageId) => {
    const stage = schedule.byId[stageId];

    const weeks = stage.weeks.allIds.reduce((flattenWeeks, weekId) => {
      const week = stage.weeks.byId[weekId];
      return {
        byId: {
          ...flattenWeeks.byId,
          ...week.matches.byId,
        },
        allIds: [...flattenWeeks.allIds, ...week.matches.allIds],
      };
    }, emptyData);

    return {
      byId: {
        ...flattenSchedule.byId,
        ...weeks.byId,
      },
      allIds: [...flattenSchedule.allIds, ...weeks.allIds],
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
