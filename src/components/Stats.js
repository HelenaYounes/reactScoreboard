import React, { useContext } from 'react';
import PlayersContext from '../context/PlayersContext';

const Stats = () => {
  const {players} = useContext(PlayersContext);
  const totalPlayers = players.length;
  const totalPoints = players.reduce((total, player)=> {
    return total + player.score;
  },0);

  return(
    <table className="stats">
      <tbody>
        <tr>
          <td>Players:</td>
          <td>{players.length}</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>{players.reduce((total, player)=> {
            return total + player.score;
          },0)}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Stats;
