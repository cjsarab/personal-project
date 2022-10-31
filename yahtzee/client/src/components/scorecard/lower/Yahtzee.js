import React from 'react';

const Yahtzee = ({
  currentRoll,
  score,

  pushScore,
  endTurn
  }) => {

  const calculateScore = (currentRoll) => {

    const thisScore1 = currentRoll.filter(number => number === 1);
    const thisScore2 = currentRoll.filter(number => number === 2);
    const thisScore3 = currentRoll.filter(number => number === 3);
    const thisScore4 = currentRoll.filter(number => number === 4);
    const thisScore5 = currentRoll.filter(number => number === 5);
    const thisScore6 = currentRoll.filter(number => number === 6);

    if (thisScore1.length == 5 || 
        thisScore2.length == 5 ||
        thisScore3.length == 5 ||
        thisScore4.length == 5 ||
        thisScore5.length == 5 ||
        thisScore6.length == 5 ) 
        {
    score.splice(14, 1, 50);

    pushScore(score);
    endTurn();
    }
    else {
      score.splice(14, 1, 0)
      pushScore(score)
      endTurn();
    };
  };

  const handleClick = function() {
    calculateScore(currentRoll);
  };

  return (
    <>
    <button onClick={handleClick}>Yahtzee</button>
    <div> {score[14]} </div>
    </>
  );
};

export default Yahtzee;