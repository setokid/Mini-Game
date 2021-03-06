import { Text, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontFamily: "open-sans-bold",
    color: Colors.white,
    borderWidth: 2,
    borderColor: Colors.white,
    padding: 12,
    textAlign: "center",
    maxWidth: "80%",
  },
});
