import React from 'react';

const ThreeOfAKind = ({
  currentRoll,
  score,

  pushScore,
  addNumbers,
  endTurn
  }) => {

  const calculateScore = (currentRoll) => {

    const thisScore1 = currentRoll.filter(number => number === 1);
    const thisScore2 = currentRoll.filter(number => number === 2);
    const thisScore3 = currentRoll.filter(number => number === 3);
    const thisScore4 = currentRoll.filter(number => number === 4);
    const thisScore5 = currentRoll.filter(number => number === 5);
    const thisScore6 = currentRoll.filter(number => number === 6);

    if (thisScore1.length >= 3 || 
        thisScore2.length >= 3 ||
        thisScore3.length >= 3 ||
        thisScore4.length >= 3 ||
        thisScore5.length >= 3 ||
        thisScore6.length >= 3 ) 
        {
    currentRoll = currentRoll.reduce(addNumbers);
    score.splice(8, 1, currentRoll);

    pushScore(score);
    endTurn();
    }
    else {
      score.splice(8, 1, 0)
      pushScore(score)
      endTurn();
    };
  };

  const handleClick = function() {
    calculateScore(currentRoll);
  };

  return (
    <>
    <button onClick={handleClick}>Three of a Kind</button>
    <div> {score[8]} </div>
    </>
  );
};

export default ThreeOfAKind;