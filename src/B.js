import React from 'react'
import C from './C'
import { PowerContext } from './App'
const B =()=> {
    // same steps as done in C
    return (
      <div>
        Component B
        <PowerContext.Consumer>
            {(power)=>{return <h1>{power}</h1>}}
        </PowerContext.Consumer>
        <C/>
      </div>
    )
  
}

export default B;
