import React, { useCallback, useState } from 'react';
import * as S from './style';
import { MdAdd } from 'react-icons/md';

const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        e => {
            onInsert(value);

            setValue('');

            e.preventDefault();
        },
        [onInsert, value],
    );
    //classname= 
    return (
        <S.TodoInsert onSubmit={onSubmit}>
            <input
                placeholder="입력"
                value={value}
                onChange={onChange}
            />
            <button type="submit">
                <MdAdd />
            </button>
        </S.TodoInsert>
    )
}
export default TodoInsert;