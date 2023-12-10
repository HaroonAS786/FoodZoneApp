import React, { useState } from 'react'
import { FlatList, View } from 'react-native'

import { useDispatch, useSelector } from 'react-redux'
import CustomButton from '../../../components/CustomButton'
import CustomText from '../../../components/CustomText'
import FlashNotification from '../../../components/FlashMessage'
import LayoutContainer from '../../../components/LayoutContainer'
import Spacer from '../../../components/Spacer'
import { themeColors } from '../../../config/colors'
import { SCREEN_HEIGHT } from '../../../config/typography'
import { removeCart } from '../../../redux/actions'
import ItemCard from './components/ItemCard'
import { getStyles } from './style'

const CartScreen: React.FC<any> = (props) => {
    const styles = getStyles()
    const cartItems = useSelector((state: any) => state.CartReducer.items);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState<boolean>(false)

    const handleRemoveToCart = (item: any) => {
        dispatch(removeCart(item.id));
    }

    const calculateTotalPrice = (items: any[]) => {
        const totalPrice = items.reduce((accumulator, currentItem) => {
            const priceNumeric = parseFloat(currentItem.price.replace('$', ''));
            if (!isNaN(priceNumeric)) {
                return accumulator + priceNumeric;
            }
            return accumulator;
        }, 0);

        return totalPrice
    };

    const handleCheckout = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            FlashNotification.show("Order has been created", "success")
            props.navigation.navigate("HomeScreen")
            
        }, 2000)
    }

    return (
        <LayoutContainer leftIconOff isHeader noHeight headerTitle='Cart' >
            <View style={styles.container}>
                <Spacer height={SCREEN_HEIGHT * 0.02} />
                {cartItems.length > 0 ?
                    <FlatList
                        data={cartItems}
                        renderItem={({ item, index }) => (
                            <ItemCard
                                key={item.id}
                                item={item}
                                index={index}
                                removeItem={() => handleRemoveToCart(item)}
                            />
                        )}
                        keyExtractor={(item) => item.id.toString()}
                    /> : <CustomText color={themeColors.black} h5 medium>No Cart Item yet</CustomText>
                }
                {cartItems.length > 0 &&
                    <View>
                        <Spacer height={SCREEN_HEIGHT * 0.03} />
                        <View style={styles.wrapFooterView}>
                            <CustomText color={themeColors.black} body medium>Total Items:</CustomText>
                            <CustomText color={themeColors.black} body medium>{cartItems.length}</CustomText>
                        </View>
                        <Spacer height={SCREEN_HEIGHT * 0.03} />
                        <View style={styles.wrapFooterView}>
                            <CustomText color={themeColors.black} body medium>Delivery</CustomText>
                            <CustomText color={themeColors.black} body medium>{`2$`}</CustomText>
                        </View>
                        <Spacer height={SCREEN_HEIGHT * 0.03} />
                        <CustomText color={themeColors.black} style={{ alignSelf: 'flex-end' }} h6 medium>{`Total ${calculateTotalPrice(cartItems)}$`}</CustomText>
                        <Spacer height={SCREEN_HEIGHT * 0.06} />
                        <CustomButton
                            label='Checkout'
                            onPress={handleCheckout}
                            loading={loading}
                        />
                        <Spacer height={SCREEN_HEIGHT * 0.06} />
                    </View>}
            </View>
        </LayoutContainer>
    )
}

export default CartScreen