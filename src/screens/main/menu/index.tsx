import React from 'react'
import { FlatList, Image, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { IMAGES } from '../../../assets/images'
import CustomButton from '../../../components/CustomButton'
import CustomText from '../../../components/CustomText'
import LayoutContainer from '../../../components/LayoutContainer'
import Spacer from '../../../components/Spacer'
import { themeColors } from '../../../config/colors'
import { SCREEN_HEIGHT } from '../../../config/typography'
import { addToCart } from '../../../redux/actions'
import MenuCard from './components/MenuCard'
import { getStyles } from './style'

const FoodMenuScreen: React.FC<any> = (props) => {
    const { item } = props.route.params;
    const dispatch = useDispatch();
    const styles = getStyles();
    const cartItems = useSelector((state: any) => state.CartReducer.items);

    const handleAddToCart = (item: any) => {
        dispatch(addToCart(item));
    };

    const handleCart = () => {
        props.navigation.navigate("CartScreen")
    };

    return (
        <LayoutContainer leftIconOff={false} noHeight isHeader headerTitle='Menu' backOnPress={() => props.navigation.goBack()}>
            <View style={styles.image}>
                <Image source={{ uri: item.url }} style={styles.image} />
            </View>
            <Spacer height={SCREEN_HEIGHT * 0.02} />
            <View style={styles.container}>
                <CustomText color={themeColors.black} medium h5>{item.restraunt}</CustomText>
                <Spacer height={SCREEN_HEIGHT * 0.01} />
                <View style={styles.row}>
                    <Image source={IMAGES.rating} style={styles.svgView} />
                    <CustomText caption color={themeColors.black}>{`${item.rating} star`}</CustomText>
                </View>
                <Spacer height={SCREEN_HEIGHT * 0.01} />
                <View style={styles.row}>
                    <Image source={IMAGES.distance} style={styles.svgView} />
                    <CustomText caption color={themeColors.black}>{`Nearby main street ${item.distance}`}</CustomText>
                </View>
                <Spacer height={SCREEN_HEIGHT * 0.03} />
                <CustomText color={themeColors.black} medium h5>Menu</CustomText>
                <Spacer height={SCREEN_HEIGHT * 0.02} />
                <FlatList
                    data={item.menuItems}
                    renderItem={({ item, index }) => (
                        <MenuCard
                            key={item.id}
                            item={item}
                            index={index}
                            addToCart={() => handleAddToCart(item)}
                        />
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />
                <Spacer height={SCREEN_HEIGHT * 0.02} />
                {cartItems.length > 0 && <CustomButton
                    label={`Cart (${cartItems.length})`}
                    onPress={handleCart}
                />}
                <Spacer height={SCREEN_HEIGHT * 0.05} />
            </View>
        </LayoutContainer>
    );
}

export default FoodMenuScreen;
