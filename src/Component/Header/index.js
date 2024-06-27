import * as h from './headerStyle.js';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth/authProvider.js';
import React from 'react';
import ImportProfile from './importProfile.js';

const Header = () => {
    const navigate = useNavigate();
    const {isLogin, logoutHandler} = useAuth();

    const loginHandler = () => {
        navigate('/login');
    }

    const mainhandler = () => {
        navigate('/');
    }

    return (
        <h.headerContainer>
            <h.header>
                <h.h1 onClick={mainhandler}>아무 말 대잔치</h.h1>
                {isLogin ? (
                    <>
                        <ImportProfile/>
                        <h.btn onClick={logoutHandler}>LOGOUT</h.btn>
                    </>
                ):(
                    <h.btn onClick={loginHandler}>LOGIN</h.btn>
                )}
            </h.header>
            <h.hr/>
        </h.headerContainer>
    )
}

export default Header;