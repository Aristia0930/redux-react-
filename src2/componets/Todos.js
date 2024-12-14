import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {   changeInput, insert, toggle ,remove } from '../slices/todosSlice';

const TodoItem = ({todo}) => {
    const dispatch = useDispatch(); // dispatch 함수 가져오기
    return (
        <div>
            <input type='checkbox'
            onClick={()=>dispatch(toggle(todo.id))}
            checked={todo.done}
            readOnly={true}
            />
            <span style={{textDecoration : todo.done ? 'line-through':'none'}}>
                {todo.text}</span>
            <button onClick={()=> dispatch(remove(todo.id))}>삭제</button>
            
        </div>
    );
};

const Todos = ()=>{
    const todos=useSelector((state)=>state.todos.todos)
    const input=useSelector((state)=>state.todos.input)
    const dispatch = useDispatch(); // dispatch 함수 가져오기
    


    const onSubmit = e =>{
        e.preventDefault()
        dispatch(insert(input))
        dispatch(changeInput(""))

    }
    const onChange = e => dispatch(changeInput((e.target.value)))
    
    return(
        <div>
            <form onSubmit={onSubmit}>
                <input value={input} onChange={onChange}/>
                <button type='submit'> 등록</button>
            </form>
            {todos.map(todo=>(
                <TodoItem todo={todo} key={todo.id}/>
            ))}

        </div>
    )
}
export default Todos;