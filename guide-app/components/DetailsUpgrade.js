import React, { Component } from 'react'
import {
    View,
    Text,
    Dimensions,
    Image,
} from 'react-native'
import { yellow } from 'ansi-colors';
import {
    SectionButton
 } from './common/'
import DetailsSection from './DetailsSection'

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
            viewTextStyle,
            textStyle,
        } = styles
        
        return (
            <View style={container}>
                
            
                <DetailsSection imgPath={require('../assets/images/whiteshark.jpg')} />
                <DetailsSection imgPath={require('../assets/images/whitesharkjumping.jpg')} />

            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        flexDirection: 'column',
    },
    textStyle: {
        fontSize: 25,
        color: 'blue',
    },
    viewTextStyle: {
        flex: 1,
        position: 'absolute',

        padding: 10,
        zIndex: 1,
    }
}