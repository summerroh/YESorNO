{
  /* <StatusBar style="auto" /> */
}
{
  /* <Feather name="repeat" size={24} color="black" /> */
}
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import GestureFlipView from "react-native-gesture-flip-card";

import Flip2 from "./Flip2";

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Flip2 />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  frontStyle: {
    width: 300,
    height: 500,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  backStyle: {
    width: 300,
    height: 500,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
});
