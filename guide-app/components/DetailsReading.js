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
                                    id        : "WpIAc9by5iU",
                                    thumbnail: "https://img.youtube.com/vi/D9ioyEvdggk/hqdefault.jpg",
                                    content: "Le uova di squali e razze sono composte da un guscio esterno che al tatto è ruvido e sembra di cuoio. In realtà il guscio è di collagene, cioè di tessuto connettivo.\nLe uova hanno dei filamenti o delle “corna” che servono ad ancorarle al fondo. All’interno dell’uovo si sviluppa il piccolo, nutrendosi del tuorlo.",
                                    title: "Guscio"
                                }, {
                                    id: "sNPnbI1arSE",
                                    thumbnail: "https://img.youtube.com/vi/sNPnbI1arSE/hqdefault.jpg",
                                    content: "Lo sviluppo dell’embrione può durare anche diversi mesi e, di solito, dopo alcune settimane dalla deposizione delle uova, sul guscio si aprono due sottili fessure per permettere la circolazione dell’acqua, che viene favorita anche dal movimento dell’embrione. Alla schiusa il piccolo è come un adulto in miniatura.",
                                    title: "Sviluppo"
                                }, {
                                    id: "VOgFZfRVaww",
                                    thumbnail: "https://img.youtube.com/vi/VOgFZfRVaww/hqdefault.jpg",
                                    content: "Le uova possono avere forme molto diverse e dalle uova si può riconoscere la specie di appartenenza! Le uova possono essere allungate come quelle del gattuccio, oppure più larghe come quelle delle torpedini. In alcuni casi possono anche avere un guscio spiralato, per ancorare l’uovo meglio al fondo e rendere più difficile la rimozione da parte di predatori.",
                                    title: "Aspetto"
                                }, {
                                    id: "PXRUhtdlI2U",
                                    thumbail: "",
                                    content: "Le uova di squali e razze si possono trovare attaccate sul fondo.\nLe tegnúe di Chioggia sono un ambiente dove il gattopardo, Scyliorhinus stellaris, spesso depone le uova. Le uova possono trovarsi attaccate alle rocce o alle gorgonie.\nI gusci vuoti possono trovarsi anche sulle spiagge, specialmente dopo le mareggiate.",
                                    title: "Luogo"
                                }, {
                                    id: "jskRYhlStOy",
                                    thumbail: "",
                                    content: "Le uova di squali e razze vengono comunemente chiamate borsette o borsellini delle sirene.\nSpesso le uova vuote, dopo che il piccolo ne è uscito, vengono infatti trovate sulle spiagge e sembrano proprio delle piccole borsette.",
                                    title: "Lo sapevi?"
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