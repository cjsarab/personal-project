import React from 'react';

const RollDiceButton = ({rollUnlockedDice}) => {

    const handleClick = () => {
        rollUnlockedDice();
        return
    }


  return (
    <button onClick={handleClick}>Roll Dice!</button>
  );
};

export default RollDiceButton;