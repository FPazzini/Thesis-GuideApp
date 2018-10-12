import React from 'react'
import {
    View,
} from 'react-native'
import { Icon } from 'react-native-elements'
import { FontStyleEval } from '../FontSizeEval'

const MainPageScroller = ({ onPress, tabBarHeight }) => {
    return (
        <View style={{ zIndex: 1, bottom: 10, alignContent: 'center', justifyContent: 'center' }}>
            <View>
                <FontStyleEval
                    text={'Scrolla per iniziare'}
                    textType={'section'}
                    style={{ color: 'white', marginBottom: 35 }}
                    textAlign="center"
                />
                <Icon
                    name='keyboard-arrow-down'
                    color='#517fa4'
                    size={60}
                    iconStyle={{marginBottom: tabBarHeight }}
                    //onPress={onPress}
                    underlayColor='#00000000'
                />
            </View>
        </View>
    )
}

export { MainPageScroller }