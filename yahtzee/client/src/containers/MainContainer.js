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

      YahtzeeService.addRoll(currentRoll)
    };

    const toggleLockDice = (i) => {
            const tempBoolObject = lockedDice
            const tempBoolArray = [tempBoolObject[0], tempBoolObject[1], tempBoolObject[2], tempBoolObject[3], tempBoolObject[4]];
            const bool = !tempBoolObject[i]
            tempBoolArray.splice(i, 1, bool)
            setLockedDice(tempBoolArray)
        };



  return (
    <>
    <RollDiceButton
    rollDice={rollDice}/>
    <DiceDisplay
     currentRoll={currentRoll}
     toggleLockDice={toggleLockDice}/>
    <ScoreCard />
    </>
  );
};

export default MainContainer;