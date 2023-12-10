import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { themeColors } from "../config/colors";
import CustomText from "./CustomText";
import { FlashMessageProps } from "../utils/types";



const FlashNotification = {
    show: (message: string, type = 'default', long = false) => {
        (global as any).flashMessageRef(message, type, long);
    }
}

const FlashMessage: React.FC<FlashMessageProps> = () => {
    const animValue = useSharedValue(0);
    const animStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: interpolate(animValue.value, [0, 1], [-100, 52]) }],
            opacity: interpolate(animValue.value, [0, 1], [0, 1]),
        }
    });

    const [text, setText] = useState("");
    const [messageType, setMessageType] = useState("default");

    const show = (message: string, type: string, long: boolean) => {
        setText(message);
        setMessageType(type);
        animValue.value = withTiming(1, { duration: 500 });
        setTimeout(() => {
            animValue.value = withTiming(0, { duration: 500 });
            setTimeout(() => {
                setText("");
                setMessageType("default");
            }, 1000);
        }, long ? 4000 : 2000);
    }

    useEffect(() => {
        (global as any).flashMessageRef = show;
    }, []);

    return !!text && (
        <Animated.View style={[styles.container, { backgroundColor: getBackgroundColor(messageType) }, animStyle]}>
            <CustomText titiliumSemiBold>{text}</CustomText>
        </Animated.View>
    );
}

const getBackgroundColor = (type: string): string => {
    switch (type) {
        case 'success':
            return "#008000";
        case 'error':
            return "red";
        // Add more cases for different message types
        default:
            return themeColors.primary;
    }
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        padding: 20,
        left: 10,
        right: 10,
        borderRadius: 10,
    }
});

export {
    FlashMessage
}

export default FlashNotification;
