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
                    style={{ width: 23, height: 23, marginRight: 10, }}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = {
    viewStyle: {
        width: '100%',
        height: 80,
        position: 'absolute',
        zIndex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        padding: 10,
    }
}

export { Close }