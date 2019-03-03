import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { fetchTeams, fetchSchedule } from '../../api';

const Context = React.createContext();

export const ApiProvider = ({ children }) => {
  const [teams, setTeams] = useState();
  const [schedule, setSchedule] = useState();

  useEffect(async () => {
    setTeams(await fetchTeams());
    setSchedule(await fetchSchedule());
  }, []);

  if (!teams && !schedule) return 'Loading...';

  return <Context.Provider value={{ teams, schedule }}>{children}</Context.Provider>;
};

ApiProvider.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Context;
