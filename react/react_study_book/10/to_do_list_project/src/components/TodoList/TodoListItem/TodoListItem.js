import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md';
import * as S from './style';

const TodoListItem = ({ todo, onRemove, onToggle }) => {
    const { id, text, checked } = todo;

    return (
        <S.TodoListItem>
            <S.CheckBox onClick={() => onToggle(id)} checked2={checked}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <S.Text checked2={checked}>{text}</S.Text>
            </S.CheckBox>
            <S.Remove onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline />
            </S.Remove>
        </S.TodoListItem>
    )
};
export default React.memo(TodoListItem);