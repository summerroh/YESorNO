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

export default function Flip2() {
  // 맨처음엔 front 가 true
  const [side, setSide] = useState(true);
  // const [cardTransform, setCardTransform] = useState("0");
  // let cardTransform = "180deg";

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
    //반복회전?
    // for (let i = 0; i < 6; i++) {
    //   console.log("rotate");
    //   setSide(!side);
    //   flipAnimation();
    // }
  };
  // setInterval(flipAnimation2, 1000);

  // 반복회전 !  근데 setSide가 안되네?
  // 두번누르면 setSide가 됨
  let round = 6;
  function flipAnimation3() {
    if (round < 1) {
      return console.log("The loopo is over!");
    } else {
      setSide(!side);
      // console.log("side");
      flipAnimation();
      round--;
      setTimeout(() => flipAnimation3(), 400);
    }
  }

  if (rotateYAnimatedStyle.transform[0].rotateY) {
    // console.log(rotateYAnimatedStyle);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Animated.View
          style={[
            rotateYAnimatedStyle,
            side ? styles.frontStyle : styles.backStyle,
          ]}
        >
          <Text
            style={
              side
                ? [styles.frontText, { transform: [{ rotateY: "180deg" }] }]
                : styles.backText
            }
          >
            {side ? "YES" : "NO"}
          </Text>
        </Animated.View>

        <TouchableOpacity style={styles.buttonStyle} onPress={flipAnimation3}>
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
    position: "absolute",
    bottom: 10,
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
    color: "#000",
    // transform: [{ rotateY: "180deg" }],
  },
  backText: {
    fontSize: 100,
    color: "#fff",
  },

  frontStyle: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  backStyle: {
    // width: 300,
    // height: 500,
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
});
