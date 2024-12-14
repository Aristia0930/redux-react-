import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  increase, decrease, inputInint } from '../slices/counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.number); // Redux 상태 가져오기
  const dispatch = useDispatch(); // dispatch 함수 가져오기

  return (
    <div>
      <h1>Redux Toolkit Counter</h1>
      <div>
        <button onClick={() => dispatch(increase())}>Increment</button>
        <button onClick={() => dispatch(decrease())}>Decrement</button>
        <button onClick={() => dispatch(inputInint(5))}>Increment by 5</button>
      </div>
      <p>Count: {count}</p>
    </div>
  );
}


export default Counter;
