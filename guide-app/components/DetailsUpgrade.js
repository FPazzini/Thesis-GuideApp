import React, { Component } from 'react'
import {
    View,
    Text,
    Dimensions,
    Image,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { yellow } from 'ansi-colors';
import {
    SectionButton
 } from './common/'

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const upperSection = deviceHeight / 2.5
const bottomSection = (deviceHeight - upperSection) /2

export default class DetailsUpgrade extends Component {
    
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
            arrowDownStyle,
        } = styles
        
        return (
            <View style={container}>
                <View style={innerImageViewStyle}>
                    <Image 
                        style={imageStyle}
                        source={this.state.item.img} 
                    />
                </View>
            </View>
        )
    }
}

const styles = {
    container: {
        width: deviceWidth,
        height: deviceHeight - 30,
        backgroundColor: '#fff',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageStyle: {
        flex: 1,
        resizeMode: 'cover'
    },
}