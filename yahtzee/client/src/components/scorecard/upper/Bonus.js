import React from 'react';

const Bonus = ({
  score,
  pushScore,
  addNumbers
  }) => {

  const calculateScore = (score) => {
    var thisScore = [score[0], score[1], score[2], score[3], score[4], score[5]]
    thisScore = thisScore.reduce(addNumbers)
      if (thisScore >= 63) {
      score.splice(6, 1, 35)
      pushScore(score)
      }
      else {
        score.splice(6, 1, 0)
        pushScore(score)
      };
  };

  const handleClick = function() {
    calculateScore(score);
  };

  return (
    <>
    <button onClick={handleClick}>Bonus?</button>
    <div> {score[6]} </div>
    </>
  );
};

export default Bonus;