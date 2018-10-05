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
                style={{ width: '100%', height: '100%', zIndex: 0 }}
                resizeMode='cover'
                source={imgPath}>
                <View style={{ backgroundColor:'rgba(0,0,0,.6)', zIndex: 1, width: deviceWidth, height: deviceHeight }}></View>
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
        backgroundColor:'rgba(0,0,0,.6)',
        zIndex: 1,
    },
    imageStyle: {
        flex: 1,
    },
   
}

export default DetailsSection