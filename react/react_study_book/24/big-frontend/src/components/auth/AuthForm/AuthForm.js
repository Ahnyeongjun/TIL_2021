import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../common/Button';
import * as S from './style'

/**
 * 회원가입 또는 로그인 폼을 보여줍니다.
 */
const textMap = {
  login: '로그인',
  register: '회원가입'
};

const AuthForm = ({ type, form, onChange, onSubmit, error }) => {
  const text = textMap[type];
  return (
    <S.AuthFormBlock>
      <h2>{text}</h2  >
      <form onSubmit={onSubmit}>
        <S.StyledInput
          autoComplete="username"
          name="username"
          placeholder="아이디"
          onChange={onChange}
          value={form.username}
        />
        <S.StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
          onChange={onChange}
          value={form.password}
        />
        {type === 'register' && (
          <S.StyledInput
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            type="password"
            onChange={onChange}
            value={form.passwordConfirm}
          />
        )}
        <Button cyan fullWidth style={{ marginTop: '1rem' }}>
          {text}
        </Button>
      </form>
      <S.Footer>
        {type === 'login' ? (
          <Link to="/register">회원가입</Link>
        ) : (
          <Link to="/Login">로그인</Link>
        )}
      </S.Footer>
    </S.AuthFormBlock>
  );
};

export default AuthForm;