import { createAction,handleActions } from 'redux-actions'

//액션타입정의
const INCREASE = 'counter/+'
const DECREASE = 'counter/-'

//액션함수정의
// export const increase=()=>({type:INCREASE})
export const increase=createAction(INCREASE)
export const decrease=()=>({type:DECREASE})

//초기값설정
const initialState={
    number:0
}

//리듀서함수
// function counter(state=initialState,action) {
//     switch(action.type){
//         case INCREASE:
//             return{
//                 number:state.number+1
//             }
//         case DECREASE:
//             return{
//                 number:state.number-1 
//             }
//         default:
//             return state
//     }
    
// }

const counter=handleActions({
    [INCREASE] : (state,action)=>({number:state.number+1}),
    [DECREASE] : (state,action)=>({number:state.number-1})
},initialState,)
export default counter;