import React from 'react';

const FullHouse = ({
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

    var matchTwo = false;
    var matchThree = false;

    if (thisScore1.length == 2 || 
        thisScore2.length == 2 ||
        thisScore3.length == 2 ||
        thisScore4.length == 2 ||
        thisScore5.length == 2 ||
        thisScore6.length == 2 ) 
        { matchTwo = true }

    if (thisScore1.length == 3 || 
        thisScore2.length == 3 ||
        thisScore3.length == 3 ||
        thisScore4.length == 3 ||
        thisScore5.length == 3 ||
        thisScore6.length == 3 ) 
        { matchThree = true }
    
    if (matchTwo && matchThree) {
    score.splice(10, 1, 25);

    pushScore(score);
    endTurn();
    }
    else {
      score.splice(10, 1, 0)
      pushScore(score)
      endTurn();
    };
  };

  const handleClick = function() {
    calculateScore(currentRoll);
  };

  return (
    <>
    <button onClick={handleClick}>Full House</button>
    <div> {score[10]} </div>
    </>
  );
};

export default FullHouse;