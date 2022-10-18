import React from 'react'
import Lift1 from './Lift1';

const LiftShaft1 = ({floor}) => {
  return (
    <>
    <div className="lift-shaft-1">
        <Lift1 floor={floor}/>
    </div>
    </>
  )
}

export default LiftShaft1;