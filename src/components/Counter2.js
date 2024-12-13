import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease } from '../modules/counter';

//useSelect useDispatch를 이용하여 바로작성성
const Counter2 = () => {
    const number=useSelector((state)=>state.counter.number)
    const dispatch=useDispatch();
    return (
        <div>
            <h1>{number}</h1>
            <div>
            <button onClick={() => dispatch(increase())}>+1</button>
            <button onClick={() => dispatch(decrease())}>-1</button>
            </div>
        </div>
    );
};

export default Counter2;
