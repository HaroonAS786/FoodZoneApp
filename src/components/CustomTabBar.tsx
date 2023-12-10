import React, { useCallback } from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";

import { IMAGES } from "../assets/images";
import { themeColors } from "../config/colors";
import { CustomTabBarProps } from "../utils/types";
import CustomText from "./CustomText";
import Spacer from "./Spacer";

const CustomTabBar: React.FC<CustomTabBarProps> = ({ state, descriptors, navigation }) => {
    const getIcon = (name: string) => {
        switch (name) {
            case "HomeScreen":
                return IMAGES.homeIcon
            case "CartScreen":
                return IMAGES.cartIcon
        }
    };

    const getName = (name: string) => {
        switch (name) {
            case "HomeScreen":
                return "Home";
            case "CartScreen":
                return "Cart";
        }
    };

    const renderTab = useCallback(
        (route: any, index: number) => {
            const isFocused = state.index === index;

            const onPress = () => {
                const event = navigation.emit({
                    type: 'tabPress',
                    target: route.key,
                });

                if (!isFocused && !event.defaultPrevented) {
                    navigation.navigate(route.name);
                }
            };
            return (
                <View key={index} style={[styles.button]}>
                    <Pressable style={{ justifyContent: "center", alignItems: "center" }} onPress={onPress}>
                        <Image tintColor={isFocused ? '#FFAC1C' : '#5E5E5E'} source={getIcon(route.name)} style={{ width: 24, height: 24 }} />
                    </Pressable>
                    <Spacer height={8} />
                    <CustomText body2 color={isFocused ? '#FFAC1C' : '#5E5E5E'} titiliumSemiBold>
                        {getName(route.name)}
                    </CustomText>
                </View>
            );
        },
        [state]
    );

    return <View style={styles.mainContainer}>{state.routes.map((route: any, index: number) => renderTab(route, index))}</View>;
};

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        backgroundColor: themeColors.white,
        padding: 10,
        borderColor: themeColors.black400,
        borderWidth: .2,
        borderBottomWidth: 0
    },
    button: {
        flex: 1,
        backgroundColor: themeColors.white,
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
    },
});

export default CustomTabBar;
