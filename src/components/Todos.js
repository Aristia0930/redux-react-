import React from 'react';

const TodoItem = ({todo,onToggle,onRemove}) => {
    return (
        <div>
            <input type='checkbox'/>
            <span>예제 테스트</span>
            <button>삭제</button>
            
        </div>
    );
};

const Todos = ({
    input,
    todos,
    onChangeInput,
    onInsert,
    onToggle,
    onRemove,

})=>{
    const onSubmit = e =>{
        e.preventDefalut()
    }
    
    return(
        <div>
            <form onSubmit={onSubmit}>
                <input />
                <button type='submit'> 등록</button>
            </form>
            <TodoItem/>
            <TodoItem/>
        </div>
    )
}
export default Todos;