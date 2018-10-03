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
                        style={{ width: '100%', height: '100%' }}
                        underlayColor='lightgrey'
                    >
                        <View>
                            <View style={innerViewStyle}>
                                <ImageBackground style={image} source={this.state.item.avatar}>
                                    
                                </ImageBackground>
                            </View>
                            <View style={{ width: '50%', alignSelf: 'flex-end', alignItems: 'flex-end', justifyContent: 'flex-end', paddingTop: 20, position: 'relative', zIndex: 1 }}>
                                <CardButton 
                                    onPress={() => this.props.infoButtonClicked(this.state.item)}
                                    style={{ alignItems: 'center', justifyContent: 'center', position: 'absolute' }}
                                    arrowName={'ios-arrow-round-forward'}    
                                >
                                </CardButton>
                            </View>
                            <View style={rowStyle}>
                                <View style={descriptionViewStyle}>
                                    <MonoText style={descriptionStyle}>
                                        {this.state.item.description}
                                    </MonoText>
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
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
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

export default PathItem