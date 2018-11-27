import React from 'react'
import { View, Dimensions } from 'react-native'

const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

const SquaredCard = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    )
}

const styles = {
    containerStyle: {

        width: deviceWidth / 1.15,
        height: deviceHeight / 2.5,

        backgroundColor: '#2D2C2C',

        borderTopRightRadius: 7,
        borderTopLeftRadius: 7,
        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7,

        // Shadow
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 3},
        shadowOpacity: 0.50,
        shadowRadius: 2,
        
        // Other
        elevation: 1,
        marginLeft: 2,
        marginRight: 2,
        marginTop: 20
    }
}

export { SquaredCard }