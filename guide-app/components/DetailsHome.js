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

const DetailsHome = ({ imgPath, highlightedText, title, sectionIcon }) => {

    const {
        innerImageViewStyle,
        imageStyle,
        titleStyle,
        contentViewStyle,
    } = styles

    return (
        <View style={innerImageViewStyle}>
            <ImageBackground 
                style={{ width: '100%', height: '100%', zIndex: 0 }}
                resizeMode='cover'
                source={imgPath}>
                <View style={{ width: GLOBALS.DEVICE_WIDTH, height: GLOBALS.DEVICE_HEIGHT, backgroundColor: 'rgba(0,0,0,.6)' }}>
                    <View style={{ backgroundColor:'red', padding: 10, zIndex: 1, width: GLOBALS.DEVICE_WIDTH, alignItems: 'center' }}>
                        <MonoText style={titleStyle}>
                            {title}
                        </MonoText>
                    </View>
                    <View style={{ flex: 1, backgroundColor: 'blue', margin: '5%', zIndex: 1, alignItems: 'center' }}>
                        <MonoText style={{ fontWeight: '200', padding: 5, color: 'white' }}>
                            Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao 
                        </MonoText>
                    </View>
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
    },
    contentViewStyle: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'red',
        marginBottom: 5,
    },
    contentStyle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 200,
    }
   
}

export default DetailsHome