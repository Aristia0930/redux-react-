import Counter from "../components/Counter";
import React from 'react';
import { decrease, increase } from './../modules/counter';
import { connect } from "react-redux";


const CounterContainers = ({number,increase,decrease}) => {
    return (
        <Counter number={number} onIncrease={increase} onDecrease={decrease}/>
    );
};

//컴포넌트를 리덕스와 연동하기 위해 connect라는 함수를 사용한다.,

//mapStateToProps는 리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위해 사용
const mapStateToProps=state=>({
    number:state.counter.number,
})

//mapDispatchToProps 액션함수를 넘겨주기 위해서 사용
const mapDispatchToProps=dispatch=>({
    increase:()=>{
        //액션함수와 연결해주면된다.
        console.log('increase')
        dispatch((increase()))
    },
    decrease:()=>{
        console.log('decrease')
        dispatch((decrease()))
    }

})
 
export default connect(mapStateToProps,mapDispatchToProps)(CounterContainers);