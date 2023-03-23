import React, { useState, useContext, useRef } from 'react';
import PlayersContext from '../context/PlayersContext';

const AddPlayerForm = () => {
  const {nextPlayerId, actions, value} = useContext(PlayersContext);

  return(
    <form onSubmit={(e) => actions.handleSubmit(e)}>
      <input
        type="text"
        value= {value}
        placeholder="Enter Name"
        onChange={(e)=> actions.setValue(e.target.value)}
      />
      <input
        type= "submit"
        placeholder= "Add player"
      />
    </form>
  );
}

export default AddPlayerForm;
