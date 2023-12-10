import React from 'react';
import { SafeAreaView, StatusBar, View, StyleSheet } from 'react-native';
import { MyStatusBarProps } from '../utils/types';

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

const MyStatusBar: React.FC<MyStatusBarProps> = ({ backgroundColor, ...props }) => (
    <View style={[styles.statusBar, { backgroundColor }]}>
        <SafeAreaView>
            <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </SafeAreaView>
    </View>
);

export default MyStatusBar;

const styles = StyleSheet.create({
    statusBar: {
        height: STATUSBAR_HEIGHT, // Fallback value if StatusBar.currentHeight is null
    },
});
