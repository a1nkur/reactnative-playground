import { StyleSheet, View } from "react-native";
import GameStartScreen from "./screens/game-start-screen";

export default function App() {
  return (
    <View style={styles.rootScreen}>
      <GameStartScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: "#ddb52f",
  },
});
