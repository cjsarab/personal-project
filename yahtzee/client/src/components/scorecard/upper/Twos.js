import React from 'react';

const Twos = ({
  currentRoll,
  score,

  pushScore,
  addNumbers,
  endTurn
  }) => {

  const calculateScore = (currentRoll) => {

    if (currentRoll.some (number => number === 2))
    {
    var thisScore = currentRoll.filter(number => number === 2);
    thisScore = thisScore.reduce(addNumbers);
    score.splice(1, 1, thisScore);

    pushScore(score);
    endTurn();
    }
    else {
      score.splice(1, 1, 0)
      pushScore(score)
      endTurn();
    };
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