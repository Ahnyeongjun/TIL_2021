import React from "react";
import { Switch, Route } from "react-router-dom";
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';
import WritePage from './pages/WritePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const Routing = () => {
    return (
        <>
            <Route component={PostListPage} path={['/@:username', '/']} exact />
            <Route component={LoginPage} path="/login" />
            <Route component={RegisterPage} path="/register" />
            <Route component={WritePage} path="/write" />
            <Route component={PostPage} path="/@:username/:postId" />
        </>
    )
}

export default Routing;
