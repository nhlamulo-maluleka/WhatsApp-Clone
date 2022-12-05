import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ReceivedMessage({ id, msg }) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.msgContainer}>
        <Text style={styles.message}>{msg}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 0,
    flexDirection: "row",
    marginBottom: 10,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  msgContainer: {
    maxWidth: "70%",
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: "#128C7E",
    borderRadius: 10,
  },
  message: {
    fontSize: 17,
    color: "#fff",
    flexWrap: "wrap",
  },
});
