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
export const AuthContext = createContext();
const Stack = createStackNavigator();

LogBox.ignoreAllLogs()

const RootStack = () => {
    const isLoggedIn = useSelector(state => state.AuthReducer.userToken.token);
    return (
        <AuthContext.Provider value={isLoggedIn}>
            <Stack.Navigator screenOptions={ScreenOptions}>
                {getUserAccessToken() || isLoggedIn ?
                    <Stack.Screen name={'MainStack'} component={MainStack} /> :
                    <Stack.Screen name={'AuthStack'} component={AuthStack} />}
            </Stack.Navigator>
        </AuthContext.Provider>
    )
}

const Root = () => {
    React.useEffect(() => {
        setTimeout(() => {
            SplashScreen.hide();
        }, 1000);
    }, []);

    return (
        <Provider store={store}>
            <NavigationContainer>
                <RootStack />
            </NavigationContainer>
            <FlashMessage />
        </Provider>
    )
}

export default Root