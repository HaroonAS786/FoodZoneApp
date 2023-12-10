import { ReactNode } from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";

export interface RestrauntCardProps {
    item: {
        url: string;
        restraunt: string;
        rating: string;
        distance: string;
    };
    index: number;
    onItemClick: () => void;
}

export interface CartItem {
    item: {
        id: string;
        url: string;
        foodName: string;
        description: string;
        price: number;
    };
    index: number;
    removeItem: () => void;
}

export interface MenuCardProps {
    item: {
        id: string;
        url: string;
        foodName: string;
        description: string;
        price: number;
    };
    index: number;
    addToCart: () => void;
}

export interface CustomButtonProps {
    label?: string;
    onPress: () => void;
    disabled?: boolean;
    textOnly?: boolean;
    caption?: boolean;
    buttonContainerStyle?: ViewStyle;
    rightIcon?: ReactNode;
    buttonTextColor?: string | undefined;
    titilium?: boolean;
    body2?: boolean;
    iconLeft?: ReactNode;
    btnTextStyle?: ViewStyle;
    buttonDisabledBG?: string;
    buttonDisabledTextColor?: string;
    loading?: boolean;
}

export interface CustomTabBarProps {
    state: any;
    descriptors: any;
    navigation: any;
}

export interface CustomTextProps {
    children: ReactNode;
    h1?: boolean;
    h2?: boolean;
    h3?: boolean;
    h4?: boolean;
    h5?: boolean;
    h6?: boolean;
    subtitle?: boolean;
    body?: boolean;
    body2?: boolean;
    button?: boolean;
    caption?: boolean;
    size?: number;
    regular?: boolean;
    light?: boolean;
    medium?: boolean;
    semiBold?: boolean;
    bold?: boolean;
    onClick?: () => void;
    titilium?: boolean;
    titiliumSemiBold?: boolean;
    titiliumBold?: boolean;
    color?: string;
    style?: StyleProp<TextStyle>;
    numberOfLines?: number;
}

export interface CustomTextInputProps {
    label?: string;
    placeholder?: string;
    onChangeText: (text: string) => void;
    maxLength?: number;
    password?: boolean;
    errors?: string[];
    success?: string[];
    value?: string | undefined;
    onBlur?: () => void;
    inputStyle?: StyleProp<ViewStyle>;
    numberOfLines?: number;
    multiline?: boolean;
    autoCapitalize?: "none" | "sentences" | "words" | "characters";
    keyboardType?: "default" | "numeric" | "email-address" | "phone-pad";
    rightIcon?: ReactNode;
    rightIconPress?: () => void;
}

export interface FlashMessageProps { }

export interface LayoutContainerProps {
    leftIcon?: any;
    leftIconPress?: () => null;
    rightIcon?: any;
    rightIconPress?: () => null;
    headerTitle?: string;
    isHeader?: boolean;
    isHeader2?: boolean;
    children?: React.ReactNode;
    style?: any;
    refreshing?: boolean;
    onRefresh?: () => void;
    pullToRefresh?: boolean;
    scrollEnable?: boolean;
    isForm?: boolean;
    noHeight?: boolean;
    leftIconOff: boolean;
    backOnPress?: () => void;
}

export interface MyStatusBarProps {
    backgroundColor: string;
}


export interface SpacerProps {
    width?: number;
    height?: number;
}

export interface Colors {
    primary50: string;
    primary100: string;
    primary200: string;
    primary300: string;
    primary400: string;
    primary500: string;
    primary600: string;
    primary700: string;
    primary800: string;
    primary900: string;

    error50: string;
    error100: string;
    error200: string;
    error300: string;
    error400: string;
    error500: string;
    error600: string;
    error700: string;
    error800: string;
    error900: string;

    success50: string;
    success100: string;
    success200: string;
    success300: string;
    success400: string;
    success500: string;
    success600: string;
    success700: string;
    success800: string;
    success900: string;

    warning50: string;
    warning100: string;
    warning200: string;
    warning300: string;
    warning400: string;
    warning500: string;
    warning600: string;
    warning700: string;
    warning800: string;
    warning900: string;

    white50: string;
    white100: string;
    white200: string;
    white300: string;
    white400: string;
    white500: string;
    white600: string;
    white700: string;
    white800: string;
    white900: string;

    black50: string;
    black100: string;
    black200: string;
    black300: string;
    black400: string;
    black500: string;
    black600: string;
    black700: string;
    black800: string;
    black900: string;
}

export interface AuthState {
    userToken: string;
}