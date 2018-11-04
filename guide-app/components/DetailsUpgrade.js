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
import DetailsAudio from './DetailsAudio'
import DetailsReading from './DetailsReading'
import DetailsVideo from './DetailsVideo'
import InfoPopup from './InfoPopup';

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
        
        //<DetailsHome imgPath={require('../assets/images/whiteshark.jpg')} title={this.state.item.description}/>
        
        return (
            <View style={container}>
                <DetailsReading 
                    imgPath={require('../assets/images/whiteshark.jpg')}
                    title='Leggi'
                />
                <DetailsAudio 
                    imgPath={require('../assets/images/whitesharkjumping.jpg')} 
                    playIcon={require('../assets/icons/play2.png')}
                    pauseIcon={require('../assets/icons/pause2.png')}
                    title='Ascolta'
                />

                <DetailsHome imgPath={require('../assets/images/whiteshark.jpg')} title={this.state.item.description}/>
                
                <DetailsVideo 
                    imgPath={require('../assets/images/gws.jpg')}
                    title='Guarda'
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