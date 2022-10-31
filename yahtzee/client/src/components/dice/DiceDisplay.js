import React from 'react'
import SingleDie from './SingleDie';
import GameOver from './GameOver';

const DiceDisplay = ({
  currentRoll, 
  lockedDice,
  turnCounter,
  toggleLockDice
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
    <GameOver />
    </div> :
    <div>{diceNumbers}</div>
    }
    </>
  );
};

export default DiceDisplay;