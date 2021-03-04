import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md';
import * as S from './style';
import './TodoListItem.scss';
import cn from 'classnames';

const TodoListItem = ({ todo }) => {
    const { text, checked } = todo;

    return (
        <div className="TodoListItem">
            <S.CheckBox>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <S.Text checked2={checked}>{text}</S.Text>
            </S.CheckBox>
            <S.Remove>
                <MdRemoveCircleOutline />
            </S.Remove>
        </div>
    )
};
export default TodoListItem;