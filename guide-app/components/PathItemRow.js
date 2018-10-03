import React, { Component } from 'react'
import { 
    View,
    Text,
    TouchableHighlight,
    Image,
    TouchableOpacity,
    ImageBackground,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { MonoText } from '../components/StyledText';
import { 
    AdvancedCard,
    CardButton,
    CircularCard,
} from '../components/common/'
import Colors from '../constants/Colors'
import { _throwIfAudioIsDisabled } from 'expo/src/av/Audio';



class PathItemRow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item: props.item,
            playSelected: false,
            icon: 'ios-play-outline',
            isShowContent: false,
        }
    }

    play () {
        // Play button is actived
        if (this.state.playSelected) {
            this.setState({
                playSelected: !this.state.playSelected,
                icon: 'ios-play-outline'
            })
        } else {
            // Play button is deactivated
            this.setState({
                playSelected: !this.state.playSelected,
                icon: 'ios-play'
            })
        }
    }

    showContent () {
        if (this.state.showContent) {
            this.setState({ showContent: false })
        } else {
            this.setState({ showContent: true })
        }
    }

    showTextOverlay () {
        if (this.state.showContent) {
            return (
                <View style={{ zIndex: 1, width: '100%', height: '100%', backgroundColor: 'rgba(27, 153, 139, 0.8)', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 30, color: 'white' }}>
                        Prova
                    </Text>
                </View>
            )
        } else {
            return null
        }
    }
    

    testPress (elem) {
        console.log(elem) 
    }

    render() {
        const { 
            innerViewStyle,
            image,
            descriptionStyle,
            rowStyle,
            descriptionViewStyle,
            iconsViewStyle,
            iconStyle,
        } = styles

        return (
            <View style={{ flexDirection: 'column' }}>
                <View style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
                    <MonoText style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 5 }}>
                        Sezione
                    </MonoText>
                </View>
                <View style={{ flexDirection: 'row', borderBottomColor: 'black', borderBottomWidth: 1, }}>
                    <View style={{ width: '50%', }}>
                        <CircularCard>
                            <TouchableHighlight
                                style={{ width: '100%', height: '100%' }}
                                underlayColor='#0D000000'
                                onPress={this.showContent.bind(this)}
                            >
                                <View>
                                    <View style={innerViewStyle}>
                                        <ImageBackground style={image} source={this.state.item.avatar}>
                                            {this.showTextOverlay()} 
                                        </ImageBackground>
                                    </View>
                                </View>
                            </TouchableHighlight>
                        </CircularCard>
                    </View>
                    <View style={{ width: '50%'}}>
                        <View style={{ marginLeft: 5, padding: 5 }}>
                            <View style={{ flex: 1, height: 60, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <CardButton arrowName="ios-play" />
                                <Text style={{ fontSize: 25 }}>Riproduci</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = {
    innerViewStyle: {
        width: '100%',
        height: '100%',
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100,
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        overflow: 'hidden',
    },
    descriptionViewStyle: {
        flex: 1,
        width: '50%',
        alignItems: 'flex-start', 
        justifyContent: 'flex-start',
    },
    iconsViewStyle: {
        flex: 1,
        width: '50%', 
        justifyContent: 'center',
        alignItems: 'center', 
    },
    descriptionStyle: {
        color: 'black',
        marginLeft: 10,
        fontSize: 25,
    },
    rowStyle: {
        flexDirection:'row',
    },
    iconStyle: {
        marginRight: 30,
    },
}

export default PathItemRow