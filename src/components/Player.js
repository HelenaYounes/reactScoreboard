import React, { useContext } from 'react';
import PlayersContext from '../context/PlayersContext';
import Counter from './Counter.js';

const Player = (props) => {
  const { actions } = useContext(PlayersContext);
  const player = actions.findPlayer(props.id);
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => actions.handleRemovePlayer(player.id)}>✖</button>
        {player.name}
      </span>

      <Counter player={player}/>
    </div>
  );
}

export default Player;
