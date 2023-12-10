import React, { ReactNode } from "react";
import { ActivityIndicator, StyleSheet, TouchableOpacity, ViewStyle } from "react-native";

import { themeColors } from "../config/colors";
import CustomText from "./CustomText";
import { CustomButtonProps } from "../utils/types";

const CustomButton: React.FC<CustomButtonProps> = ({
    label,
    onPress,
    disabled,
    textOnly = false,
    caption = false,
    buttonContainerStyle = {},
    rightIcon,
    buttonTextColor,
    titilium = false,
    body2 = false,
    iconLeft,
    btnTextStyle,
    buttonDisabledBG,
    buttonDisabledTextColor,
    loading,
}) => {
    return (
        <TouchableOpacity
            disabled={loading || disabled}
            onPress={onPress}
            activeOpacity={0.8}
            style={[
                styles.container,
                textOnly && { backgroundColor: undefined },
                buttonContainerStyle,
                disabled && { backgroundColor: buttonDisabledBG || themeColors.buttonDisabled },
            ]}>
            <>
                {loading ? (
                    <ActivityIndicator color={themeColors.white} />
                ) : (
                    <>
                        {iconLeft}
                        {label && (
                            <CustomText
                                button
                                semiBold
                                style={btnTextStyle}
                                caption={caption}
                                body2={body2}
                                titiliumSemiBold
                                titilium={titilium}
                                color={disabled ? buttonDisabledTextColor || themeColors.buttonDisabledText : buttonTextColor}
                            >
                                {label}
                            </CustomText>
                        )}
                        {rightIcon}
                    </>
                )}
            </>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 54,
        backgroundColor: themeColors.buttonPrimary,
        padding: 10,
        borderRadius: 22,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default CustomButton;
