import { StyleSheet } from 'react-native'
import { themeColors } from '../../../config/colors'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../config/typography'

export const getStyles = () => StyleSheet.create({
    container: {
        width: SCREEN_WIDTH,
        paddingHorizontal: 16
    },
    FLNamesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    phonesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    fL_InputCon: {
        width: SCREEN_WIDTH * 0.38
    },
    btnContainer: {
        justifyContent: 'flex-end',
        backgroundColor: themeColors.white,
        width: SCREEN_WIDTH,
        paddingHorizontal: 16,
        paddingVertical: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    contentDropdown: {
        top: 80
    },
    yearContentDropdown: {
        top: 80,
        height: SCREEN_HEIGHT * 0.3,
    },
    termsConditionsContainer: {
        width: SCREEN_WIDTH,
        flex:1

    },
    underline: { textDecorationLine: 'underline' }

})