import {createSlice} from '@reduxjs/toolkit'

//초기상태
const initialState ={
    number:0,
}

//슬라이스 만들기
const counterSlice= createSlice({
    //슬라이스의 이름
    name : 'counter',
    initialState,
    reducers:{
        increase:(state)=>{
            state.number+=1;
        },
        decrease:(state)=>{
            state.number-=1;
        },
        inputInint:(state,action)=>{
            state.number+=action.payload;
        }
    },
    
    

})

export const { increase, decrease, inputInint } = counterSlice.actions;
export default counterSlice.reducer;