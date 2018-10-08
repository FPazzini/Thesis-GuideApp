import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    Dimensions,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { MonoText } from './StyledText';
import GLOBALS from '../constants/GlobalVars'

const DetailsSection = ({ imgPath, highlightedText, title, sectionIcon }) => {

    const {
        innerImageViewStyle,
        imageStyle,
        titleStyle,
    } = styles

    return (
        <View style={innerImageViewStyle}>
            <ImageBackground 
                style={{ width: '100%', height: '100%', zIndex: 0 }}
                resizeMode='cover'
                source={imgPath}>
                <View style={{ backgroundColor:'rgba(0,0,0,.6)', zIndex: 1, width: GLOBALS.DEVICE_WIDTH, height: GLOBALS.DEVICE_HEIGHT, alignItems: 'center' }}>
                    <MonoText style={titleStyle}>
                        {title}
                    </MonoText>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = {
    innerImageViewStyle: {
        width: '100%',
        height: GLOBALS.DEVICE_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'rgba(0,0,0,.6)',
    },
    imageStyle: {
        flex: 1,
    },
    titleStyle: {
        fontSize: 40,
        color: 'white',
        padding: 10,
        fontWeight: '500',
    }
   
}

export default DetailsSection