import React, { useEffect, useState } from 'react';

import { getTeams } from '../../api';

const Context = React.createContext();

export const ApiProvider = ({ children }) => {
  const [teams, setTeams] = useState();

  useEffect(async () => {
    await setTeams(await getTeams());
  }, []);

  if (!teams) return 'Loading...';

  return <Context.Provider value={{ teams }}>{children}</Context.Provider>;
};

export default Context;
