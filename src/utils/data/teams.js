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
export const sortPlayersByRole = (players, rates = {}) => {
  // Creates an object with as key a role, and as value an array of players sharing the same role
  const playersIdsByRoles = players.allIds.reduce((roster, playerId) => {
    const player = players.byId[playerId];

    if (!roster[player.role]) {
      return {
        ...roster,
        [player.role]: [playerId],
      };
    }

    const playersWithSameRole = [...roster[player.role], playerId].sort((playerIdA, playerIdB) => {
      const playerARate = path([playerIdA], rates);
      const playerBRate = path([playerIdB], rates);

      if (!playerARate || !playerBRate) return 0;
      return playerBRate - playerARate;
    });

    return {
      ...roster,
      [player.role]: playersWithSameRole,
    };
  }, {});

  // flatten the playersIdsByRoles object in order to gate an array of player sorted by role and rates
  const allIds = positions.reduce((ids, position) => {
    const roleIds = playersIdsByRoles[position];

    if (!roleIds) return [...ids];
    return [...ids, ...roleIds];
  }, []);

  return {
    ...players,
    allIds,
  };
};
