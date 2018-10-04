import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    Dimensions,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const tabBarHeight = 49

const upperSection = deviceHeight / 2.5
const bottomSection = (deviceHeight - upperSection) /2

const DetailsSection = ({ imgPath, highlightedText }) => {

    const {
        innerImageViewStyle,
        imageStyle,
    } = styles

    return (
        <View style={innerImageViewStyle}>
            <ImageBackground 
                style={{ width: '100%', height: '100%' }}
                resizeMode='cover'
                source={imgPath}>
            </ImageBackground>
        </View>
    )
}

const styles = {
    innerImageViewStyle: {
        width: '100%',
        height: deviceHeight - tabBarHeight,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageStyle: {
        flex: 1,
    },
   
}

export default DetailsSection