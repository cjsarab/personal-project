import React from 'react';

import Ones from './upper/Ones';
import Twos from './upper/Twos';
import Threes from './upper/Threes';
import Fours from './upper/Fours';
import Fives from './upper/Fives';
import Sixes from './upper/Sixes';
import TotalUpper from './upper/TotalUpper';
import Bonus from './upper/Bonus';

import ThreeOfAKind from './lower/ThreeOfAKind';
import FourOfAKind from './lower/FourOfAKind';
import FullHouse from './lower/FullHouse';
import SmallStraight from './lower/SmallStraight';
import LargeStraight from './lower/LargeStraight';
import Chance from './lower/Chance';
import Yahtzee from './lower/Yahtzee';
import TotalLower from './lower/TotalLower';
import GrandTotal from './lower/GrandTotal';

const ScoreCard = () => {
  return (
    <>
    <Ones />
    <Twos />
    <Threes />
    <Fours />
    <Fives />
    <Sixes />
    <TotalUpper />
    <Bonus />
    <br />
    <ThreeOfAKind />
    <FourOfAKind />
    <FullHouse />
    <SmallStraight />
    <LargeStraight />
    <Chance />
    <Yahtzee />
    <TotalLower />
    <GrandTotal />
    <br />
    </>
    );
};

export default ScoreCard;