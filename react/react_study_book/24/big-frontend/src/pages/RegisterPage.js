import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate/AuthTemplate';
import RegisterForm from '../containers/auth/RegisterForm/RegisterForm';

const RegisterPage = () => {
    return (
        <AuthTemplate
            type="Register">
            <RegisterForm />
        </AuthTemplate>
    )
}
export default RegisterPage;
