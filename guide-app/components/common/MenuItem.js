import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Platform,
} from 'react-native'
import { MonoText } from '../StyledText'

const width = 40 * (Platform.OS === 'ios' ? 1 : PixelRatio.get());
const height = 40 * (Platform.OS === 'ios' ? 1 : PixelRatio.get());

const MenuItem = ({ iconSource, text }) => {
    return (
        <View style={styles.singleItem}>
            <View>
                <Image source={iconSource} style={styles.iconStyle} />
            </View>
            <View>
                <Text style={styles.textStyle}>
                    {text}
                </Text>
            </View>
        </View>
    )
}

const styles = {
    textStyle: {
        color: 'white',
        fontWeight: '200',
        margin: 5,
    },
    singleItem: {
        margin: 10,
        alignItems: 'center',
    },
    iconStyle: {
        padding: 7,
        width: width,
        height: height,
    }
}

export { MenuItem }