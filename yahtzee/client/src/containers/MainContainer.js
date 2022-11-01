import React, { useState, useEffect } from 'react';

import RollDiceButton from '../components/dice/RollDiceButton';
import DiceDisplay from '../components/dice/DiceDisplay';
import ScoreCard from '../components/scorecard/ScoreCard';

import YahtzeeService from '../services/YahtzeeService'; 

const MainContainer = () => {

    const [currentRoll, setCurrentRoll] = useState([null, null, null, null, null])
    const [lockedDice, setLockedDice] = useState([false, false, false, false, false])
    const [rollsThisTurn, setRollsThisTurn] = useState(0)
    const [turnCounter, setTurnCounter] = useState(0)
    const [score, setScore] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])

    useEffect(() => {
        YahtzeeService.getRolls()
        .then(data => setCurrentRoll(data[0].roll))
      }, []);


    
    const rollDice = () => {
      const tempDice = currentRoll;
      for (let i = 0; i < lockedDice.length; i++) {
        if (lockedDice[i] === false) {
            const roll = 1 + Math.floor(Math.random() * 6);
            tempDice[i] = roll;
        };
      };
      const tempArray = [tempDice[0], tempDice[1], tempDice[2], tempDice[3], tempDice[4]];

      setCurrentRoll(tempArray);
      setRollsThisTurn(rollsThisTurn+1);

      YahtzeeService.addRoll(currentRoll);
    };

    const toggleLockDice = (i) => {
        const tempBoolObject = lockedDice;
        const tempBoolArray = [tempBoolObject[0], tempBoolObject[1], tempBoolObject[2], tempBoolObject[3], tempBoolObject[4]];
        const bool = !tempBoolObject[i];
        tempBoolArray.splice(i, 1, bool);

          setLockedDice(tempBoolArray);
    };

    const endTurn = () => {
      setRollsThisTurn(0);
      setLockedDice([false, false, false, false, false]);
      setTurnCounter(turnCounter+1);
    };
      
    const addNumbers = (total, num) => {
          return total + num;
    };
    
    const pushScore = (calculatedScore) => {
      const tempArray = [calculatedScore[0], calculatedScore[1], calculatedScore[2], calculatedScore[3],
      calculatedScore[4], calculatedScore[5], calculatedScore[6], calculatedScore[7], calculatedScore[8],
      calculatedScore[9], calculatedScore[10], calculatedScore[11], calculatedScore[12], calculatedScore[13],
      calculatedScore[14], calculatedScore[15], calculatedScore[16]];

      setScore(tempArray);
    };

    const endGame = () => {
      const finalScore = (score[16]);
      console.log(finalScore); //Can be removed
      YahtzeeService.addScore(score[16]);
    };


  return (
    <>
    <div className="game-container">

      <div className="roll-dice-button">
        <RollDiceButton
        rollsThisTurn={rollsThisTurn}
        turnCounter={turnCounter}
        rollDice={rollDice}
        endTurn={endTurn}/>
      </div>

      <div className="dice-display">
        <DiceDisplay
        currentRoll={currentRoll}
        lockedDice={lockedDice}
        turnCounter={turnCounter}
        score={score}
        toggleLockDice={toggleLockDice}
        endGame={endGame}/>
      </div>

      <div className="scorecard">
        <ScoreCard 
        currentRoll={currentRoll}
        score={score}
        pushScore={pushScore}
        addNumbers={addNumbers}
        endTurn={endTurn}/>
      </div>
      
    </div>

    </>
  );
};

export default MainContainer;