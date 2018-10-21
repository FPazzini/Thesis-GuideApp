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

const DetailsReading = ({ imgPath, highlightedText, title, sectionIcon }) => {

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
                    <View style={{ width: '100%', height: GLOBALS.DEVICE_HEIGHT-GLOBALS.TAB_BAR_HEIGHT, marginBottom: '5%', zIndex: 1, alignItems: 'center'}}>
                        <ReadingCarousel 
                            cardsContent={[
                                {
                                id: "WpIAc9by5iU",
                                thumbnail: "https://img.youtube.com/vi/D9ioyEvdggk/hqdefault.jpg",
                                title: "Led Zeppelin - Stairway To Heaven"
                                }, {
                                id: "sNPnbI1arSE",
                                thumbnail: "https://img.youtube.com/vi/sNPnbI1arSE/hqdefault.jpg",
                                title: "Eminem - My Name Is"
                                }, {
                                id: "VOgFZfRVaww",
                                thumbnail: "https://img.youtube.com/vi/VOgFZfRVaww/hqdefault.jpg",
                                title: "Rap Devil"
                                }
                            ]}
                        />
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

export default DetailsReading

//<ScrollView>
//{getContentSized('Aenean nec massa a mi tristique malesuada. Proin volutpat enim vitae urna cursus, at faucibus nibh condimentum. Etiam orci urna, placerat vel vehicula cursus, tempus quis metus. Praesent sollicitudin viverra mollis. Pellentesque porta dui sit amet finibus ullamcorper. Vestibulum pharetra massa feugiat magna varius, nec dictum elit vehicula. Maecenas mollis tristique eros, elementum porttitor nibh dictum ac. Nam ullamcorper magna sem, ut laoreet mi lobortis in. Maecenas congue felis mauris, vitae auctor enim vestibulum sit amet. Vivamus dignissim pretium est imperdiet maximus. Integer eget libero neque.')}
//<ScrollView>