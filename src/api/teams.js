import PlayersCustomRoles from '../data/players/custom-role';

const addCustomPlayersRoles = teams => {
  const competitors = teams.competitors.map(({ competitor, ...team }) => ({
    ...team,
    competitor: {
      ...competitor,
      players: competitor.players.map(player => ({
        ...player,
        player: {
          ...player.player,
          attributes: {
            ...player.player.attributes,
            role: PlayersCustomRoles[player.player.id] || player.player.attributes.role,
          },
        },
      })),
    },
  }));

  return {
    ...teams,
    competitors,
  };
};

export default async () => {
  const response = await fetch('https://api.overwatchleague.com/teams');
  const teams = await response.json();
  return addCustomPlayersRoles(teams);
};
