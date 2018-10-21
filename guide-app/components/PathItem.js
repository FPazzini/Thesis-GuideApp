import React, { Component } from 'react'
import { 
    View,
    Text,
    TouchableHighlight,
    Image,
    TouchableOpacity,
    ImageBackground,
    Platform,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { MonoText } from '../components/StyledText';
import { ExpandingCard } from './common/'
import { 
    AdvancedCard,
    CardButton,
} from '../components/common/'
import Colors from '../constants/Colors'



class PathItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item: props.item,
            playSelected: false,
            icon: 'ios-play-outline'
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

    testPress (elem) {
        console.log(elem) 
    }

    infoClicked () {
        alert("Cliccato!")
        this.props.navigation.navigate('InfoScreen')
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
            <View>
                <AdvancedCard>
                    <TouchableHighlight
                        style={{ width: '100%', height
                        : '100%' }}
                        underlayColor='lightgrey'
                    >
                        <View>
                            <View style={innerViewStyle}>
                                <ImageBackground style={image} source={this.state.item.avatar}>
                                    
                                </ImageBackground>
                            </View>
                            
                            <View style={rowStyle}>
                                <View style={descriptionViewStyle}>
                                    <MonoText style={descriptionStyle}>
                                        {this.state.item.description}
                                    </MonoText>
                                    <View style={iconStyle}>
                                        <CardButton 
                                            onPress={() => this.props.infoButtonClicked(this.state.item)}
                                            style={{ alignItems: 'center', justifyContent: 'center' }}
                                            arrowName={Platform.OS === 'ios'
                                                        ? 'ios-arrow-round-forward'
                                                        : 'md-arrow-round-forward'
                                            }    
                                        >
                                        </CardButton>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableHighlight>
                </AdvancedCard>
            </View>
        )
    }
}

const styles = {
    innerViewStyle: {
        width: '100%',
        height: '70%',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        zIndex: 0,
    },
    descriptionViewStyle: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center', 
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
        fontSize: 27,
        fontWeight: '300',
    },
    rowStyle: {
        width: '100%',
        height: '30%',
        flexDirection:'row',
        alignItems: 'center',
    },
    iconStyle: {
        position: 'absolute',
        right: 0,
    },
}

export default PathItem