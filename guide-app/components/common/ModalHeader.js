import React from 'react'
import {
    View,
    Text,
} from 'react-native'

const ModalHeader = (props) => {

    const {
        rootViewStyle,
    } = styles

    return (
        <View style={rootViewStyle}>
            {props.children}
        </View>
    )
}

const styles = {
    rootViewStyle: {
        borderBottomWidth: 0.5,
        borderBottomColor: 'white'
    }
}

export { ModalHeader }