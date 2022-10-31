import React from 'react';

const TotalUpper = ({
  score,
  pushScore,
  addNumbers,
  }) => {

  const calculateScore = (score) => {
    var thisScore = [score[0], score[1], score[2], score[3], score[4], score[5], score[6]]
    thisScore = thisScore.reduce(addNumbers);
    score.splice(7, 1, thisScore)
    pushScore(score)
  };

  const handleClick = function() {
    calculateScore(score);
  };

  return (
    <>
    <button onClick={handleClick}>Total Upper</button>
    <div> {score[7]} </div>
    </>
  );
};

export default TotalUpper;