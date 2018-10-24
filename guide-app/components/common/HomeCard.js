import React from 'react'
import {
    View,
    Text,
    TouchableHighlight,
    TouchableWithoutFeedback,
    Dimensions,
    Animated,
    Easing,
} from 'react-native'
import { FontSizeEval } from '../FontSizeEval'

const deviceWidth = Dimensions.get('window').width;

const HomeCard = ({ onPress, children }) => {

let scaleValue = new Animated.Value(0);

    const cardScale = scaleValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 1.01, 1.05]
    });

    let transformStyle = { ...styles.container, transform: [{ scale: cardScale }] };

    return (
        <TouchableWithoutFeedback
            onPressIn={() => {
                scaleValue.setValue(0);
                Animated.timing(scaleValue, {
                    toValue: 1,
                    duration: 250,
                    easing: Easing.linear,
                    useNativeDriver: true
                }).start();
                }}
                onPressOut={() => {
                Animated.timing(scaleValue, {
                    toValue: 0,
                    duration: 100,
                    easing: Easing.linear,
                    useNativeDriver: true
                }).start();
                }}
                onPress={onPress}
            >
            <Animated.View style={transformStyle}>
                {children}
            </Animated.View>
        </TouchableWithoutFeedback>
    );
    
}

const styles = {
    container: {

        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,

        shadowColor: '#2C2C2C',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.15,
        shadowRadius: 2,

        borderWidth: 0.75,
        borderColor: '#ddd',
    },
    cardStyle: {
        width: deviceWidth / 1.75,
        height: 300,
    }
}

export { HomeCard }