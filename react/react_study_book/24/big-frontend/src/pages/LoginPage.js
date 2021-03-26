import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate/AuthTemplate';
import LoginForm from '../containers/auth/LoginForm';

const LoginPage = () => {
    return (
        <AuthTemplate
            type="Login"
        >
            <LoginForm />
        </AuthTemplate>
    )
}
export default LoginPage;
