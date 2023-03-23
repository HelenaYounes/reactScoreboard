import React, { useContext } from 'react';
import PlayersContext from '../context/PlayersContext';

const Counter = (props) => {
  const {player} =props;
  const {players, actions} = useContext(PlayersContext);
  return (
    <div className="counter">
      <button className="counter-action decrement" onClick={()=> actions.handleScoreChange(player.id, -1)}> - </button>
      <span className="counter-score">{player.score}</span>
      <button className="counter-action increment" onClick={()=> actions.handleScoreChange(player.id, +1)}> + </button>
    </div>
  );
}

export default Counter;
