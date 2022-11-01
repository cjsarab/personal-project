import React from 'react';

const RollDiceButton = ({
  rollDice,
  endTurn,
  turnCounter,
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
    <div className="turn-display">
    <div>
    {
    rollsThisTurn < 3 ?
    <div>
        <button className="roll-dice" onClick={handleClick}>Roll Dice!</button>
    </div> 
    :
    <button className="end-turn" onClick={handleEndTurn}>End Turn</button>
    }
    </div>
    
      <div className="turn-display-rolls">
        <div>Turn: {rollsThisTurn} </div>
      </div>
      <div className="turn-display-turns">
        <div>Total turns: {turnCounter}</div>
      </div>
    </div>
    </>
  );
};

export default RollDiceButton;