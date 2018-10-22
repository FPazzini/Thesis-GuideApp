import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    ImageBackground,
} from 'react-native'
import { MonoText } from '../components/StyledText'
import {
    HomeCard, 
} from '../components/common'
import HomeScreen from '../screens/HomeScreen';

class CardsPath extends Component {

    constructor (props) {
        super (props)
        this.state = {
            item: props.item,
        }
    }

    render () {

        const {
            container,
            imageContainer,
            imageStyle,
        } = styles

        return (
            <View style={container}>
                <HomeCard>
                    <View>
                        <View style={imageContainer}>
                            <ImageBackground 
                                style={imageStyle}
                                source={this.state.item.imagePath}    
                            />
                        </View>
                    </View>
                </HomeCard>
            </View>
        )
    }
}

const styles = {
    container: {
        width: '100%', 
        height: '100%',
        alignItems: 'center',
        backgroundColor: 'blue',
        justifyContent: 'center',
        marginTop: 10,
    },
    imageContainer: {
        width: '100%',
        height: '70%',
        overflow: 'hidden',
    },
    imageStyle: {
        width: '100%',
        height: '100%',
    },
    titleContainer: {
        width: '100%',
        height: '30%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    titleStyle: {

    },
}

export default CardsPath