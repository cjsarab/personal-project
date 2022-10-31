import React from 'react';

const Fours = ({
  currentRoll,
  score,

  pushScore,
  addNumbers,
  endTurn
  }) => {

  const calculateScore = (currentRoll) => {

    var thisScore = currentRoll.filter(number => number === 4);
    thisScore = thisScore.reduce(addNumbers);
    score.splice(3, 1, thisScore);

    pushScore(score);
    endTurn();
  };

  const handleClick = function() {
    calculateScore(currentRoll);
  };

  return (
    <>
    <button onClick={handleClick}>Fours</button>
    <div> {score[3]} </div>
    </>
  );
};

export default Fours;