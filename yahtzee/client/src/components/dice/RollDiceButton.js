import React from 'react';

const RollDiceButton = ({
  rollDice,
  endTurn,
  rollsThisTurn
  }) => {

    const handleClick = () => {
      rollDice();
    };

    const handleEndTurn = () => {
      endTurn();
    };

  return (
    <>
    <div>
    {
    rollsThisTurn < 3 ?
    <div>
        <button onClick={handleClick}>Roll Dice!</button>
    </div> 
    :
    <button onClick={handleEndTurn}>End Turn</button>
    }
    </div>
    <div>Turn: {rollsThisTurn}</div>
    </>
  );
};

export default RollDiceButton;