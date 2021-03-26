import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate/AuthTemplate';
import RegisterForm from '../containers/auth/RegisterForm';

const RegisterPage = () => {
    return (
        <AuthTemplate>
            <RegisterForm />
        </AuthTemplate>
    )
}
export default RegisterPage;
