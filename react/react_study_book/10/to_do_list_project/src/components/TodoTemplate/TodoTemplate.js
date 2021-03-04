import React from 'react';
import * as S from './style';

const TodoTemplate = ({ children }) => {
    return (
        <S.TodoTemplate>
            <S.AppTitle>일정관리</S.AppTitle>
            <S.Content>{children}</S.Content>
        </S.TodoTemplate>
        // <div className="TodoTemplate">
        // <div className="app-title"> 일정관리</div>
        // <div className="content">{children}</div>
        // </div>
    )
}
export default TodoTemplate;