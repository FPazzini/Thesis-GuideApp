import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,

} from 'react-native'

export default class DetailsAudio { 
    render () {
        return (
            <View style={styles.innerImageViewStyle}>

            </View>
        )
    }
}

const styles = {
    innerImageViewStyle: {
        width: '100%',
        height: GLOBALS.DEVICE_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'rgba(0,0,0,.6)',
    },
}