//액션타입정의
const INCREASE = 'counter/+'
const DECREASE = 'counter/-'

//액션함수정의
export const increase=()=>({type:INCREASE})
export const decrease=()=>({type:DECREASE})

//초기값설정
const initialState={
    number:0
}

//리듀서함수
function counter(state=initialState,action) {
    switch(action.type){
        case INCREASE:
            return{
                number:state.number+1
            }
        case decrease:
            return{
                number:state.number-1 
            }
        default:
            return state
    }
    
}
export default counter;