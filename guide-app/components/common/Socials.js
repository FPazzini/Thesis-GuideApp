import React from 'react'
import {
    View,
    TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

const Socials = ({ onFacebookPress }) => {

    const {
        container,
    } = styles

    return (
        <View style={container}>
            <TouchableOpacity onPress={onFacebookPress}>
                <Icon name="logo-facebook" size={45} color="#4F8EF7" />
            </TouchableOpacity>
        </View>
    )
}

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
    }
}

export { Socials }