import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    Dimensions,
    WebView,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { MonoText } from './StyledText';
import { FontStyleEval } from './FontSizeEval'
import GLOBALS from '../constants/GlobalVars'

const DetailsVideo = ({ imgPath, highlightedText, title, sectionIcon }) => {

    const {
        innerImageViewStyle,
        imageStyle,
        titleStyle,
        contentViewStyle,   
        contentStyle,
        fontStyle,
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
                <View style={{ width: GLOBALS.DEVICE_WIDTH, height: GLOBALS.DEVICE_HEIGHT, backgroundColor: 'rgba(0,0,0,.67)' }}>
                    <View style={{ padding: 10, zIndex: 1, width: GLOBALS.DEVICE_WIDTH, alignItems: 'center' }}>
                        {getTitleSized(title)}
                    </View>
                    <WebView
                        source={{uri: 'https://www.youtube.com/embed/BYWoJGtozoc'}}
                        onNavigationStateChange={this.onNavigationStateChange}
                        startInLoadingState
                        scalesPageToFit
                        javaScriptEnabled
                        style={{ flex: 1 }}
                    />
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

export default DetailsVideo