import { View } from "react-native";

import Flip from "./Flip";
import Admob from "./components/Admob";

export default function App() {
  return (
    <>
      <View style={{ flex: 1 }}>
        <Flip />
        <Admob />
      </View>
    </>
  );
}
