import React from 'react'
import {
    View,
    Image,
    TouchableOpacity,
} from 'react-native'

const Close = (props) => {

    const {
        viewStyle,
    } = styles

    return (
        <View style={viewStyle}>
            <TouchableOpacity
                onPress={props.onPress}
            >
                <Image 
                    source={props.imgPath}
                    style={{ width: 20, height: 20 }}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = {
    viewStyle: {
        right: 5,
        top: 15,
        position: 'absolute',
        zIndex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    }
}

export { Close }