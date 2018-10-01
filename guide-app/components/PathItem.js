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
                        style={{ width: '100%', height: '100%' }}
                        underlayColor='lightgrey'
                    >
                        <View>
                            <View style={innerViewStyle}>
                                <ImageBackground style={image} source={this.state.item.avatar}>
                                    <CardButton onPress={this.testPress.bind(this)}>
                                        Click!
                                    </CardButton>
                                </ImageBackground>
                            </View>
                            <View style={rowStyle}>
                                <View style={descriptionViewStyle}>
                                    <MonoText style={descriptionStyle}>
                                        {this.state.item.description}
                                    </MonoText>
                                </View>
                                <View style={iconsViewStyle}>
                                    <TouchableOpacity onPress={this.play.bind(this)} underlayColor=''>
                                        <Ionicons 
                                            style={iconStyle} 
                                            name={this.state.icon}
                                            size={40} 
                                            color={Colors.tintColor}
                                        />
                                    </TouchableOpacity>
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
        height: '80%',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    descriptionViewStyle: {
        flex: 1,
        width: '50%', 
        alignItems: 'flex-start', 
        justifyContent: 'center',
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

export default PathItem