
import React, { useReducer, useRef } from 'react';
const reducer = (state,action) =>{
    switch(action){
        case 'increament':
            return state+1
        case 'decreament':
            return state-1
        default:
            return state
    }
}
const Counter = (props)=>{
    const InitialState = props.count;
    const [currentState,dispatch] = useReducer(reducer,InitialState);
    const InputRef = useRef(null);
    const textChange = ()=>{
        const rand = Math.floor(Math.random() * 100);
        InputRef.current.value = rand%2 == 1 ? "You Will Successed": "You Will Fail";
    }
    return (
        <>
        <h1>This is Counter</h1>
        <p>Count : {currentState}</p>
        <button onClick={()=>dispatch('increament')}>Click me to Increase the count</button>
        <button onClick={()=>dispatch('decreament')}>Click me to Decrease the count</button>
        <input type="text" placeholder='Enter Your Life Mission Here' ref={InputRef}/>
        <button onClick={textChange}>Click to Know Your Fortune</button>
        </>
    )
}

export default Counter;