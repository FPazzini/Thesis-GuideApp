import React, { Component } from 'react'
import { View, Dimensions } from 'react-native'

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const CircularCard = (props) => {
    return (
        <View style={styles.viewStyle}>
            {props.children}
        </View>
    )
}

const styles = {
    viewStyle: {
        flex: 1,
        width: 200,
        height: 200,
        borderRadius: 100,
        
        marginTop: 20,
        marginLeft: 3,
        margin: 3,
        
        borderWidth: 1.5,
        borderColor: '#ddd',
        borderBottomWidth: 1,

        shadowColor: '#202020',
        shadowOffset: { width: 0, height: 1},
        shadowOpacity: 0.5,
        shadowRadius: 5,
    }
}

export { CircularCard }
