import React from 'react';

const Sixes = ({
  currentRoll,
  score,

  pushScore,
  addNumbers,
  endTurn
  }) => {

  const calculateScore = (currentRoll) => {

    var thisScore = currentRoll.filter(number => number === 6);
    thisScore = thisScore.reduce(addNumbers);
    score.splice(5, 1, thisScore);

    pushScore(score);
    endTurn();
  };

  const handleClick = function() {
    calculateScore(currentRoll);
  };

  return (
    <>
    <button onClick={handleClick}>Sixes</button>
    <div> {score[5]} </div>
    </>
  );
};

export default Sixes;