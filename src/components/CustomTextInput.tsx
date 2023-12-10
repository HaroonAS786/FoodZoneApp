import React, { useCallback } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";

import { ErrorIcon, SuccessIcon } from "../assets/svgs";
import { themeColors } from "../config/colors";
import { CustomTextInputProps } from "../utils/types";
import CustomText from "./CustomText";
import Spacer from "./Spacer";

const CustomTextInput: React.FC<CustomTextInputProps> = ({
    label,
    placeholder,
    onChangeText,
    maxLength = 50, //by default 50 characters
    password = false,
    errors = [],
    success = [],
    value = undefined,
    onBlur,
    inputStyle,
    numberOfLines,
    multiline,
    autoCapitalize,
    keyboardType,
    rightIcon,
    rightIconPress,
}) => {
    const RenderMsg = useCallback(({ msg, isError }: { msg: string; isError?: boolean }) => {
        return (
            <Animated.View style={styles.msgBox}>
                {isError ? <ErrorIcon /> : <SuccessIcon />}
                <CustomText style={{ marginLeft: 4 }} color={themeColors.black}>
                    {msg}
                </CustomText>
            </Animated.View>
        );
    }, [errors, success]);

    return (
        <View>
            {label && <CustomText body medium color={themeColors.black}>{label}</CustomText>}
            <Spacer height={6} />
            <View style={[styles.mainWrap]}>
                <TextInput
                    value={value}
                    maxLength={maxLength}
                    placeholder={placeholder}
                    placeholderTextColor={themeColors.black}
                    style={[styles.container, inputStyle]}
                    onChangeText={onChangeText}
                    secureTextEntry={password}
                    onBlur={onBlur}
                    multiline={multiline}
                    keyboardType={keyboardType}
                    numberOfLines={numberOfLines}
                    autoCapitalize={autoCapitalize}
                />
                <TouchableOpacity onPress={rightIconPress} activeOpacity={0.6}>
                    {rightIcon}
                </TouchableOpacity>
            </View>
            {errors.map((msg) => (
                <RenderMsg key={msg} msg={msg} isError />
            ))}
            {success.map((msg) => (
                <RenderMsg key={msg} msg={msg} />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    mainWrap: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#F3F3F3",
        borderRadius: 8,
        height: 48,
        paddingHorizontal: 12,
    },
    container: {
        justifyContent: "center",
        alignItems: "center",
        color: themeColors.black,
        backgroundColor: "#F3F3F3",
        width: "60%",
        borderRadius: 8,
    },
    msgBox: {
        marginTop: 10,
        marginLeft: 4,
        flexDirection: "row",
        alignItems: "center",
    },
});

export default CustomTextInput;
