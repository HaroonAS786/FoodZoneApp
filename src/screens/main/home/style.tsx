import { StyleSheet } from 'react-native';
import { themeColors } from '../../../config/colors';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../config/typography';

export const getStyles = () => StyleSheet.create({
    container: {
        height: SCREEN_HEIGHT * 0.35,
        paddingHorizontal: 16
    },
    logoutBtn: {
        width: SCREEN_WIDTH,
        paddingHorizontal: 16
    }
});
