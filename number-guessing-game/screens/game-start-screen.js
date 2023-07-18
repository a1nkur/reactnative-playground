import { TextInput, View } from "react-native";

import PrimaryButton from "../components/primary-button";

function GameStartScreen() {
  return (
    <View>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}

export default GameStartScreen;
