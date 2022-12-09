import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
} from "react-native";

export default function ConfirmNumber() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Your Phone Number</Text>
      </View>
      <View style={styles.newNumber}>
        <Text style={styles.numText}>
          Please confirm your country code and enter your phone number
        </Text>
      </View>
      <View style={styles.numberContainer}>
        <TextInput
          style={styles.numberInput}
          placeholder={"Enter your number..."}
          placeholderTextColor={"#FFF"}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.btnContainer}>
        <Button title="Next" style={styles.btn} />
      </View>
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121b22",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 13,
    backgroundColor: "#1f2c34",
  },
  headerText: {
    fontSize: 20,
    color: "#FFF",
  },
  newNumber: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  numText: {
    color: "#8596a1",
  },
  numberContainer: {
    padding: 15,
  },
  numberInput: {
    borderColor: "#FFF",
    borderRadius: 10,
    borderWidth: 2,
    fontSize: 17,
    padding: 8,
    color: "#fff",
  },
  btnContainer: {
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    paddingLeft: 12,
    backgroundColor: "green",
  },
});
