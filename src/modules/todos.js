import { createAction,handleActions } from 'redux-actions'

//액션타입
const INPUT='INPUT'
const INSERT='INSERT'
const TOGGLE='TOGGLE'
const REMOVE='REMOVE'

//액션함수 만들기
// export const changeInput= input=>({
//     type:INPUT,
//     input
// })

export const changeInput=createAction(INPUT,input=>input)

let id=3
// export const insert= text=>({
//     type:INSERT,
//     todo:{
//         id:id++,
//         text,
//         done:false
//     }
// })
export const insert=createAction(INSERT,text=>(
    {
                id:id++,
                text,
                done:false
            
}))


// export const toggle= id=>({
//     type:TOGGLE,
//     id
// })
export const toggle=createAction(TOGGLE,id=>id)

export const remove= id=>({
    type:REMOVE,
    id
})

//초기상태
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

//리듀서함수
// function todos(state=initialState,action) {
//     switch(action.type){
//         case INPUT:
//             return{
//                 ...state,
//                 input:action.input
//             }
//         case INSERT:
//             return{
//                ...state,
//                todos:state.todos.concat(action.todo)
//             }
//         case TOGGLE:
//                 return{
//                    ...state,
//                    todos:state.todos.map(todo=>todo.id===action.id?{...todo,done:!todo.done}:todo)
//                 }
//         case REMOVE:
//                 return{
//                    ...state,
//                    todos:state.todos.filter(todo=>todo.id!==action.id)
//                 }
//         default:
//             return state
//     }
    
// }

const todos=handleActions({

    [INPUT]:(state,{payload:input})=>({...state,input}),
    [INSERT]:(state,{payload:todo})=>({...state, todos:state.todos.concat(todo)}),
    [TOGGLE]:(state,{payload:id})=>({...state,  todos:state.todos.map(todo=>todo.id===id?{...todo,done:!todo.done}:todo)}),
    [REMOVE]:(state,{payload:id})=>({...state,   todos:state.todos.filter(todo=>todo.id!==id)}),
},initialState)



export default todos;