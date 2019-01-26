import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { fetchTeams } from '../../api';

const Context = React.createContext();

export const ApiProvider = ({ children }) => {
  const [teams, setTeams] = useState();

  useEffect(async () => {
    await setTeams(await fetchTeams());
  }, []);

  if (!teams) return 'Loading...';

  return <Context.Provider value={{ teams }}>{children}</Context.Provider>;
};

ApiProvider.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Context;
