import React from 'react'
import SingleDice from './SingleDice';

const DiceDisplay = ({currentRoll, toggleLockDice}) => {

    const diceNumbers = currentRoll.map((dieNumber, index) => {
      return <SingleDice
      dieNumber={dieNumber}
      key={index}
      index={index}
      
      toggleLockDice={toggleLockDice}/>
    });

  return (
    <div>{diceNumbers}</div>
  );
};

export default DiceDisplay;