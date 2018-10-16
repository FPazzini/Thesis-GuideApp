import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native'
import { MonoText } from './StyledText'
import GLOBALS from '../constants/GlobalVars'

const sectionFocusedSize = 40

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
            ]
        }
    }

    render () {
        return (
            <View style={styles.viewTextStyle}>
                <TouchableOpacity onPress={() => this.props.doScroll(0)}>
                    <MonoText style={styles.textStyle}>
                        <Image source={require('../assets/icons/shark.png')} style={{ width: this.state.menuOptions[0].width, height: this.state.menuOptions[0].height, padding: 7, }} />
                    </MonoText>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.doScroll((GLOBALS.DEVICE_HEIGHT))}>
                    <MonoText style={styles.textStyle}>
                        <Image source={require('../assets/icons/play-button.png')} style={{ width: this.state.menuOptions[1].width, height: this.state.menuOptions[1].height, padding: 7, }} />
                    </MonoText>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.doScroll((GLOBALS.DEVICE_HEIGHT * 2))}>
                    <MonoText style={styles.textStyle}>
                        <Image source={require('../assets/icons/open-book.png')} style={{ width: this.state.menuOptions[2].width, height: this.state.menuOptions[2].height, padding: 7, }} />
                    </MonoText>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.doScroll((GLOBALS.DEVICE_HEIGHT * 3))}>
                    <MonoText style={styles.textStyle}>
                        <Image source={require('../assets/icons/youtube.png')} style={{ width: this.state.menuOptions[3].width, height: this.state.menuOptions[3].height, padding: 7, }} />
                    </MonoText>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = {
    textStyle: {
        fontSize: 40,
        color: 'white',
        padding: 7,
        fontWeight: '200',
    },
    viewTextStyle: {
        flex: 1,
        flexDirection: 'row',
        position: 'absolute',
        bottom: 20,
        alignSelf:'center',
        alignItems: 'center',
        margin: 5,
        zIndex: 1,
    },
}