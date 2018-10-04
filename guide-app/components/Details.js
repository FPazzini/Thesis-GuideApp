import React, { Component } from 'react'
import {
    View,
    Text,
    Dimensions,
    Image,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { yellow } from 'ansi-colors';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const upperSection = deviceHeight / 2.5
const bottomSection = deviceHeight - upperSection

export default class Details extends Component {
    
    constructor (props) {
        super (props)
        this.state = {
            item: props.item,
            
        }
    }

    componentDidMount () {
        console.log(this.state.item)
    }


    render () {
        const {
            container,
            imageViewStyle,
            imageStyle, 
            blocksViewStyle,
            blocksStyle,
            innerImageViewStyle,
        } = styles
        
        return (
            <View style={container}>
                <View style={imageViewStyle}>
                    <View style={innerImageViewStyle}>
                        <Image 
                            style={imageStyle}
                            source={this.state.item.img} 
                        />
                    </View>
                </View>
                <View style={blocksViewStyle}>
                    <View style={{ backgroundColor: '#FB5012', ...blocksStyle }}> />
                        <Ionicons 
                            name={'ios-play'}
                            size={50} 
                            color='black'
                        />
                    </View>
                    <View style={{ backgroundColor: 'yellow', ...blocksStyle }}> />
                        <Ionicons 
                            name={'ios-information-circle-outline'}
                            size={50} 
                            color='black'
                        />
                    </View>
                    <View style={{ backgroundColor: 'orange', ...blocksStyle }}> />
                        <Ionicons 
                            name={'ios-videocam'}
                            size={50} 
                            color='black'
                        />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    imageViewStyle: {
        flex: 1,
        height: upperSection,
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerImageViewStyle: {
        width: deviceWidth - 10,
        height: '90%',
        padding: 5,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    imageStyle: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    blocksViewStyle: {
        flexDirection: 'row',
        flex: 1,
        height: bottomSection,
        //alignItems: 'center'
    },
    blocksStyle: {
        width: deviceWidth / 3 - 10,
        height: deviceWidth / 3 - 10,
        marginTop: 30,
        marginLeft: 5,
        marginRight: 5,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,

        borderWidth: 1,
        borderColor: '#1B1B1B',

        alignItems: 'center',
        justifyContent: 'center'

        //shadowColor: '#202020',
        //shadowOffset: { width: 0, height: 1},
        //shadowOpacity: 0.5,
        //shadowRadius: 5,
    }
}