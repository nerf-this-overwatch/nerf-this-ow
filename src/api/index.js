export const getTeams = async () => {
  const response = await fetch('https://api.overwatchleague.com/teams');
  const json = await response.json();
  return json;
};
