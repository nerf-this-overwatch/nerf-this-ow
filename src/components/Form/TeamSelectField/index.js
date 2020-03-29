import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';

import TEAMS from '../../../data/teams';
import Select from '../../Select';

import './index.scss';

const TeamSelectField = ({ label, className, ...props }) => {
  const [field, meta] = useField(props);
  return (
    // eslint-disable-next-line react/destructuring-assignment
    <label className={`input-field ${className}`} htmlFor={props.id || props.name}>
      {!!label && <span className="input-field__label">{label}</span>}
      <Select className="input-field__select" {...field} {...props}>
        {field.value === '' && <option>CHOOSE TEAM</option>}

        {TEAMS.allIds.map(teamId => {
          const team = TEAMS.byId[teamId];

          return (
            <option key={team.id} value={team.id}>
              {team.city} {team.name}
            </option>
          );
        })}
      </Select>
      {meta.touched && meta.error ? <div className="input-field__error">{meta.error}</div> : null}
    </label>
  );
};

TeamSelectField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
};

TeamSelectField.defaultProps = {
  type: 'text',
  className: '',
  label: '',
};

export default TeamSelectField;
