import { path } from 'ramda';

const positionsOrder = [
  'Main tank',
  'Off tank',
  'Hitscan DPS',
  'Projectiles DPS',
  'Flex DPS',
  'Flex support',
  'Main healer',
];

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
  const allIds = positionsOrder.reduce((ids, position) => {
    const roleIds = playersIdsByRoles[position];

    if (!roleIds) return [...ids];
    return [...ids, ...roleIds];
  }, []);

  return {
    ...players,
    allIds,
  };
};
