import React from 'react';

const Counter = (props) => {
  // state = {
  //   score: 0
  // };

  // const incrementScore = () => {
  //   setScore(prevScore => prevScore + 1);
  //   // this.setState( prevState => ({
  //   //   score: prevState.score + 1
  //   // }));
  // }
  //
  // const decrementScore = () => {
  //   setScore(prevScore => prevScore - 1);
  //   // this.setState( prevState => ({
  //   //   score: prevState.score - 1
  //   // }));
  // }

  return (
    <div className="counter">
      <button className="counter-action decrement" onClick={() => props.changeScore(props.id,-1)}> - </button>
      <span className="counter-score">{props.score}</span>
      <button className="counter-action increment" onClick={() => props.changeScore(props.id,+1)}> + </button>
    </div>
  );
}

export default Counter;
