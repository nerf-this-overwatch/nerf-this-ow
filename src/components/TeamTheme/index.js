import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import { getContrastYIQ } from '../../utils/colors';
import ApiContext from '../../containers/ApiContext';

const TeamTheme = ({ teamId, children }) => {
  const team = useContext(ApiContext).teams.byId[teamId];

  return (
    <div
      className={`team-theme team-theme--${team.teamName.toLowerCase()}`}
      style={{
        '--primary-color': team.colors.primary,
        '--secondary-color': team.colors.secondary,
        '--tertiary-color': team.colors.tertiary,
        '--contrast-primary-color': getContrastYIQ(team.colors.primary),
        '--contrast-secondary-color': getContrastYIQ(team.colors.secondary),
        '--contrast-tertiary-color': getContrastYIQ(team.colors.tertiary),
      }}
    >
      {children}
    </div>
  );
};

TeamTheme.propTypes = {
  children: PropTypes.any.isRequired,
  teamId: PropTypes.number.isRequired,
};

export default TeamTheme;
