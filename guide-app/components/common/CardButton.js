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
            underlayColor="#00786B"
        >
            <Ionicons 
                name={arrowName}
                size={35} 
                color='white'
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
        backgroundColor: '#1B998B',
        borderColor: 'black',
        
        borderRadius: 100,
        borderWidth:1, 
        //position: 'absolute' //--> To de-comment if card-based layout.
    }
}

export { CardButton }