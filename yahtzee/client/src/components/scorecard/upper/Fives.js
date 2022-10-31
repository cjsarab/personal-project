import React from 'react';

const Fives = ({
  currentRoll,
  score,

  pushScore,
  addNumbers,
  endTurn
  }) => {

  const calculateScore = (currentRoll) => {

    var thisScore = currentRoll.filter(number => number === 5);
    thisScore = thisScore.reduce(addNumbers);
    score.splice(4, 1, thisScore);

    pushScore(score);
    endTurn();
  };

  const handleClick = function() {
    calculateScore(currentRoll);
  };

  return (
    <>
    <button onClick={handleClick}>Fives</button>
    <div> {score[4]} </div>
    </>
  );
};

export default Fives;