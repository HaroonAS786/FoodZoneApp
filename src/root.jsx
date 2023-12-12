import { NavigationContainer } from "@react-navigation/native";
import React from 'react';
import { LogBox } from "react-native";
import { Provider } from "react-redux";

import { FlashMessage } from "./components/FlashMessage";
import AuthProvider from "./providers/AuthProvider";
import store from "./redux/store";

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