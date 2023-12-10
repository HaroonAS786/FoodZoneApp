import { StyleSheet } from 'react-native';
import { themeColors } from '../../../config/colors';
import { SCREEN_WIDTH } from '../../../config/typography';

export const getStyles = () => StyleSheet.create({
    fieldContainer: {
        width: SCREEN_WIDTH,
        paddingHorizontal: 16
    },
    footerView: {
        flexDirection: 'row'
    },
    forgotPassLabel: {
        alignSelf: 'flex-end'
    }
});
