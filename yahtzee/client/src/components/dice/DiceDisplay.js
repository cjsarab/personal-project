import React from 'react'
import SingleDice from './SingleDice';

const DiceDisplay = ({currentRoll}) => {

    const diceNumbers = currentRoll.map((dieNumber, index) => {
      return <SingleDice
      dieNumber={dieNumber}
      key={index} />
    });

  return (
    <div>{diceNumbers}</div>
  );
};

export default DiceDisplay;