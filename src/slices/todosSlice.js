import {createSlice} from '@reduxjs/toolkit'
import { act } from 'react';

const initialState={
    input:'',
    todos:[
        {
            id:1,
            text:"리덕스사용기",
            done:true
        },
        {
            id:2,
            text:"리듀서함수",
            done:false
        }
    ]
}

let id=3;
const todosSlice=createSlice({
    name:'todos',
    initialState,
    reducers:{
        changeInput:(state,action)=>{
            state.input=action.payload

        },
        insert:(state,action)=>{
            const newTodo={
                id:id++,
                text:action.payload,
                done:false
            }
            state.todos.push(newTodo)
        },
        toggle:(state,action)=>{
            state.todos=state.todos.map(todo=>todo.id===action.payload?{...todo,done:!todo.done}:todo)
        },
        remove:(state,action)=>{
            state.todos=state.todos.filter(todo=>todo.id!==action.payload)
        }
    }

})

export const { changeInput, insert, toggle ,remove} = todosSlice.actions;
export default todosSlice.reducer;