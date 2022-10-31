import React from 'react';

const GameOver = ({score, endGame}) => {

  const handleClick = function() {
    endGame();
    console.log(score[16])
  };

  return (
    <>
    <button onClick={handleClick}>Game Over!</button>
    <div>Your score was {score[16]}</div>
    </>
  );
};

export default GameOver;