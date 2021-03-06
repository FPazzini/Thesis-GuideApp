import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Platform,
    PixelRatio,
} from 'react-native'
import { MonoText } from './StyledText'
import GLOBALS from '../constants/GlobalVars'
import { FontStyleEval } from './FontSizeEval';
import { MenuItem } from './common';

const sectionFocusedSize = 40
const width = 40 * (Platform.OS === 'ios' ? 1 : PixelRatio.get());
const height = 40 * (Platform.OS === 'ios' ? 1 : PixelRatio.get());

export default class MenuItems extends Component {

    constructor (props) {
        super (props) 
        this.state = {
            menuOptions: [
                {
                    width: sectionFocusedSize,
                    height: sectionFocusedSize,
                },
                {
                    width: sectionFocusedSize,
                    height: sectionFocusedSize,
                },
                {
                  width: sectionFocusedSize,
                  height: sectionFocusedSize,
              },
              {
                  width: sectionFocusedSize,
                  height: sectionFocusedSize,
              },
            ],
            activated: [true, false, false, false]
        }
    }

    componentDidMount() {
        this.props.onRef(this)
    }
    
    componentWillUnmount() {
        this.props.onRef(undefined)
    }

    activate (itemIndex) {
        this.state.activated.map((_v, index) => {
            if (index === itemIndex) {
                const newActivated = [...this.state.activated];
                newActivated.map((_, idx) => {
                    if (idx !== index) {
                        newActivated[idx] = false
                    }
                })
                newActivated[index] = true;
                console.log(newActivated)
                this.setState({ activated: newActivated });
            }
        })
    }

    render () {
        return (
            <View style={styles.viewTextStyle}>
                <TouchableOpacity onPress={() => {
                    this.activate(0)
                    this.props.doScroll(0)}
                }>
                    <MenuItem 
                        iconSource={this.state.activated[0] ? require('../assets/icons/carousel-outline.png') : require('../assets/icons/carousel.png')}
                        text={'Leggi'}
                     />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.activate(1)
                    this.props.doScroll((GLOBALS.DEVICE_HEIGHT))}
                }>
                    <MenuItem 
                        iconSource={this.state.activated[1] ? require('../assets/icons/gallery-outline.png') : require('../assets/icons/gallery.png')}
                        text={'Galleria'}
                     />
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => {
                    this.activate(3)
                    this.props.doScroll((GLOBALS.DEVICE_HEIGHT * 2))}
                }>
                    <MenuItem 
                        iconSource={this.state.activated[2] ? require('../assets/icons/youtube-outline.png') : require('../assets/icons/youtube.png')}
                        text={'Guarda'}
                     />
                </TouchableOpacity>
            </View>
        )
    }
}

// <TouchableOpacity onPress={() => {
//    this.activate(2)
//    this.props.doScroll((GLOBALS.DEVICE_HEIGHT * 2))}
//}>
//    <MonoText style={styles.textStyle}>
//        <Image source={this.state.activated[2] ? require('../assets/icons/open-book-outline.png') : require('../assets/icons/open-book.png')} style={styles.notActivatedItem} />
//    </MonoText>
//</TouchableOpacity>

const styles = {
    textStyle: {
        fontSize: 40,
        color: 'white',
        padding: 7,
        fontWeight: '200',
    },
    viewTextStyle: {
        width: '100%',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
    },
    singleItem: {
        backgroundColor: 'yellow',
        margin: 5,
    },
    topSection: {

    },
    bottomSection: {

    },
    activatedItem: {
        padding: 7,
        width: 60,
        height: 60,
    },
    notActivatedItem: {
        padding: 7,
        width: width,
        height: height,
    }
}