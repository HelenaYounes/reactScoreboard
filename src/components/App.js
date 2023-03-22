import React, { useState } from 'react';
import Header from './Header.js';
import Player from './Player.js';
import AddPlayerForm from './AddPlayerForm.js';


const App = () => {
  const [players, setPlayers] = useState([
    {
      name: "Guil",
      id: 1,
      score: 0
    },
    {
      name: "Treasure",
      id: 2,
      score: 0
    },
    {
      name: "Ashley",
      id: 3,
      score: 33
    },
    {
      name: "James",
      id: 4,
      score: 21
    }
  ]);

  const [nextPlayerId, setNextPlayerId] = useState(5);

  const handleRemovePlayer = (id) => {
    setPlayers(players.filter(p => p.id !== id));
  }

  const handleScoreChange = (id, delta) => {
    // console.log(`id; `+  id, `delta:` + delta )
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
    console.log(nextPlayerId)
    console.log(players)
  }

  return (
    <div className="scoreboard">
      <Header
        title="Scoreboard"
        players={players}
      />
      {
        players.map(player =>
          <Player
            name={player.name}
            id={player.id}
            key={player.id.toString()}
            score={player.score}
            removePlayer={handleRemovePlayer}
            changeScore={handleScoreChange}
          />)
        }
        <AddPlayerForm  addPlayer={addPlayer}/>
    </div>
  );

}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

export default App;
