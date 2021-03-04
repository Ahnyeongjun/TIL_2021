import React from 'react';
import * as S from './style';
const TodoTemplate = ({ children }) => {
    return (
        <S.TodoTemplate>
            <S.app_title>일정관리</S.app_title>
            <S.content_a>{children}</S.content_a>
        </S.TodoTemplate>
        // <div className="TodoTemplate">
        // <div className="app-title"> 일정관리</div>
        // <div className="content">{children}</div>
        // </div>
    )
}
export default TodoTemplate;