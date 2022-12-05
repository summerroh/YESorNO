import { StyleSheet, Text, View } from "react-native";

import Flip from "./Flip";

export default function App() {
  return (
    <>
      <View style={{ flex: 1 }}>
        <Flip />
      </View>
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
