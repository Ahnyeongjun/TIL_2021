import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md';
import * as S from './style';

const TodoListItem = ({ todo }) => {
    const { text, checked } = todo;

    return (
        <S.TodoListItem>
            <S.CheckBox>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <S.Text checked2={checked}>{text}</S.Text>
            </S.CheckBox>
            <S.Remove>
                <MdRemoveCircleOutline />
            </S.Remove>
        </S.TodoListItem>
    )
};
export default TodoListItem;