import React from 'react';

const Twos = ({
  currentRoll,
  score,

  pushScore,
  addNumbers,
  endTurn
  }) => {

  const calculateScore = (currentRoll) => {

    var thisScore = currentRoll.filter(number => number === 2);
    thisScore = thisScore.reduce(addNumbers);
    score.splice(1, 1, thisScore);

    pushScore(score);
    endTurn={endTurn};
  };

  const handleClick = function() {
    calculateScore(currentRoll);
  };

  return (
    <>
    <button onClick={handleClick}>Twos</button>
    <div> {score[1]} </div>
    </>
  );
};

export default Twos;