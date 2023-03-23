import React, { useState, useContext } from 'react';
import PlayersContext  from '../context/PlayersContext';
import Header from './Header.js';
import Player from './Player.js';
import AddPlayerForm from './AddPlayerForm.js';

const App = () => {
  const {players} = useContext(PlayersContext);
  return (
    <div className="scoreboard">
      <Header />
      {
        players.map((player, index )=>
          <Player
            key={index.toString()}
            id={index}
          />)
        }
        <AddPlayerForm />
      </div>
    );
  }
  export default App;
