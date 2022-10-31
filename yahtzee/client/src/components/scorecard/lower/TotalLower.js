import React from 'react';

const TotalLower = ({
  score,
  pushScore,
  addNumbers,
  }) => {

  const calculateScore = (score) => {
    var thisScore = [score[8], score[9], score[10], score[11],
    score[12], score[13], score[14]]
    thisScore = thisScore.reduce(addNumbers);
    score.splice(15, 1, thisScore)
    pushScore(score)
  };

  const handleClick = function() {
    calculateScore(score);
  };

  return (
    <>
    <button onClick={handleClick}>Total Lower</button>
    <div> {score[15]} </div>
    </>
  );
};

export default TotalLower;