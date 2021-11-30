import React, { useCallback, useState } from "react";
import { withRouter } from 'react-router-dom';
import * as S from "./styles";
import { requestApiWithBodyWithoutToken } from "../../../lib/REQUEST_API";
import { Login } from "../../../lib/LOG";
import Button from '../../../components/common/Button'
const RegisterForm = () => {
    const [localLoginForm, setLocalLoginForm] = useState({
        email: "",
        password: "",
        passwordConfirm: "",
        name: "",
    });
    const [isError, setIsError] = useState({
        id: false,
        nickname: false,
        password: false,
        passwordConfirm: false,
    });

    const [errorText, setErrorText] = useState({
        id: "",
        nickname: "",
        password: "",
        passwordConfirm: "",
    });

    const [isOkay, setIsOkay] = useState({
        id: false,
        nickname: false,
    });

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
                case 409: {
                    alert("이미 가입된 정보입니다.");
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
                <S.FormButton name="id" onClick={onChangeForm}>
                    중복확인
						</S.FormButton>
                <S.LoginLabel>name</S.LoginLabel>
                <S.LoginInput isError={isError} type="name" name="name" onChange={onChangeForm} />
                <S.LoginLabel>password</S.LoginLabel>
                <S.LoginInput isError={isError} type="password" name="password" onChange={onChangeForm} />
                <S.LoginLabel>passwordConfirm</S.LoginLabel>
                <S.LoginInput isError={isError} type="passwordConfirm" name="passwordConfirm" onChange={onChangeForm} />
                <S.LoginErrorText isError={isError}>아이디 또는 패스워드가 일치하지 않습니다.</S.LoginErrorText>
                <S.LoginButton onClick={onClickSubmitBtn}>sign up</S.LoginButton>
            </S.LoginWrapper>
            <Button to="/login">sign in</Button>
        </S.MainWrapper>
    );
};

export default withRouter(RegisterForm);