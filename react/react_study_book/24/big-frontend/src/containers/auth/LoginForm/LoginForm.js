import React, { useCallback, useState } from "react";
import { withRouter } from 'react-router-dom';
import * as S from "./styles";
import { requestApiWithBodyWithoutToken } from "../../../lib/REQUEST_API";
import { Login } from "../../../lib/LOG";
import Button from '../../../components/common/Button'
const LoginForm = () => {
    const [localLoginForm, setLocalLoginForm] = useState({
        email: "",
        password: "",
    });
    const [isError, setIsError] = useState(false);

    const onChangeForm = useCallback(
        (e) => {
            setLocalLoginForm({
                ...localLoginForm,
                [e.target.name]: e.target.value,
            });
            console.log(localLoginForm);
        },
        [localLoginForm],
    );

    const onClickSubmitBtn = async () => {
        await requestApiWithBodyWithoutToken(
            "post",
            "/user/login",
            { email: localLoginForm.email, password: localLoginForm.password },
            {},
        ).then((res) => {
            switch (res.status) {
                case 200: {
                    console.log(res.data.accessToken);
                    Login(res.data.accessToken, res.data.refreshToken);
                }
                case 403: {
                    setIsError(true);
                }
            }
        });
    };

    return (
        <S.MainWrapper>
            <S.LoginWrapper>
                <S.LoginLabel>ID</S.LoginLabel>
                <S.LoginInput isError={isError} type="text" name="email" autoComplete="off" onChange={onChangeForm} />
                <S.LoginLabel>password</S.LoginLabel>
                <S.LoginInput isError={isError} type="password" name="password" onChange={onChangeForm} />
                <S.LoginErrorText isError={isError}>아이디 또는 패스워드가 일치하지 않습니다.</S.LoginErrorText>
                <S.LoginButton onClick={onClickSubmitBtn}>sign in</S.LoginButton>
            </S.LoginWrapper>
            <Button to="/login">sign up</Button>
        </S.MainWrapper>
    );
};

export default withRouter(LoginForm);