import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    Dimensions,
    WebView,
} from 'react-native'
import { MainPageScroller } from './common'
import { Ionicons } from '@expo/vector-icons';
import { Icon } from 'react-native-elements'
import { MonoText } from './StyledText';
import { FontStyleEval } from './FontSizeEval'
import GLOBALS from '../constants/GlobalVars'

const DetailsHome = ({ imgPath, highlightedText, title, sectionIcon }) => {

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
                    <View style={{ flex: 1, margin: '15%', marginBottom: '5%', zIndex: 1}}>
                        {getContentSized('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim ipsum, eleifend a diam sed, pulvinar volutpat urna. Integer sed mauris ut nulla suscipit pharetra a at nunc. Donec non iaculis libero. Sed semper lacus ligula, vitae ornare enim blandit et. Nulla laoreet fermentum elit, id sollicitudin tortor vehicula rutrum. Vivamus euismod varius ligula sed ultrices. Vivamus malesuada at nulla eu vehicula. Donec blandit tellus eget augue consectetur, ut faucibus purus auctor. Sed turpis ex, rutrum sed gravida quis, tristique eu enim.')}
                    </View>
                    <MainPageScroller 
                        onPress={() => scrollToSectionBelow()} 
                        tabBarHeight={GLOBALS.TAB_BAR_HEIGHT}
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

export default DetailsHome