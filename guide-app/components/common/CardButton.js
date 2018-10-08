import React from 'react'
import {
    View,
    Text,
    TouchableHighlight,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const CardButton = ({ onPress, style, arrowName }) => {
    return (
        <TouchableHighlight
            style={[styles.buttonStyle, style]}
            onPress={onPress}
            underlayColor="#F5F5F5"
        >
            <Ionicons 
                name={arrowName}
                size={35} 
                color='black'
            />
        </TouchableHighlight>
    )
}

const styles = {
    buttonStyle: {
        width: 60,
        height: 60,
        marginRight: 20,
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#F8F8FF',
        
        borderRadius: 100,

        shadowColor: '#F5F5F5',
        shadowOffset: { width: 0, height: 1},
        shadowOpacity: 0.15,
        shadowRadius: 1,
        //position: 'absolute' //--> To de-comment if card-based layout.
    }
}

export { CardButton }