// Flip Image View Horizontally Using Animation in React Native
// https://aboutreact.com/react-native-flip-image-horizontally-using-animation/

// import React in our code
import React, { useState, useRef } from "react";
import { flipAnimation, rotateYAnimatedStyle } from "./Animation";

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Animated,
} from "react-native";
import Card from "./Card";

export default function Flip2() {
  // 맨처음엔 front 가 true
  const [side, setSide] = useState(true);
  // const sideRef = useRef(true);

  // 카드 스타일
  const frontStyle = {
    width: "300",
    height: "500",
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "20",
  };

  const flipAnimation2 = () => {
    setSide(!side);
    flipAnimation();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Animated.View
          style={[
            rotateYAnimatedStyle,
            side ? styles.frontStyle : styles.backStyle,
          ]}
        >
          <Text style={side ? styles.frontText : styles.backText}>
            {side ? "YES" : "NO"}
          </Text>
        </Animated.View>

        <TouchableOpacity style={styles.buttonStyle} onPress={flipAnimation2}>
          <Text style={styles.buttonTextStyle}>
            Click Here To Flip The Image
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonStyle: {
    fontSize: 16,
    color: "white",
    backgroundColor: "green",
    padding: 5,
    marginTop: 32,
    minWidth: 250,
  },
  buttonTextStyle: {
    padding: 5,
    color: "white",
    textAlign: "center",
  },

  frontText: {
    fontSize: 100,
    color: "#fff",
    transform: [{ rotateY: "180deg" }],
  },
  backText: {
    fontSize: 100,
    color: "#fff",
  },

  frontStyle: {
    width: 300,
    height: 500,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  backStyle: {
    width: 300,
    height: 500,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
});
