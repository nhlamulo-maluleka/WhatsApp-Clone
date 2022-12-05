import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function SentMessage({id, msg}) {
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
    alignItems: "flex-start",
    marginBottom: 10
  },
  msgContainer: {
    maxWidth: "70%",
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: "#FFF",
    borderRadius: 10
  },
  message: {
    fontSize: 17,
    color: "#000",
    flexWrap: 'wrap',
  },
});
