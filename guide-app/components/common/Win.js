import React from 'react'
import {
    View,
    Text,
} from 'react-native'
import { FontSizeEval } from '../FontSizeEval'

const Win = () => {

    const {
        container,
        textStyle,
    } = styles

    return (
        <View style={container}>
            <Text style={textStyle}>
                Completato!
            </Text>
        </View>
    )
}

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
    },
    textStyle: {
        fontWeight: '600',
        fontSize: 40,
        color: 'black',
    },
}

export { Win }