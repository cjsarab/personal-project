import React from 'react'
import SingleDie from './SingleDie';
import GameOver from './GameOver';

const DiceDisplay = ({
  currentRoll, 
  lockedDice,
  turnCounter,
  score,

  toggleLockDice,
  endGame
  }) => {

    const diceNumbers = currentRoll.map((dieNumber, index) => {
      return <SingleDie
      dieNumber={dieNumber}
      key={index}
      index={index}
      
      lockedDice={lockedDice}
      toggleLockDice={toggleLockDice}/>
    });

  return (
    <>
    {
    turnCounter >= 13 ?
    <div>
    <GameOver endGame={endGame} score={score}/>
    </div> :
    <div>{diceNumbers}</div>
    }
    </>
  );
};

export default DiceDisplay;