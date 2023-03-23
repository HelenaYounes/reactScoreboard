import React, { useContext } from 'react';
import PlayersContext from '../context/PlayersContext';
import Stats from './Stats.js';
import Stopwatch from './Stopwatch.js';

const Header = () => {
  const {players} = useContext(PlayersContext);
  return (
    <header>
      <Stats players={players} />
      <h1>Scoreboard</h1>
      <Stopwatch />
    </header>
  );
}

export default Header;
