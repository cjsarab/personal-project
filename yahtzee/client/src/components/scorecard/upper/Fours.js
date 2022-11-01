import React from 'react';

const Fours = ({
  currentRoll,
  score,

  pushScore,
  addNumbers,
  endTurn
  }) => {

  const calculateScore = (currentRoll) => {

    if (currentRoll.some (number => number === 4))
    {
    var thisScore = currentRoll.filter(number => number === 4);
    thisScore = thisScore.reduce(addNumbers);
    score.splice(3, 1, thisScore);

    pushScore(score);
    endTurn();
    }
    else {
      score.splice(3, 1, 0)
      pushScore(score)
      endTurn();
    };
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