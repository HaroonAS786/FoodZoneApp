import React, { useEffect } from 'react'
import { FlatList, View } from 'react-native'

import CustomText from '../../../components/CustomText'
import LayoutContainer from '../../../components/LayoutContainer'
import Spacer from '../../../components/Spacer'
import { themeColors } from '../../../config/colors'
import { SCREEN_HEIGHT } from '../../../config/typography'
import { RestrauntData } from '../../../utils/localData'
import RestrauntCard from './components/RestrauntCard'
import { getStyles } from './style'
import { deleteData } from '../../../utils/storage'

const HomeScreen: React.FC<any> = (props) => {

    const styles = getStyles()
    const handleFoodMenu = (val: any) => {
        props.navigation.navigate("FoodMenuScreen", {
            item: val
        })
    }

    // useEffect(() => {
    //     deleteData('accessToken')
    // }, [])

    return (
        <LayoutContainer leftIconOff noHeight headerTitle='Home' isHeader>
            <Spacer height={SCREEN_HEIGHT * 0.04} />
            {RestrauntData.map((val, index) => {
                return (
                    <View key={index} style={styles.container}>
                        <CustomText h5 medium color={themeColors.black}>{val.resName}</CustomText>
                        <Spacer height={SCREEN_HEIGHT * 0.02} />
                        <FlatList
                            key={index}
                            showsHorizontalScrollIndicator={false}
                            horizontal
                            data={val.foodItems}
                            renderItem={({ item, index }) => (
                                <RestrauntCard item={item} index={index} onItemClick={() => handleFoodMenu(item)} />
                            )}
                            keyExtractor={(item) => item.toString()}
                        />
                    </View>
                )
            })}

            <Spacer height={SCREEN_HEIGHT * 0.04} />
        </LayoutContainer>
    )
}

export default HomeScreen