import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    ImageBackground,
} from 'react-native'
import { MonoText } from '../components/StyledText'
import {
    HomeCard, 
    Button,
} from '../components/common'
import HomeScreen from '../screens/HomeScreen';
import { FontStyleEval } from './FontSizeEval';
import TEXT_CLASSES from '../constants/TextClasses';

class CardsPath extends Component {

    constructor (props) {
        super (props)
        this.state = {
            item: props.item,
        }
        console.log("avatar: ",props.item.avatar)
    }

    render () {

        const {
            container,
            imageContainer,
            imageStyle,
            titleContainer,
            innerTitleViewStyle,
            titleStyle,
        } = styles

        return (
            <View style={container}>
                <HomeCard>
                    <View>
                        <View style={imageContainer}>
                            <ImageBackground 
                                style={imageStyle}
                                source={this.state.item.avatar} 
                                resizeMode='cover'   
                            >
                            </ImageBackground>
                        </View>
                        <View style={{width: '100%'}}>
                            <View style={titleContainer}>
                                <View style={innerTitleViewStyle}>
                                    <FontStyleEval 
                                        text={this.state.item.description}
                                        style={titleStyle}
                                        textType={TEXT_CLASSES.TITLE}
                                    />
                                </View>
                            </View>
                            <View style={{flex: 1}}>
                                <Button onPress={() => this.props.infoButtonClicked(this.state.item)}>
                                    Dettagli
                                </Button>
                            </View>
                        </View>
                    </View>
                </HomeCard>
            </View>
        )
    }
}

const styles = {
    container: {
        width: '100%', 
        height: '100%',
        marginTop: 10,
    },
    imageContainer: {
        width: '100%',
        height: '60%',
        overflow: 'hidden',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
    },
    imageStyle: {
        width: '100%',
        height: '100%',
    },
    titleContainer: {
        width: '100%',
        height: '40%',
        flexDirection: 'row',

        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
    },
    innerTitleViewStyle: {
        flex: 1,
    },
    titleStyle: {
        fontWeight: '600',
        marginLeft: 10,
        marginTop: 3,
    },
}

export default CardsPath