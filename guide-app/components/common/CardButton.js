import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native'

const CardButton = ({ onPress }) => {
    return (
        <TouchableOpacity
            style={styles.buttonStyle}
            onPress={onPress}
        >
            pippo
        </TouchableOpacity>
    )
}

const styles = {
    buttonStyle: {
        width: 75,
        height: 75,
        
        backgroundColor: 'orange',
        borderColor: 'black',
        marginRight: 20,
        borderRadius: 15
    }
}

export { CardButton }