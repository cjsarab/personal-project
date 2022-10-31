import React from 'react'
import SingleDie from './SingleDie';

const DiceDisplay = ({
  currentRoll, 
  lockedDice,
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
    <div>{diceNumbers}</div>
  );
};

export default DiceDisplay;