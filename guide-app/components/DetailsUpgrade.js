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
import DetailsGallery from './DetailsGallery';

export default class DetailsUpgrade extends Component {
    
    constructor (props) {
        super (props)
        this.state = {
            item: props.item,
        }
    }

    componentDidMount () {
    }


    render () {

        const {
            container,
        } = styles
        
        //<DetailsHome imgPath={require('../assets/images/whiteshark.jpg')} title={this.state.item.description}/>
        //<DetailsAudio imgPath={require('../assets/images/whitesharkjumping.jpg')}  playIcon={require('../assets/icons/play2.png')} pauseIcon={require('../assets/icons/pause2.png')} title='Ascolta' />

        return (
            <View style={container}>
                <DetailsReading 
                    imgPath={require('../assets/images/whiteshark.jpg')}
                    readings={this.state.item.readingSection}
                    title='Leggi'
                />
                
                <DetailsGallery 
                    imgPath={require('../assets/images/whiteshark.jpg')}
                    galleryImages={this.state.item.gallerySection}
                    title="Galleria"
                />
                
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