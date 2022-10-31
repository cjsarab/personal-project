import React from 'react';

const SmallStraight = ({
  currentRoll,
  score,

  pushScore,
  endTurn
  }) => {

  const calculateScore = (currentRoll) => {

    const thisScore1 = currentRoll.some(number => number === 1);
    const thisScore2 = currentRoll.some(number => number === 2);
    const thisScore3 = currentRoll.some(number => number === 3);
    const thisScore4 = currentRoll.some(number => number === 4);
    const thisScore5 = currentRoll.some(number => number === 5);
    const thisScore6 = currentRoll.some(number => number === 6);

    if (
    (thisScore1 && thisScore2 && thisScore3 && thisScore4) ||
    (thisScore2 && thisScore3 && thisScore4 && thisScore5) ||
    (thisScore3 && thisScore4 && thisScore5 && thisScore6))
    {
      score.splice(11, 1, 30);
      pushScore(score);
      endTurn();
    }
    else {
      score.splice(11, 1, 0)
      pushScore(score)
      endTurn();
    };
  };

  const handleClick = function() {
    calculateScore(currentRoll);
  };

  return (
    <>
    <button onClick={handleClick}>Small Straight</button>
    <div> {score[11]} </div>
    </>
  );
};

export default SmallStraight;