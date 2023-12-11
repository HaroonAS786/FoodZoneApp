import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { createContext } from 'react';
import { LogBox } from "react-native";
import SplashScreen from "react-native-splash-screen";
import { Provider, useSelector } from "react-redux";

import { FlashMessage } from "./components/FlashMessage";
import AuthStack from "./navigation/AuthStack";
import MainStack from "./navigation/MainStack";
import store from "./redux/store";
import { ScreenOptions } from "./utils/anim";
import { getUserAccessToken } from "./utils/storage";
import AuthProvider from "./providers/AuthProvider";
export const AuthContext = createContext();
const Stack = createStackNavigator();

LogBox.ignoreAllLogs()

const Root = () => {
 
    return (
        <Provider store={store}>
            <NavigationContainer>
               <AuthProvider/>
            </NavigationContainer>
            <FlashMessage />
        </Provider>
    )
}

export default Root