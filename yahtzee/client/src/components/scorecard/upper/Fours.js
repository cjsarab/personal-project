import React from 'react';

const Fours = ({
  currentRoll,
  score,

  pushScore,
  addNumbers,
  }) => {

  const calculateScore = (currentRoll) => {

    var thisScore = currentRoll.filter(number => number === 4)
    thisScore = thisScore.reduce(addNumbers)
    console.log(score)
    score.splice(3, 1, thisScore)
    pushScore(score)
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