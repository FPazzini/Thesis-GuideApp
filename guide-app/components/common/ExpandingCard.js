import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Animated,
  Easing
} from "react-native";

const ExpandingCard = (props) => {
  let scaleValue = new Animated.Value(0);

  const cardScale = scaleValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 1.01, 1.05]
  });

  let transformStyle = { ...styles.card, transform: [{ scale: cardScale }] };

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
    >
      <Animated.View style={transformStyle}>
        {props.children}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = {
  card: {
    width: '100%',
    height: '100%',
    backgroundColor: '#2D2C2C',
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
  },
  name: {
    fontSize: 15,
    color: "#333",
    fontWeight: "bold"
  },
  thumbnail: {
    width: 75,
    height: 75
  },
  icons: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  }
};

export { ExpandingCard };