import React from 'react'
import {
    View,
    TouchableOpacity,
    ImageBackground,
    FlatList,
    Image,
    Text,
} from 'react-native'
import { FontStyleEval } from './FontSizeEval'
import GLOBALS from '../constants/GlobalVars'
import { Card, SquaredCard } from './common';

const DetailsGallery = ({ imgPath, title, galleryImages }) => {

    const numCols = 2

    const {
        innerImageViewStyle,
        titleStyle,
        contentStyle,
        infoStyle,
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

    function getDescription (itemTitle) {
        return (
            <View style={{ marginTop: 5, borderColor: '#1b1a1a', borderTopWidth: 0.5, justifyContent: 'center'}}>
                <FontStyleEval
                    text={itemTitle}
                    style={{ fontWeight: '200', color: 'white', padding: 5, marginLeft: 5 }}
                    textType="section"
                />
            </View>
        )
    }

    function renderList ({item}) {
        return (
            <View style={{ height: '50%', margin: 7, }}>
                <SquaredCard>
                    <View style={{ flex: 1, borderTopRightRadius: 7, borderTopLeftRadius: 7, borderBottomLeftRadius: 7, borderBottomRightRadius: 7, }}>
                        <View style={styles.innerViewStyle}>
                            <Image style={styles.image} source={item.img} />
                        </View>
                        <View style={{ flex: 2 }}>
                            {getDescription(item.itemTitle)}
                        </View>
                    </View>
                </SquaredCard>
            </View>
        );
    }

    function isToShowMore () {
        if (galleryImages.length > 4) {
            var newImgs = galleryImages.slice(0, 4)
            return (
                <View>
                    <FlatList
                        data={newImgs}
                        renderItem={renderList.bind(this)}
                        horizontal={true}
                        keyExtractor={item => item.id}
                    />
                    <View style={{ flex: 2, alignItems: 'flex-end', justifyContent: 'flex-start' }}>
                        <FontStyleEval
                            text="Vedi galleria..."
                            textType="section"
                            style={infoStyle}
                        />
                    </View>
                </View>
            )

        } else {
            return (
                <View>
                    <FlatList
                        data={galleryImages}
                        renderItem={renderList.bind(this)}
                        horizontal={true}
                        keyExtractor={item => item.id}
                    />
                </View>
            )
        }
    }

    return (
        <View style={innerImageViewStyle}>
            <ImageBackground 
                style={{ width: '100%', height: '100%', zIndex: 0 }}
                resizeMode='cover'
                source={imgPath}
                blurRadius={3}>
                <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,.67)' }}>
                    <View style={{ flex: 2, padding: 10, zIndex: 1, alignItems: 'center' }}>
                        {getTitleSized(title)}
                    </View>
                    <View style={{ flex: 6, zIndex: 1, alignItems: 'center'}}>
                        {isToShowMore()}
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
    },
    innerViewStyle: {
        flex: 4,
        borderTopRightRadius: 7,
        borderTopLeftRadius: 7,
        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    infoStyle: {
        color: 'white',
        fontWeight: '400',
        padding: 5,
        textDecorationLine: 'underline',
    }
   
}

export default DetailsGallery