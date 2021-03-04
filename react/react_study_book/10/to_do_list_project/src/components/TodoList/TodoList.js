import React from 'react';
import TodoListItem from './TodoListItem/TodoListItem';
import * as S from './style';

const TodoList = ({ todos, onRemove }) => {
    return (
        <S.TodoList>
            {todos.map(todo => (
                <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} />
            ))}
        </S.TodoList>
    )
}
export default TodoList;