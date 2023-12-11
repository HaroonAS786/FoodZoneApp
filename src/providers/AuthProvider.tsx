import React, { createContext, useEffect } from "react";
import SplashScreen from "react-native-splash-screen";
import { useDispatch, useSelector } from "react-redux";

import { getUserAccessToken } from "../utils/storage";
import { continueSession, signOut } from "../redux/actions";
import MainStack from "../navigation/MainStack";
import AuthStack from "../navigation/AuthStack";
// Update this import based on your actual types

export const AuthContext = createContext<any>(null);

const AuthProvider: React.FC = () => {
    const dispatch = useDispatch();
    const authState = useSelector((state: any) => state.AuthReducer);

    useEffect(() => {
        setTimeout(() => {
            SplashScreen.hide();
        }, 5000);
        const handleNav = () => {
            const userToken = getUserAccessToken();
            if (userToken) {
                dispatch(continueSession(userToken));
            } else {
                dispatch(signOut());
            }
        };
        handleNav();
    }, [dispatch]);

    return (
        <AuthContext.Provider value={authState}>
            {authState?.isLogged ? <MainStack /> : <AuthStack />}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
