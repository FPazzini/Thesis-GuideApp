import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    TouchableHighlight,
    TouchableOpacity,
} from 'react-native'
import { MonoText } from './StyledText'
import GLOBALS from '../constants/GlobalVars'
import InfoPopup from './InfoPopup'

export default class Play extends Component {
    
    constructor (props) {
        super (props)
        this.state = {
            playBtnIcon: props.playIcon,
            playIcon: props.playIcon,
            pauseIcon: props.pauseIcon, 
            isPlaying: false,
        }
    }

    toggleSound () {
        // If the sound is being reproduced at the moment
        if (this.state.isPlaying) {
            this.setState({
                isPlaying: false,
                playBtnIcon: this.state.playIcon
            })
            // Stop sound
        } else {
            console.log('metto icona pausa')
            this.setState({
                isPlaying: true,
                playBtnIcon: this.state.pauseIcon
            })
            // Start sound
        }
        
    }

    render () {
        return (
            <View>
                <View style={styles.imageViewStyle}>
                    <TouchableOpacity onPress={this.toggleSound.bind(this)}>
                        <Image source={this.state.playBtnIcon} style={{ resizeMode: 'contain', width: 100, height: 100 }} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = {
    imageViewStyle: {
        alignItems: 'center',
        padding: 10,
        marginTop: 15,
    }
}