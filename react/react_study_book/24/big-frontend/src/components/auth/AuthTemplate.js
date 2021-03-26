import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

/**
 * 회원가입 / 로그인 페이지의 레이아웃을 담당하는 컴포넌트입니다.
 */

/* 화면 전체를 채움 */
const AuthTemplateBlock = styled.div`
  position: absolute;

  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: ${palette.gray[2]};
  /* flex로 내부 내용 중앙 정렬 */
  display: grid;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-template-columns:1.5fr 1fr;
`;

/* 흰색 박스 */
const WhiteBox = styled.div`
  display:block;

  .logo-area {
    display: block;
    font-size:2rem;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 0.2rem;
  }
  width:80%;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  margin:2rem;
  background: white;
  border-radius: 2rem;
`;

const ExplainBox = styled.div`
  display:block;  
  .title{
    display:block;
    font-size:5rem;
    text-align:left;
  }
  .content{
    padding-bottom:20rem;
    display:block;
    font-size:2rem;
    text-align:left;
    word-break:break-all;
  }
  width:100%;
  opacity:1; 
  padding: 5rem;
`;
const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <ExplainBox>
        <div className="title">
          title
        </div>
        <div className="content">
          contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent
        </div>

      </ExplainBox>

      <WhiteBox >
        {children}
      </WhiteBox>

    </AuthTemplateBlock >
  );
};

export default AuthTemplate;