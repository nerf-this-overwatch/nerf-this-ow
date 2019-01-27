import { path } from 'ramda';
import positions from '../../data/positions';

/**
 * Returns a single team object from the API teams object
 * @param {Object} teams - The teams object returned by the API
 * @param {string|number} teamId - The id of the team wanted
 */
export const getTeam = (teams, teamId) =>
  teams.competitors.find(competitor => competitor.competitor.id === teamId).competitor;

/**
 * Return the players array sorted by roles and eventually by rates
 * @param {Object} team - The teams object
 * @param {Object} rates - An object that has playerId as key and an object with rate attr as value
 */
export const sortPlayersByRole = (team, rates = {}) => {
  // Creates an object with as key a role, and as value an array of players sharing the same role
  const rosterByRole = team.players.reduce((roster, { player }) => {
    const { role } = player.attributes;

    if (!roster[role]) {
      return {
        ...roster,
        [role]: [player],
      };
    }

    const playersWithSameRole = [...roster[role], player].sort((playerA, playerB) => {
      const playerARate = path([playerA.id, 'rate'], rates);
      const playerBRate = path([playerB.id, 'rate'], rates);

      if (!playerARate || !playerBRate) return 0;
      return playerBRate - playerARate;
    });

    return {
      ...roster,
      [role]: playersWithSameRole,
    };
  }, {});

  // flatten the rosterByRole object in order to gate an array of player sorted by role and rates
  return positions.reduce((roster, position) => {
    const players = rosterByRole[position];

    if (!players) return [...roster];
    return [...roster, ...players];
  }, []);
};
