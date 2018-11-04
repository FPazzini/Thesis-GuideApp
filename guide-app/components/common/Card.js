import React from 'react'
import { View, Dimensions } from 'react-native'

const deviceWidth = Dimensions.get('window').width;

const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    )
}

const styles = {
    containerStyle: {

        //width: deviceWidth / 2 - 5,
        //height: 150,

        width: '100%',
        height: '100%',
        backgroundColor: '#2D2C2C',

        borderTopRightRadius: 7,
        borderTopLeftRadius: 7,
        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7,

        // Border
        //borderWidth: 1,
        //borderRadius: 2,
        //borderColor: '#ddd',
        //borderBottomWidth: 1,

        // Shadow
        shadowColor: '#ddd',
        shadowOffset: { width: 0, height: 3},
        shadowOpacity: 0.15,
        shadowRadius: 2,
        
        // Other
        elevation: 1,
        marginLeft: 2,
        marginRight: 2,
        marginTop: 20
    }
}

export { Card }