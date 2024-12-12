

//액션타입
const INPUT='INPUT'
const INSERT='INSERT'
const TOGGLE='TOGGLE'
const REMOVE='REMOVE'

//액션함수 만들기
export const changeInput= input=>({
    type:INPUT,
    input
})

let id=2
export const insert= text=>({
    type:INSERT,
    todo:{
        id:id++,
        text,
        done:false
    }
})

export const toggle= id=>({
    type:TOGGLE,
    id
})

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
function todos(state=initialState,action) {
    switch(action.type){
        case INPUT:
            return{
                ...state,
                input:action.input
            }
        case INSERT:
            return{
               ...state,
               todos:state.todos.concat(action.todo)
            }
        case TOGGLE:
                return{
                   ...state,
                   todos:state.todos.map(todo=>todo.id===action.id?{...todo,done:!todo.done}:todo)
                }
        case REMOVE:
                return{
                   ...state,
                   todos:state.todos.filter(todo=>todo.id!==action.id)
                }
        default:
            return state
    }
    
}
export default todos;