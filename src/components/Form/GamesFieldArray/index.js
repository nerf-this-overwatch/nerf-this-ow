import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import InputField from '../InputField';
import TeamSelectField from '../TeamSelectField';
import Button from '../../Button';

import './index.scss';

export const getInitialGame = () => ({
  id: uuidv4(),
  home: {
    team: '',
    score: '',
  },
  away: {
    team: '',
    score: '',
  },
  time: '',
});

const GamesFieldArray = ({ name, push, remove, form, type }) => {
  const games = form.values[name];
  const handleAddClick = () => push(getInitialGame());
  const isSchedule = type === 'schedule';
  const isResults = type === 'results';

  return (
    <React.Fragment>
      {games.map((game, index) => (
        <div className="game-field" key={game.id}>
          {isSchedule && <InputField label="Heure" name={`games[${index}].time`} type="time" />}

          <div className="game-field__team-row">
            <TeamSelectField
              className="game-field__team-name"
              label="Équipe à domicile"
              name={`games[${index}].home.team`}
            />

            {isResults && (
              <InputField
                label="Score"
                className="game-field__team-score"
                name={`games[${index}].home.score`}
                type="number"
                min="0"
                max="3"
              />
            )}
          </div>

          <div className="game-field__team-row">
            <TeamSelectField
              className="game-field__team-name"
              label="Équipe à l'extérieur"
              name={`games[${index}].away.team`}
            />
            {isResults && (
              <InputField
                label="Score"
                className="game-field__team-score"
                name={`games[${index}].away.score`}
                type="number"
                min="0"
                max="3"
              />
            )}
          </div>

          <Button type="button" onClick={() => remove(index)}>
            Supprimer
          </Button>
        </div>
      ))}

      <Button type="button" onClick={handleAddClick}>
        Ajouter un match
      </Button>
    </React.Fragment>
  );
};

export default GamesFieldArray;

GamesFieldArray.propTypes = {
  name: PropTypes.string.isRequired,
  form: PropTypes.object.isRequired,
  push: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['schedule', 'results']),
};

GamesFieldArray.defaultProps = {
  type: 'schedule',
};
