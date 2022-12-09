import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMessage } from "@fortawesome/free-regular-svg-icons";

export default function Chats({ route }) {
  const [contacts, setContacts] = useState(null);
  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      {contacts ? (
        <ScrollView></ScrollView>
      ) : (
        <Text
          style={{
            textAlign: "center",
            margin: 50,
            color: "#fff",
            fontSize: 17,
            fontWeight: "300",
            color: "#25D366"
          }}
        >
          Start a Chat
        </Text>
      )}
      <TouchableOpacity 
        onPress={() => {
          route.params.navigation.navigate("StartChat", {})
        }}
        style={styles.message}>
        <FontAwesomeIcon icon={faMessage} size={20} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121b22",
    padding: 0,
  },
  message: {
    position: "absolute",
    bottom: 30,
    right: 30,
    padding: 15,
    backgroundColor: "#075E54",
    borderRadius: 25,
    alignItems: "center",
  },
});
