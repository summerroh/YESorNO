import React from "react";

import { Animated } from "react-native";

let animatedValue = new Animated.Value(0);

let currentValue = 0;

animatedValue.addListener(({ value }) => {
  currentValue = value;
});

// 180->0->-180->0 이 아니라
//0->180->360->0으로 해야하나
const flipAnimation = () => {
  if (currentValue >= 90) {
    Animated.spring(animatedValue, {
      toValue: 0,
      tension: 10,
      friction: 8,
      useNativeDriver: false,
    }).start();
  } else if (0 <= currentValue && currentValue <= 90) {
    Animated.spring(animatedValue, {
      toValue: -180,
      tension: 10,
      friction: 8,
      useNativeDriver: false,
    }).start();
  } else if (currentValue <= -90) {
    Animated.spring(animatedValue, {
      toValue: 0,
      tension: 10,
      friction: 8,
      useNativeDriver: false,
    }).start();
  } else if (0 >= currentValue && currentValue >= -90) {
    Animated.spring(animatedValue, {
      toValue: 180,
      tension: 10,
      friction: 8,
      useNativeDriver: false,
    }).start();
  }
};

const setInterpolate = animatedValue.interpolate({
  inputRange: [0, 180],
  outputRange: ["180deg", "360deg"],
});

const rotateYAnimatedStyle = {
  transform: [{ rotateY: setInterpolate }],
};

export { flipAnimation, rotateYAnimatedStyle };
