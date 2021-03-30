import React, { useCallback, useState } from "react";
import { withRouter } from 'react-router-dom';
import * as S from "./styles";
import { useDispatch } from "react-redux";
import { loginActionCreater } from "../../../modules/action/login";
import Button from '../../../components/common/Button'
const LoginForm = () => {
    const dispatch = useDispatch();
    const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: "",
    });
    const [isError, setIsError] = useState(false);

    const changeLoginInfo = useCallback(e => {
        const { name, value } = e.target;
        setLoginInfo(prev => ({
            ...prev,
            [name]: value
        }));
    }, []);


    const requestLogin = useCallback(
        e => {
            e.preventDefault();
            dispatch(loginActionCreater.requestLogin(loginInfo));
        },
        [loginInfo]
    );

    return (
        <S.MainWrapper>
            <S.LoginWrapper>
                <S.LoginLabel>ID</S.LoginLabel>
                <S.LoginInput isError={isError} type="text" name="email" autoComplete="off" onChange={changeLoginInfo} />
                <S.LoginLabel>password</S.LoginLabel>
                <S.LoginInput isError={isError} type="password" name="password" onChange={changeLoginInfo} />
                <S.LoginErrorText isError={isError}>아이디 또는 패스워드가 일치하지 않습니다.</S.LoginErrorText>
                <S.LoginButton onClick={requestLogin}>sign in</S.LoginButton>
            </S.LoginWrapper>
            <Button to="/login">sign up</Button>
        </S.MainWrapper>
    );
};

export default withRouter(LoginForm);