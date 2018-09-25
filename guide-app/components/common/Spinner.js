import React from 'react'
import { View, ActivityIndicator } from 'react-native'

const Spinner = ({ size }) => {

    const { spinnerStyle } = styles

    return(
        <View style={spinnerStyle}>
            <ActivityIndicator 
                size={size || 'large'} // if we pass a size property, then use that one; otherwise, use the string by default the string 'large'
            /> 
        </View>
    )
}

const styles = {
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export { Spinner }