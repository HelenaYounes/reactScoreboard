import React, { useState } from 'react';

const AddPlayerForm = (props) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();
    props.addPlayer(value);
    setValue("");
  }

  return(
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        value= {value}
        placeholder="Enter Name"
        onChange={(e)=> setValue(e.target.value)}
      />
      <input
        type= "submit"
        placeholder= "Add player"
      />
    </form>

  );
}

export default AddPlayerForm;
