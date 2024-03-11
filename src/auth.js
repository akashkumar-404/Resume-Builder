// auth.js
import { useEffect, useState } from 'react';
import { getLogIn, setLogIn, setlogOut } from './Utils/common';

export function useAuth() {
    //   const [isLoggedIn, setIsLoggedIn] = useState(false);


    const login = (username, password) => {

        // debugger
        if (username === 'admin' && password === 'password') {
            setLogIn()
        }
        if (username !== 'admin' && password !== 'password') {
            setlogOut();
        }
    };

    const logout = () => {

        setlogOut();
    };

    return {
        login,
        logout
    };
}
