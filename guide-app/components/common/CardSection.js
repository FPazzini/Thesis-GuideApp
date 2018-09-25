import React from 'react'
import { View } from 'react-native'

const CardSection = (props) => {
    // Con la dicitura [styles.containerStyle, props.style] facciamo in modo tale che qualsiasi proprietà specificata in props.style
    // che sia già presente in styles.containerStyle, la vada a sostituire.
    return (
        <View style={[styles.containerStyle, props.style]}> 
            {props.children}
        </View>
    )
}

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
}

export { CardSection }