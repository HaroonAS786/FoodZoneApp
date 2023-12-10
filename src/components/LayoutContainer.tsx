import {
    View,
    Pressable,
    StyleSheet,
    SafeAreaView,
    Platform,
    RefreshControl,
    TouchableOpacity,
} from 'react-native';
import React, { useCallback } from 'react';
import { debounce } from 'lodash';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../config/typography';
import CustomText from './CustomText';
import { themeColors } from '../config/colors';
import MyStatusBar from './MyStatusBar';
import { ArrowLeft, ArrowRight } from '../assets/svgs';
import { LayoutContainerProps } from '../utils/types';


const LayoutContainer: React.FC<LayoutContainerProps> = ({
    leftIcon,
    leftIconPress = () => null,
    rightIcon = () => null,
    rightIconPress = () => null,
    headerTitle,
    isHeader,
    isHeader2,
    children,
    style,
    scrollEnable = true,
    isForm,
    noHeight,
    leftIconOff = false,
    backOnPress = () => null,
}) => {
    const delayedTapBack = useCallback(debounce(() => backOnPress(), 200), []);
    const delayedTapRight = useCallback(debounce(() => rightIconPress(), 200), []);

    if (isHeader) {
        return (
            <>
                <MyStatusBar backgroundColor={themeColors.primary} />
                <View style={[styles.mainContWrap, style]}>
                    <SafeAreaView>
                        {leftIconOff ?
                            <View style={[styles.topCont]}>
                                <CustomText bold body style={{ alignSelf: 'center', paddingBottom: 10 }} color={themeColors.white}>
                                    {headerTitle}
                                </CustomText>
                            </View>
                            : <View style={[styles.topCont]}>
                                <View style={styles.barCont}>
                                    <TouchableOpacity
                                        activeOpacity={0.6}
                                        onPress={delayedTapBack}
                                        style={styles.backIconCont}>
                                        {leftIcon ? leftIcon : <ArrowLeft />}
                                    </TouchableOpacity>
                                    <CustomText bold body color={themeColors.white}>
                                        {headerTitle}
                                    </CustomText>
                                    <View />
                                </View>
                            </View>}

                    </SafeAreaView>
                    {isForm ? (
                        <KeyboardAwareScrollView
                            style={[styles.scrollWrap, style]}
                            contentContainerStyle={[styles.headerWrap, style]}
                            showsVerticalScrollIndicator={false}>
                            {children}
                        </KeyboardAwareScrollView>
                    ) : noHeight ? (
                        <KeyboardAwareScrollView
                            scrollEnabled={scrollEnable}
                            style={[styles.scrollWrap, style]}
                            contentContainerStyle={[styles.wrapNoHeight, style]}
                            showsVerticalScrollIndicator={false}
                        >
                            {children}
                        </KeyboardAwareScrollView>
                    ) : headerTitle ? (
                        <View style={[styles.headerWrap, style,]}>
                            <View style={[styles.rowWrap]}>
                                <View style={styles.barCont}>
                                    <TouchableOpacity
                                        activeOpacity={0.6}
                                        onPress={delayedTapBack}
                                        style={styles.backIconCont}>
                                        {leftIcon ? leftIcon : <ArrowLeft />}
                                    </TouchableOpacity>
                                    <CustomText h6 color={themeColors.white}>
                                        {headerTitle}
                                    </CustomText>
                                    <View />
                                </View>
                            </View>
                            {children}
                        </View>
                    ) : null}
                </View>
            </>
        );
    } else if (isHeader2) {
        return (
            <>
                <MyStatusBar backgroundColor={themeColors.primary} />
                <SafeAreaView style={[styles.mainContWrap, style]}>
                    <View style={[styles.mainContWrap, style]}>
                        <SafeAreaView>
                            <View style={[styles.topCont]}>
                                <View style={styles.barCont}>
                                    <TouchableOpacity
                                        activeOpacity={0.6}
                                        onPress={delayedTapBack}
                                        style={styles.backIconCont}>
                                        {leftIcon ? leftIcon : <ArrowLeft />}
                                    </TouchableOpacity>
                                    <CustomText h6 color={themeColors.white}>
                                        {headerTitle}
                                    </CustomText>
                                    <TouchableOpacity
                                        activeOpacity={0.6}
                                        onPress={delayedTapRight}
                                        style={styles.backIconCont}>
                                        {rightIcon ? rightIcon : <ArrowRight />}
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </SafeAreaView>
                        {isForm ? (
                            <KeyboardAwareScrollView
                                enableOnAndroid={true}
                                enableAutomaticScroll={Platform.OS === 'ios'}
                                style={[styles.scrollWrap, style]}
                                contentContainerStyle={[styles.headerWrap, style]}
                                showsVerticalScrollIndicator={false}>
                                {children}
                            </KeyboardAwareScrollView>
                        ) : noHeight ? (
                            <KeyboardAwareScrollView
                                style={[styles.scrollWrap, style]}
                                contentContainerStyle={[styles.wrapNoHeight, style]}
                                showsVerticalScrollIndicator={false}>
                                {children}
                            </KeyboardAwareScrollView>
                        ) : (
                            <View style={[styles.headerWrap, style]}>{children}</View>
                        )}
                    </View>
                </SafeAreaView>
            </>
        );
    } else {
        return (
            <>
                <MyStatusBar backgroundColor={themeColors.primary} />
                {isForm ? (
                    <KeyboardAwareScrollView
                        style={[styles.wrap, style]}
                        contentContainerStyle={[styles.wrapNoHeight, style]}
                        showsVerticalScrollIndicator={false}>
                        {children}
                    </KeyboardAwareScrollView>
                ) : noHeight ? (
                    <View style={{ flex: 1 }}>
                        <KeyboardAwareScrollView
                            scrollEnabled={scrollEnable}
                            style={[styles.scrollWrap, style]}
                            contentContainerStyle={[styles.wrapNoHeight, style]}
                            showsVerticalScrollIndicator={false}>
                            {children}
                        </KeyboardAwareScrollView>
                    </View>
                ) : (
                    <View
                        style={[
                            styles.wrap,
                            style,
                            { alignItems: 'center', justifyContent: 'flex-start' },
                        ]}>
                        {children}
                    </View>
                )}
            </>
        );
    }
};

export default LayoutContainer;

const styles = StyleSheet.create({
    mainContWrap: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: themeColors.white,
    },
    wrap: {
        height: SCREEN_HEIGHT,
        width: SCREEN_WIDTH,
        backgroundColor: themeColors.white,
    },
    headerWrap: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: themeColors.white,
    },
    wrapNoHeight: {
        width: SCREEN_WIDTH,
        alignItems: 'center',
        justifyContent: 'flex-start',
        // backgroundColor: Colors.DASHBOARD_BG,
    },
    scrollWrap: {
        // backgroundColor: Colors.DASHBOARD_BG,
    },

    topCont: {
        height: Platform.OS === 'android' ? SCREEN_HEIGHT * 0.08 : SCREEN_HEIGHT * 0.06,
        width: SCREEN_WIDTH,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: themeColors.primary,
        paddingBottom: Platform.OS === 'android' ? SCREEN_HEIGHT * 0.01 : 0,
    },
    barCont: {
        height: SCREEN_HEIGHT * 0.035,
        width: SCREEN_WIDTH * 0.87,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: Platform.OS === 'ios' ? SCREEN_HEIGHT * 0.01 : 0,
    },
    backIconCont: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    rowTxt: {
        color: themeColors.primary,
        marginLeft: 5,
    },
    headingTitle: {
        marginTop: SCREEN_HEIGHT * 0.01,
    },
    backIconStyle: {
        width: '55%',
        height: '55%',
        resizeMode: 'contain',
    },
    rowWrap: {
        width: SCREEN_WIDTH * 0.85,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingBottom: SCREEN_HEIGHT * 0.01,
    },
    topPadding: {
        paddingTop: SCREEN_HEIGHT * 0.02,
    },
});
