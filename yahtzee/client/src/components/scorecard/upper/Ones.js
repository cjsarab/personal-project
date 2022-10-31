import React from 'react';

const Ones = ({
  currentRoll,
  score,

  pushScore,
  addNumbers,
  }) => {

  const calculateScore = (currentRoll) => {

    var thisScore = currentRoll.filter(number => number === 1)
    thisScore = thisScore.reduce(addNumbers)
    console.log(score)
    score.splice(0, 1, thisScore)
    pushScore(score)
  }

  const handleClick = function() {
    calculateScore(currentRoll);
  }

  return (
    <>
    <button onClick={handleClick}>Ones</button>
    <div> {score} </div>
    </>
  );
};

export default Ones;