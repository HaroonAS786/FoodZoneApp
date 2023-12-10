import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import CustomText from '../../../../components/CustomText';
import Spacer from '../../../../components/Spacer';
import { themeColors } from '../../../../config/colors';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../../config/typography';
import { MenuCardProps } from '../../../../utils/types';
import Animated, { FadeInDown } from 'react-native-reanimated';

const MenuCard: React.FC<MenuCardProps> = ({ item, index, addToCart }) => {

    return (
        <Animated.View style={styles.container} entering={FadeInDown.delay(100 * index)} >
            <View style={styles.imageCon}>
                <Image source={{ uri: item.url }} style={styles.image} />
            </View>
            <Spacer width={SCREEN_WIDTH * 0.03} />
            <View>
                <Spacer height={SCREEN_HEIGHT * 0.01} />
                <View>
                    <CustomText color={themeColors.black} body medium>
                        {item.foodName}
                    </CustomText>
                    <CustomText color={themeColors.black} caption>
                        {item.description}
                    </CustomText>
                </View>
                <Spacer height={SCREEN_HEIGHT * 0.02} />
                <View style={styles.rowFooter}>
                    <CustomText color={themeColors.black} body medium>{`Price: ${item.price}`}</CustomText>
                    <TouchableOpacity style={styles.addToCartBtn} onPress={addToCart}>
                        <CustomText color={themeColors.white} body semiBold>Add</CustomText>
                    </TouchableOpacity>
                </View>
            </View>
        </Animated.View >
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 20,
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#ffc765',
    },
    imageCon: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rowFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        width: SCREEN_WIDTH * 0.55,
    },
    view: {
        width: 25,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        borderColor: themeColors.black,
        borderWidth: .5,
        backgroundColor: themeColors.white
    },
    addToCartBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        padding: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: themeColors.white
    }
});

export default MenuCard;
