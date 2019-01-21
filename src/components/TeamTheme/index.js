import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import { teamIds, getTeamInfo } from '../../data/teams';
import { getContrastYIQ } from '../../utils/colors';

const TeamTheme = ({ teamId, children }) => {
  const teamInfo = getTeamInfo(teamId);

  return (
    <div
      className={`team-theme team-theme--${teamInfo.teamName.toLowerCase()}`}
      style={{
        '--primary-color': teamInfo.colors.primary,
        '--secondary-color': teamInfo.colors.secondary,
        '--tertiary-color': teamInfo.colors.tertiary,
        '--contrast-primary-color': getContrastYIQ(teamInfo.colors.primary),
        '--contrast-secondary-color': getContrastYIQ(teamInfo.colors.secondary),
        '--contrast-tertiary-color': getContrastYIQ(teamInfo.colors.tertiary),
      }}
    >
      {children}
    </div>
  );
};

TeamTheme.propTypes = {
  children: PropTypes.any.isRequired,
  teamId: PropTypes.oneOf(Object.values(teamIds)).isRequired,
};

export default TeamTheme;
