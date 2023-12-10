import { StyleSheet } from 'react-native';
import { themeColors } from '../../../config/colors';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../config/typography';

export const getStyles = () => StyleSheet.create({
    container: {
        width: SCREEN_WIDTH,
        paddingHorizontal: 16
    },
    image: {
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT * 0.25,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    svgView: {
        width: 18,
        height: 16,
    },
});
