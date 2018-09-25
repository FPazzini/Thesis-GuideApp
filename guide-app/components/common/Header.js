// Import libraries for making a component
import React from 'react'
import { Text, View } from 'react-native'

// Making a component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    )
}

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        height: 130,
        paddingTop: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative' 
    },
    textStyle: {
        fontSize: 32,
        marginLeft: 15,
        marginBottom: 20,
        fontWeight: 'bold'
    }
}

// Make the component available to other parts of the app
export { Header }