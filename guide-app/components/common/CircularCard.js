import React, { Component } from 'react'
import { View, Dimensions } from 'react-native'

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const AdvancedCard = (props) => {
    return (
        <View style={styles.viewStyle}>
            {props.children}
        </View>
    )
}

const styles = {
    viewStyle: {
        width: 200,
        height: 200,
        
        backgroundColor: '#1B998B',
        borderColor: 'black',
        marginRight: 20,
        borderRadius: 100,
        borderWidth:1, 
        position: 'absolute'

    }
}

export { AdvancedCard }
