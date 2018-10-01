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
        flex: 1,
        width: deviceWidth - 5,
        //height: deviceHeight / 3,
        height: 250,
        flexDirection: 'column',


        marginTop: 20,
        marginLeft: 3,
        margin: 3,
        
        borderRadius: 10,
        borderWidth: 1.5,
        borderColor: '#ddd',
        borderBottomWidth: 1,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.15,
        shadowRadius: 2,

    }
}

export { AdvancedCard }
