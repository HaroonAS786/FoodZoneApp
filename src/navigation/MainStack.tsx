import { createStackNavigator } from "@react-navigation/stack";
import React from 'react';

import { ScreenOptions } from '../utils/anim';
import { Text, View } from "react-native";
import HomeScreen from "../screens/main/home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CustomTabBar from "../components/CustomTabBar";
import CartScreen from "../screens/main/cart";
import FoodMenuScreen from "../screens/main/menu";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <Tab.Navigator
            tabBar={props => <CustomTabBar {...props} />}
            screenOptions={ScreenOptions}>
            <Tab.Screen
                name={"HomeScreen"}
                component={HomeScreen} />
            <Tab.Screen
                name={"CartScreen"}
                component={CartScreen} />
        </Tab.Navigator>
    );
}


const MainStack = (): JSX.Element => {
    return (
        <Stack.Navigator screenOptions={ScreenOptions}>
            <Stack.Screen name={'BottomTabs'} component={BottomTabs} />
            <Stack.Screen name={'FoodMenuScreen'} component={FoodMenuScreen} />
        </Stack.Navigator>
    )
}

export default MainStack