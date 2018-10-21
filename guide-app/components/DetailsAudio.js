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
import Play from './Play'
import { FontStyleEval } from './FontSizeEval'
import GLOBALS from '../constants/GlobalVars'
import InfoPopup from './InfoPopup'

const DetailsHome = ({ imgPath, title, playIcon, pauseIcon }) => {

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
            <View>
                <FontStyleEval 
                    style={contentStyle}
                    text={text}
                    textAlign="center"
                    textType="subtitle"
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
                    <View style={{ flex: 1, height: GLOBALS.DEVICE_HEIGHT-GLOBALS.TAB_BAR_HEIGHT, margin: '15%', marginBottom: '5%', zIndex: 1}}>
                        {getContentSized('Riproduci audio per scoprire il prossimo indizio')}
                        <Play playIcon={playIcon} pauseIcon={pauseIcon} />
                        <InfoPopup text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus faucibus quam non viverra feugiat. Aliquam venenatis sed mauris blandit elementum. Aliquam ut viverra nulla, ac vestibulum nisl. Ut ac sollicitudin risus. Aliquam vitae aliquam lectus, eget mollis elit. Pellentesque aliquam et magna vel dignissim. Vivamus convallis consequat nibh, vitae accumsan lectus malesuada lacinia. Duis efficitur turpis a lorem mollis posuere. Mauris nec felis vitae dolor accumsan suscipit. In efficitur velit eleifend magna convallis, at auctor tellus blandit. Vivamus eleifend urna non urna tempus fringilla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque quis libero in lorem aliquam eleifend. Aliquam et faucibus elit, ornare pharetra elit.'} />
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