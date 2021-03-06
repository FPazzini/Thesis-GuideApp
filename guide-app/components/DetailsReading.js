import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    Dimensions,
    ScrollView,
    WebView,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import ReadingCarousel from './ReadingCarousel'
import { MonoText } from './StyledText';
import { FontStyleEval } from './FontSizeEval'
import GLOBALS from '../constants/GlobalVars'

const DetailsReading = ({ imgPath, title, readings }) => {

    const {
        innerImageViewStyle,
        titleStyle,
        contentStyle,
    } = styles

    function getTitleSized (text) {
        return (
            <View>
                <FontStyleEval 
                    style={titleStyle}
                    text={text}
                    textType="title"
                />
            </View>
        )
    }

    function getContentSized (text) {
        return (
            <View style={{ alignSelf: 'flex-start' }}>
                <FontStyleEval 
                    style={contentStyle}
                    text={text}
                    textAlign="justify"
                    textType="section"
                />
            </View>
        )
    }

    return (
        <View style={innerImageViewStyle}>
            <ImageBackground 
                style={{ width: '100%', height: '100%', zIndex: 0 }}
                resizeMode='cover'
                source={imgPath}
                blurRadius={3}>
                <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,.67)' }}>
                    <View style={{ flex: 1, padding: 10, zIndex: 1, alignItems: 'center' }}>
                        {getTitleSized(title)}
                    </View>
                    <View style={{ flex: 6, zIndex: 1, alignItems: 'center'}}>
                        <ReadingCarousel 
                            cardsContent={readings}
                        />
                    </View>
                    <View style={{flex: 1 }}></View>
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
        color: 'white',
        padding: 10,
        fontWeight: '500',
    },
    contentViewStyle: {
        flex: 1,
        alignItems: 'center',
        marginBottom: 5,
    },
    contentStyle: {
        color: 'white',
        fontWeight: '200',
    },
    fontStyle: {
        fontWeight: '200', 
        padding: 5, 
        color: 'white',
    }
   
}

export default DetailsReading