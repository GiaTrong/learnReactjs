import { useDispatch, useSelector } from "react-redux";
import React from "react";
import {up, down, reset} from '../../actions/counter'
import Counter2 from "./Counter2";

function Counter() {
  const counter = useSelector((state) => {
    return state.counterReducer;
  });
  const dispatch = useDispatch();

    
  return (
    <>
        <h2>Counter: {counter}</h2>
        <button onClick={() => dispatch(up())}>UP</button>
        <button onClick={() => dispatch(down())}>DOWN</button>
        <button onClick={() => dispatch(reset())}>RESET</button>

        <h2> <Counter2 /></h2>
    </>
  )
}

export default Counter;
