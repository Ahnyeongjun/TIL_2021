import client from './client'

export const login = ({ username, password }) =>
    client.post(' http://localhost:5000/user/login', { username, password });

export const register = ({ email, password, name }) =>
    client.post('http://localhost:5000/user/register', { email, password, name });

export const refresh = (token) =>
    client.post('/auth/refresh', token);

export const check = () =>
    client.get('/auth/check');