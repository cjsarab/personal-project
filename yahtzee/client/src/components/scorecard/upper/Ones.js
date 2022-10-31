import React from 'react';

const Ones = ({
  currentRoll,
  score,

  pushScore,
  addNumbers,
  endTurn
  }) => {

  const calculateScore = (currentRoll) => {

    var thisScore = currentRoll.filter(number => number === 1);
    thisScore = thisScore.reduce(addNumbers);
    score.splice(0, 1, thisScore);

    pushScore(score);
    endTurn();
  };

  const handleClick = function() {
    calculateScore(currentRoll);
  };

  return (
    <>
    <button onClick={handleClick}>Ones</button>
    <div> {score[0]} </div>
    </>
  );
};

export default Ones;