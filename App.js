import { StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import Flip2 from "./Flip2";

export default function App() {
  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Flip2 />
      </GestureHandlerRootView>
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
