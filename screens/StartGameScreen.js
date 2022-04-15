import { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

import Colors from "../constants/colors";

import CustomButton from "../components/ui/CustomButton";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen({ onPickNumber }) {
  const [numberInput, setNumberInput] = useState("");

  function numberInputHandler(numberInput) {
    setNumberInput(numberInput);
  }

  function resetInputHandler() {
    setNumberInput("");
  }

  function confirmInputHandler() {
    const choseNumber = parseInt(numberInput);

    if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) {
      Alert.alert(
        "Invalid Number!",
        "Number has to be a number between 1  and 99.",
        [{ text: "Okey", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    console.log("Valid Number!");
    onPickNumber(choseNumber);
  }

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen}>
        <View style={styles.screenContainer}>
          <Title>Guess My Number</Title>
          <Card>
            <InstructionText>Enter a Number</InstructionText>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType="number-pad"
              value={numberInput}
              onChangeText={numberInputHandler}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <CustomButton onPress={resetInputHandler}>Reset</CustomButton>
              </View>
              <View style={styles.buttonContainer}>
                <CustomButton onPress={confirmInputHandler}>
                  Confirm
                </CustomButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  screenContainer: {
    flex: 1,
    marginTop: 75,
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent,
    borderBottomWidth: 2,
    color: Colors.accent,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
