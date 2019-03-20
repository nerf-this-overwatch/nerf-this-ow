import moment from 'moment';

const getStageId = stage => `stage_${stage.id + 1}`;

const reshapeMatch = ({ winner, ...match }) => {
  const areCompetitorsDefined = match.competitors.every(competitor => !!competitor);
  let competitors;

  if (areCompetitorsDefined) {
    competitors = {
      allIds: match.competitors.map(({ id }) => id),
      byId: match.competitors.reduce((acc, competitor, index) => {
        const { id } = competitor;
        return {
          ...acc,
          [id]: {
            id,
            score: match.scores[index].value,
            isWinner: winner ? winner.id === id : undefined,
          },
        };
      }, {}),
    };
  }

  return {
    competitors,
    id: match.id,
    startDate: moment(match.startDate),
    localStartDate: moment(match.startDate).subtract(7, 'h'),
    status: match.status,
    statusReason: match.statusReason,
    games: match.games,
    winner: winner ? winner.id : undefined,
    type: match.tournament.type,
  };
};

const reshapeStage = stage => {
  const { matches } = stage;
  const allMatchesIds = matches.map(match => match.id);

  return {
    name: stage.name,
    matches: {
      allIds: allMatchesIds,
      byId: matches.reduce(
        (matchesById, match) => ({
          ...matchesById,
          [match.id]: reshapeMatch(match),
        }),
        {}
      ),
    },
    id: getStageId(stage),
  };
};

const reshapeSchedule = schedule => {
  const { stages } = schedule.data;
  const allIds = stages.map(stage => getStageId(stage));

  return {
    byId: stages.reduce(
      (stagesById, stage) => ({
        ...stagesById,
        [getStageId(stage)]: reshapeStage(stage),
      }),
      {}
    ),
    allIds,
  };
};

export default async () => {
  try {
    const response = await fetch('https://api.overwatchleague.com/schedule?locale=fr_FR');
    const schedule = await response.json();
    return reshapeSchedule(schedule);
  } catch (err) {
    return console.error('Error', err);
  }
};
