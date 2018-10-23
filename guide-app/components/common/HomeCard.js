import React from 'react'
import {
    View,
    Text,
    TouchableHighlight,
    Dimensions,
} from 'react-native'
import { FontSizeEval } from '../FontSizeEval'

const deviceWidth = Dimensions.get('window').width;

const HomeCard = (props) => {

    const {
        container,
        cardStyle,
    } = styles

    return (
        <View style={container}>
            {props.children}
        </View>
    )
}

const styles = {
    container: {

        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,

        shadowColor: '#2C2C2C',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.15,
        shadowRadius: 2,

        borderWidth: 0.75,
        borderColor: '#ddd',
    },
    cardStyle: {
        width: deviceWidth / 1.75,
        height: 300,
    }
}

export { HomeCard }