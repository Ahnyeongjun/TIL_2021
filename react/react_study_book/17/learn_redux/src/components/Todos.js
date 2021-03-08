import React from 'react';

const TodoItem = ({ todo, onToggle, onRemover }) => {
    return (
        <div>
            <input type="checkbox" />
            <span>예제</span>
            <button>삭제</button>
        </div>
    )
}

const Todos = ({
    input,
    todos,
    onChangeInput,
    onInsert,
    onToggle,
    onRemove,
}) => {
    const onSubmit = e => {
        e.preventDefault();
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input />
                <buttom type="submit">등록</buttom>
            </form>
            <div>
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </div>
        </div >
    );
};

export default Todos;