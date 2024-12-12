import React from 'react';
import Todos from '../components/Todos';
import { connect } from 'react-redux';
import { changeInput,insert,toggle,remove } from '../modules/todos';

// const mapStateToProps=state=>({
//     input:state.todos.input,
//     todos:state.todos.todos,
// }) 이렇게도 가능

const TodoContainer = ({    
    input,
    todos,
    changeInput,
    insert,
    toggle,
    remove}) => {
    return (
        <div>
            <Todos input={input} todos={todos} onChangeInput={changeInput}
                onInsert={insert} onToggle={toggle} onRemove={remove}/>
        </div>
    );
};

export default connect(
    ({todos})=>({
        input:todos.input,
        todos:todos.todos
    }),{
        changeInput,insert,toggle,remove,
    },
)(TodoContainer);