import React from 'react';

const RollDiceButton = ({rollDice}) => {

    const handleClick = () => {
        rollDice();
        return
    };

  return (
    <button onClick={handleClick}>Roll Dice!</button>
  );
};

export default RollDiceButton;