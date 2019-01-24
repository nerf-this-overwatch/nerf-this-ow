import React, { useContext } from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';

import PlayersRating from '.';
import TeamTheme from '../TeamTheme';
import { teamIds } from '../../data/teams';

const stories = storiesOf('PlayersRating', module);

const players = {
  3981: { id: 3981, name: 'Kellex', nationality: 'DK', playerNumber: 9, position: 'Main tank', rating: 3 },
  4606: { id: 4606, name: 'Gamsu', nationality: 'KR', playerNumber: 1, position: 'Main tank', rating: 3 },
  4607: { id: 4607, position: 'Main tank', rating: 3, name: 'NotE', playerNumber: 3, nationality: 'CA' },
  5306: { id: 5306, position: 'Main tank', rating: 3, name: 'ColourHex', playerNumber: 17, nationality: 'NZ' },
  5863: { id: 5863, position: 'Main tank', rating: 3, name: 'AimGod', playerNumber: 31, nationality: 'KR' },
  5878: { id: 5878, position: 'Main tank', rating: 3, name: 'Axxiom', playerNumber: 10, nationality: 'KR' },
  8184: { id: 8184, position: 'Main tank', rating: 3, name: 'blase', playerNumber: 22, nationality: 'US' },
  8203: { id: 8203, position: 'Main tank', rating: 3, name: 'Fusions', playerNumber: 25, nationality: 'GB' },
  8672: { id: 8672, position: 'Main tank', rating: 3, name: 'alemao', playerNumber: 14, nationality: 'BR' },
};

stories.add('default', () => {
  const team = parseInt(select('team', teamIds, Object.values(teamIds)[0]));

  return (
    <TeamTheme teamId={team}>
      <div style={{ padding: '1rem', backgroundColor: 'var(--bg-color)', color: 'var(--color)' }}>
        <PlayersRating teamId={team} players={players} />
      </div>
    </TeamTheme>
  );
});
