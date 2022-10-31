import React from 'react';

const Threes = ({
  currentRoll,
  score,

  pushScore,
  addNumbers,
  }) => {

  const calculateScore = (currentRoll) => {

    var thisScore = currentRoll.filter(number => number === 3)
    thisScore = thisScore.reduce(addNumbers)
    console.log(score)
    score.splice(2, 1, thisScore)
    pushScore(score)
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