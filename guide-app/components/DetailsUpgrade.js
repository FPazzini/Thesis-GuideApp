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
import DetailsHome from './DetailsHome'

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
        } = styles
        
        return (
            <View style={container}>
                <DetailsHome 
                    imgPath={require('../assets/images/whiteshark.jpg')} 
                    title='Alimentazione'    
                />
                <DetailsHome 
                    imgPath={require('../assets/images/whitesharkjumping.jpg')} 
                    
                />
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        flexDirection: 'column',
        flexDirection: 'column',
    },
}