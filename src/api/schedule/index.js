const getStageId = stage => `stage_${stage.id + 1}`;
const getWeekId = (stage, week) => `${getStageId(stage)}_week_${week.id + 1}`;

const reshapeMatch = ({ competitors, winner, ...match }) => ({
  competitors: {
    allIds: competitors.map(({ id }) => id),
    byId: competitors.reduce((acc, competitor, index) => {
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
  },
  startDate: match.startDate,
  status: match.status,
  statusReason: match.statusReason,
  games: match.games,
  winner: winner ? winner.id : undefined,
});

const reshapeWeek = week => {
  const { matches } = week;
  const allMatchesIds = matches.map(match => match.id);

  return {
    name: week.name,
    matches: {
      allIds: allMatchesIds,
      byId: matches.reduce(
        (stagesById, match) => ({
          ...stagesById,
          [match.id]: reshapeMatch(match),
        }),
        {}
      ),
    },
  };
};

const reshapeStage = stage => {
  const { weeks } = stage;
  const allWeeksIds = weeks.map(week => getWeekId(stage, week));

  return {
    name: stage.name,
    weeks: {
      allIds: allWeeksIds,
      byId: weeks.reduce(
        (stagesById, week) => ({
          ...stagesById,
          [getWeekId(stage, week)]: reshapeWeek(week),
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
    const reshapedSchedule = reshapeSchedule(schedule);
    return reshapedSchedule;
  } catch (err) {
    return console.error('Error', err);
  }
};
