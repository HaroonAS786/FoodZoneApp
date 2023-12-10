import { createStackNavigator } from "@react-navigation/stack";
import React from 'react';

import { ScreenOptions } from '../utils/anim';
import LoginScreen from "../screens/authentication/login";
import SignUpScreen from "../screens/authentication/signUp";

const Stack = createStackNavigator();

const AuthStack = (): JSX.Element => {
    return (
        <Stack.Navigator screenOptions={ScreenOptions} initialRouteName="LoginScreen">
            <Stack.Screen name={'LoginScreen'} component={LoginScreen} />
            <Stack.Screen name={'SignUpScreen'} component={SignUpScreen} />
        </Stack.Navigator>
    )
}

export default AuthStack