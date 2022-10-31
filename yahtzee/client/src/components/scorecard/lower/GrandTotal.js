import React from 'react';

const GrandTotal = ({
  score,
  pushScore,
  addNumbers,
  }) => {

  const calculateScore = (score) => {
    var thisScore = [score[7], score[15]]
    thisScore = thisScore.reduce(addNumbers);
    score.splice(16, 1, thisScore)
    pushScore(score)
  };

  const handleClick = function() {
    calculateScore(score);
  };

  return (
    <>
    <button onClick={handleClick}>Grand Total</button>
    <div> {score[16]} </div>
    </>
  );
};

export default GrandTotal;