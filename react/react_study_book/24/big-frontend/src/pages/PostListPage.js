import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from '../components/common/Button';
import Header from '../components/common/Header';
import { getAuthInfoSaga } from "../modules/redux/auth";

const PostListPage = () => {
    const username = useSelector((state) => state.auth.username);

    const dispatch = useDispatch();

    const initAuthName = useCallback(() => {
        dispatch(getAuthInfoSaga());
    }, [dispatch]);


    useEffect(() => {
        initAuthName();
    }, []);
    if (username) {
        return (
            <>
                <Header username={username} />
                <div>
                    {username}
                </div>
            </>)
    }
    else {
        return (
            <>
                <Header />
                <div>
                    나야                </div>
            </>)
    }
}
export default PostListPage;
