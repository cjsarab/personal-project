import React, { useState, useEffect } from 'react';

import RollDiceButton from '../components/dice/RollDiceButton';
import DiceDisplay from '../components/dice/DiceDisplay';
import ScoreCard from '../components/scorecard/ScoreCard';

import YahtzeeService from '../services/YahtzeeService'; 

const MainContainer = () => {

    const [currentRoll, setCurrentRoll] = useState([null, null, null, null, null])
    const [lockedDice, setLockedDice] = useState([false, false, false, false, false])
    const [rollsThisTurn, setRollsThisTurn] = useState(0)

    useEffect(() => {
        YahtzeeService.getRolls()
        .then(data => setCurrentRoll(data[0].roll))
      }, [])

    
    
    
    const rollDice = () => {
      const tempDice = currentRoll;
      for (let i = 0; i < lockedDice.length; i++) {
        if (lockedDice[i] === false) {
            const roll = 1 + Math.floor(Math.random() * 6);
            tempDice[i] = roll;
        }
      }
      const tempArray = [tempDice[0], tempDice[1], tempDice[2], tempDice[3], tempDice[4]];
      setCurrentRoll(tempArray);
    };





  return (
    <>
    <RollDiceButton
    rollDice={rollDice}/>
    <DiceDisplay
     currentRoll={currentRoll}/>
    <ScoreCard />
    </>
  );
};

export default MainContainer;