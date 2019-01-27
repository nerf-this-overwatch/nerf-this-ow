import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

import ApiContext from '../ApiContext';

const TeamSelect = ({ value, onChange }) => {
  const { teams } = useContext(ApiContext);
  const [teamId, setTeamId] = useState(value || teams.allIds[0]);

  useEffect(() => onChange(teamId), [teamId]);

  return (
    <select value={teamId} onChange={e => setTeamId(parseInt(e.target.value))}>
      {teams.allIds.map(id => (
        <option key={id} value={id}>
          {teams.byId[id].fullName}
        </option>
      ))}
    </select>
  );
};

TeamSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number,
};

TeamSelect.defaultProps = {
  value: undefined,
};

export default TeamSelect;
