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
