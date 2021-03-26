import React from 'react';
import * as S from './style';
/**
 * 회원가입 / 로그인 페이지의 레이아웃을 담당하는 컴포넌트입니다.
 */

const AuthTemplate = ({ children }) => {
  return (
    <S.AuthTemplateBlock>
      <S.ExplainBox>
        <div className="title">
          title
        </div>
        <div className="content">
          contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent
        </div>
      </S.ExplainBox>
      <S.WhiteBox >
        {children}
      </S.WhiteBox>

    </S.AuthTemplateBlock >
  );
};

export default AuthTemplate