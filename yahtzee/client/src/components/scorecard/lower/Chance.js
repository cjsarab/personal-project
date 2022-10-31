import React from 'react';

const Chance = ({
  currentRoll,
  score,

  pushScore,
  addNumbers,
  endTurn
  }) => {

  const calculateScore = (currentRoll) => {

    currentRoll = currentRoll.reduce(addNumbers);
    score.splice(13, 1, currentRoll);

    pushScore(score);
    endTurn();
    };

  const handleClick = function() {
    calculateScore(currentRoll);
  };

  return (
    <>
    <button onClick={handleClick}>Chance</button>
    <div> {score[13]} </div>
    </>
  );
};

export default Chance;