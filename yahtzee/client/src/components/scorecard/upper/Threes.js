import React from 'react';

const Threes = ({
  currentRoll,
  score,

  pushScore,
  addNumbers,
  endTurn
  }) => {

  const calculateScore = (currentRoll) => {
    
    if (currentRoll.some (number => number === 3))
    {
    var thisScore = currentRoll.filter(number => number === 3);
    thisScore = thisScore.reduce(addNumbers);
    score.splice(2, 1, thisScore);

    pushScore(score);
    endTurn();
    }
    else {
      score.splice(2, 1, 0)
      pushScore(score)
      endTurn();
    };
  };

  const handleClick = function() {
    calculateScore(currentRoll);
  };

  return (
    <>
    <button onClick={handleClick}>Threes</button>
    <div> {score[2]} </div>
    </>
  );
};

export default Threes;