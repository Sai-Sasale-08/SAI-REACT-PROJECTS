import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddToCounter, ReduceToCounter } from '../Counter/action';

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector((store)=> store.CounterReducer.counter)
  return (
    <div style={{border:"2px solid", padding:"20px 60px", marginTop:"20px"}}>
      <h1 style={{textAlign:"center"}}>Counter</h1>
      <h1 style={{textAlign:"center"}}>{counter}</h1>
      <button onClick={()=>dispatch(AddToCounter(1))}>INCREMENT</button>
      <button onClick={()=>dispatch(ReduceToCounter(1))}>DECREMENT</button>
    </div>
  )
}

export default Counter