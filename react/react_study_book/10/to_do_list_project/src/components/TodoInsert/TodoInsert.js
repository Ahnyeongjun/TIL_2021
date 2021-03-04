import React from 'react';
import * as S from './style';
import { MdAdd } from 'react-icons/md';

const TodoInsert = () => {
    return (
        <S.TodoInsert>
            <input placeholder="입력" />
            <button type="submit">
                <MdAdd />
            </button>
        </S.TodoInsert>
    )
}
export default TodoInsert;