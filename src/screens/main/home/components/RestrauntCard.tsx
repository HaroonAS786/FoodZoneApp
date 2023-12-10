import React from 'react';
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';

import { themeColors } from '../../../../config/colors';
import { IMAGES } from '../../../../assets/images';
import CustomText from '../../../../components/CustomText';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../../config/typography';
import Spacer from '../../../../components/Spacer';
import { RestrauntCardProps } from '../../../../utils/types';
import Animated, { FadeInRight } from 'react-native-reanimated';


const RestrauntCard: React.FC<RestrauntCardProps> = ({ item, index, onItemClick }) => {

    return (
        <Animated.View style={styles.container}  entering={FadeInRight.delay(100 * index)} >
            <TouchableOpacity onPress={onItemClick}>
                <View style={styles.headerImageCon}>
                    <Image style={styles.headerImage} source={{ uri: item.url }} />
                </View>
                <Spacer height={SCREEN_HEIGHT * 0.002} />
                <View style={styles.footerContainer}>
                    <CustomText body color={themeColors.black} medium>
                        {item.restraunt}
                    </CustomText>
                    <Spacer height={SCREEN_HEIGHT * 0.01} />
                    <View style={styles.row}>
                        <Image source={IMAGES.rating} style={styles.distance} />
                        <CustomText caption color={themeColors.black}>{`${item.rating} star`}</CustomText>
                    </View>
                    <Spacer height={SCREEN_HEIGHT * 0.01} />
                    <View style={styles.row}>
                        <Image source={IMAGES.distance} style={styles.distance} />
                        <CustomText caption color={themeColors.black}>{`Nearby main street ${item.distance}`}</CustomText>
                    </View>
                </View>
            </TouchableOpacity>
        </Animated.View>
    );
};

export default RestrauntCard;

const styles = StyleSheet.create({
    container: {
        backgroundColor: themeColors.white,
        height: SCREEN_HEIGHT * 0.23,
        width: SCREEN_WIDTH * 0.5,
        marginRight: 10,
        borderRadius: 20,
        flex: 1,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 1,
    },

    distance: {
        width: 18,
        height: 16,
    },

    headerImage: {
        height: SCREEN_HEIGHT * 0.1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    headerImageCon: {
        height: SCREEN_HEIGHT * 0.1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    footerContainer: {
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});
