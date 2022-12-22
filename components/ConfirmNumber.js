import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  Alert,
} from "react-native";
import { useState } from "react"
import axios from "axios"
import server from "../endPoint"
import { trimNumber } from "../helperFunctions"

export default function ConfirmNumber({ navigation }) {
  const [number, setNumber] = useState();

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
          placeholderTextColor={"#8596a1"}
          keyboardType="numeric"
          onChangeText={newNum => {
            setNumber(newNum);
          }}
          value={number}
        />
      </View>
      <View style={styles.btnContainer}>
        <Button
          title="Next"
          color={"green"}
          onPress={() => {
            axios.post(`${server}/authPhone`, {
              phone: trimNumber(number)
            }).then(({ data: { exists } }) => {
              if (!exists) {
                navigation.navigate("EditProfile", {
                  number: trimNumber(number)
                })
              } else {
                Alert.alert(
                  "Confirm Number",
                  "This number is already registered on WhatsApp",
                  [{
                    text: "Okay",
                    onPress: () => { }
                  }]
                )
              }
            }).catch(err => { console.log(err) })
          }} />
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
    padding: 12,
    marginTop: 20,
    marginBottom: 10,
  },
  numText: {
    color: "#8596a1",
    textAlign: "center",
    fontSize: 18
  },
  numberContainer: {
    padding: 15,
  },
  numberInput: {
    borderColor: "#FFF",
    borderRadius: 10,
    borderWidth: 1,
    fontSize: 17,
    padding: 8,
    color: "#fff",
  },
  btnContainer: {
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
  },
});
