import chroma from 'chroma-js';
import playersCustomRoles from '../../data/players/custom-role';

const reshapeTeamColors = colorsArr =>
  colorsArr.reduce(
    (colorsObj, color) => ({
      ...colorsObj,
      // Not my fault, the OWL API has weird model sometimes
      [color.usage]: chroma(color.color.color)
        .alpha(color.color.opacity)
        .css(),
    }),
    {}
  );

const reshapeTeamIcons = (iconsArr, id) => {
  const icons = iconsArr.reduce(
    (iconsObj, icon) => ({
      ...iconsObj,
      [icon.usage]: icon.svg,
    }),
    {}
  );

  /* eslint-disable global-require */
  const customMainNameColorContrat = {
    4404: require('./custom-logo/SFS-main-name-color-constrast.svg'),
  };
  /* eslint-enable global-require */

  return {
    ...icons,
    mainNameColorContrast: customMainNameColorContrat[id] || icons.mainName,
  };
};

const reshapePlayer = ({ team, player }) => ({
  id: player.id,
  team: team.id,
  name: player.name,
  familyName: player.familyName,
  givenName: player.givenName,
  nationality: player.nationality,
  heroes: player.attributes.heroes,
  number: player.attributes.player_number,
  headshot: player.headshot,
  role: playersCustomRoles[player.id] || player.player.attributes.role,
});

const reshapeTeamPlayers = playersArr =>
  playersArr.reduce(
    (playersObj, player) => {
      const reshapedPlayer = reshapePlayer(player);
      return {
        ...playersObj,
        allIds: [...playersObj.allIds, reshapedPlayer.id],
        byId: {
          ...playersObj.byId,
          [reshapedPlayer.id]: reshapedPlayer,
        },
      };
    },
    { allIds: [], byId: {} }
  );

const reshapeTeamsData = teams =>
  teams.competitors.reduce(
    (teamsObj, team) => {
      const { abbreviatedName, name, id, content, players } = team.competitor;

      return {
        ...teamsObj,
        allIds: [...teamsObj.allIds, id],
        byId: {
          ...teamsObj.byId,
          [id]: {
            fullName: name,
            teamName: content.name,
            cityName: content.location,
            abbreviatedName,
            division: team.competitor.owl_division,
            colors: reshapeTeamColors(content.colors),
            icons: reshapeTeamIcons(content.icons, id),
            players: reshapeTeamPlayers(players),
          },
        },
      };
    },
    { allIds: [], byId: {} }
  );

export default async () => {
  const response = await fetch('https://api.overwatchleague.com/teams?expand=team.content&locale=fr_FR');

  const teams = await response.json();
  return reshapeTeamsData(teams);
};
