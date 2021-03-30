import React, { useCallback, useEffect } from "react";
import Header from '../components/common/Header';
import { Logout } from "../lib/LOG";
import { useHistory } from "react-router";
import { checkIsLogin } from "../lib/REQUEST_API";

const PostListPage = () => {
    const history = useHistory();
    useEffect(() => {
        checkIsLogin().then(isLogin => {
            !isLogin && history.push("/login");
            alert(isLogin);
        });
    }, []);

    const onLogout = () => {
        try {
            Logout();
        }
        catch (error) {
            console.log(error);
        }
    }


    const username = "a";

    return (
        <>
            <Header username={username} onLogout={onLogout} />
            <div>
                {username}
            </div>
        </>)

}


export default PostListPage;
