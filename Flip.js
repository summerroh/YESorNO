// Flip Image View Horizontally Using Animation in React Native
// https://aboutreact.com/react-native-flip-image-horizontally-using-animation/

// import React in our code
import React, { useCallback, useEffect, useState } from "react";
import { flipAnimation, rotateYAnimatedStyle } from "./Animation";
import GestureRecognizer from "react-native-swipe-gestures";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { BebasNeue_400Regular } from "@expo-google-fonts/bebas-neue";
import { Syne_700Bold } from "@expo-google-fonts/syne";
import { Cormorant_700Bold } from "@expo-google-fonts/cormorant";

// import all the components we are going to use
import { SafeAreaView, StyleSheet, View, Text, Animated } from "react-native";
import { Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

// flipCard펑션에서 반복해서 클릭해도 이미 돌아가고 있는게 다 끝나면 돌아가게 하도록
// flipping이라는 플래그 사용
let flipping = false;

// a = setSide에 사용하기 위한 variable
let a = true;

// 폰트 로딩 관련 // Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function () {
  // 폰트 로딩
  let [fontsLoaded] = useFonts({
    Syne_700Bold,
    RubikBubbles: require("./assets/RubikBubbles-Regular.ttf"),
    BebasNeue_400Regular,
    Cormorant_700Bold,
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  // 폰트 로딩 끝
  let fontList = [
    "Syne_700Bold",
    "RubikBubbles",
    "BebasNeue_400Regular",
    "Cormorant_700Bold",
  ];
  // let fontIndex = 0;
  // const [font, setFont] = useState("Syne_700Bold");
  const [fontIndex, setFontIndex] = useState(0);

  // 맨처음엔 front 가 true
  const [side, setSide] = useState(true);
  // 오직 repeat 아이콘 conditional 렌더에 사용하기 위한 state
  const [flippingState, setFlippingState] = useState(false);

  // 랜덤 숫자 만들기
  function getRandomInt(max, min) {
    return Math.floor(Math.random() * max) + min;
  }

  const onSwipeRight = () => {
    // 돌아가는 중이면 return
    if (flipping) return;
    flipCard();
  };
  const onSwipeLeft = () => {
    if (flipping) return;
    flipCard();
  };

  // 반복회전 !
  function flipCard() {
    // getRandomInt에 인수로 주는 max숫자를 최대값으로, min숫자를 최소값으로 해서 랜덤숫자가 나옴
    // 현재 10이 최대값이고 3이 최소값임
    let round = getRandomInt(8, 3);
    if (flipping) return;

    const flip = () => {
      if (round < 1) {
        flipping = false;
        setFlippingState(flipping);
      } else {
        flipping = true;
        setFlippingState(flipping);
        a = !a;
        setSide(a);
        flipAnimation();
        round--;
        setTimeout(() => flip(), 400);
      }
    };
    flip();
  }

  const changeFont = () => {
    // 폰트 리스트 안에서 돌아가면서 인덱스 설정해줌
    let fontListLength = fontList.length;
    if (fontIndex < fontListLength - 1) {
      setFontIndex(fontIndex + 1);
    } else {
      setFontIndex(0);
    }
  };

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      {/* <StatusBar style={side ? "dark" : "light"} /> */}
      <StatusBar style={"dark"} />
      <View style={styles.container}>
        {!flippingState && (
          <Feather
            name="repeat"
            size={29}
            color={side ? "black" : "white"}
            style={styles.icon}
            onPress={flipCard}
          />
        )}
        {!flippingState && (
          <Feather
            name="type"
            size={29}
            color={side ? "black" : "white"}
            style={styles.leftIcon}
            onPress={changeFont}
          />
        )}
        <GestureRecognizer
          style={{ width: "90%", height: "90%" }}
          onSwipeRight={() => onSwipeRight()}
          onSwipeLeft={() => onSwipeLeft()}
        >
          <Animated.View
            style={[
              rotateYAnimatedStyle,
              side ? styles.frontStyle : styles.backStyle,
            ]}
          >
            <Text
              style={
                side
                  ? [
                      {
                        fontSize: 120,
                        color: "#000",
                        fontFamily: fontList[fontIndex],
                      },
                      { transform: [{ rotateY: "180deg" }] },
                    ]
                  : {
                      fontSize: 120,
                      color: "#fff",
                      fontFamily: fontList[fontIndex],
                    }
              }
            >
              {side ? "YES" : "NO"}
            </Text>
          </Animated.View>
        </GestureRecognizer>
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
    backgroundColor: "white",
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

  frontStyle: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
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
  icon: {
    position: "absolute",
    top: 60,
    right: 40,
    zIndex: 10,
  },
  leftIcon: {
    position: "absolute",
    top: 60,
    left: 40,
    zIndex: 10,
  },
});
