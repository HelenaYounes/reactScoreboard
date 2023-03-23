import { createContext, useState } from 'react';

const PlayersContext = createContext(null);
export const PlayersProvider = (props) => {
  const [players, setPlayers] = useState([
    {
      name: "Guil",
      id: 0,
      score: 0
    },
    {
      name: "Treasure",
      id: 1,
      score: 0
    },
    {
      name: "Ashley",
      id: 2,
      score: 33
    },
    {
      name: "James",
      id: 3,
      score: 21
    }
  ]);
  const [nextPlayerId, setNextPlayerId] = useState(5);
  const [value, setValue] = useState("");

  const findPlayer = (id) => {
    return players[id]

  }

  const handleScoreChange = (id, delta) => {
    setPlayers(players.map(player=>{
      if(player.id === id){
        return {
          name: player.name,
          id: player.id,
          score: player.score + delta
        }
      }
      return player;
    }))
  }

  const addPlayer = (name) => {
    setPlayers([
      ...players,
      {
        name: name,
        score: 0,
        id: nextPlayerId
      }
    ])
    setNextPlayerId(nextPlayerId + 1);
  }

  const handleRemovePlayer = (id) => {
    setPlayers(players.filter(p => p.id !== id));
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    addPlayer(value);
    setValue("");
  }

    return(
      <PlayersContext.Provider value={{
        players,
        nextPlayerId,
        value,
        actions: {
          addPlayer,
          handleScoreChange,
          handleRemovePlayer,
          handleSubmit,
          setValue,
          findPlayer
        }
      }}>
      {props.children}
    </PlayersContext.Provider>
    );
  }

export default PlayersContext;
