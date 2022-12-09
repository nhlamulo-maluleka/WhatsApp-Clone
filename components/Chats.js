import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import ChatUser from "./ChatUser";

export default function Chats({ route, navigation }) {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      {contacts.length > 0 ? (
        <ScrollView>
          {contact.map((object, index) => {
            return (
              <ChatUser
                name={object.name}
                phone={object.phone}
                time={false}
                navigation={navigation}
                socket={route.params.socket}
                key={index}
              />
            );
          })}
        </ScrollView>
      ) : (
        <View style={styles.noChatContainer}>
          <View style={styles.noChat}>
            <Text style={styles.noChatText}>Tap the</Text>
            <FontAwesomeIcon style={styles.noChatIcon} icon={faMessage} />
            <Text style={styles.noChatText}>button to start a chat</Text>
          </View>
        </View>
      )}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("StartChat", {
            socket: route.params.socket
          });
        }}
        style={styles.message}
      >
        <FontAwesomeIcon style={{ color: "#FFF" }} icon={faMessage} size={20} />
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
    padding: 16,
    backgroundColor: "#128C7E",
    borderRadius: 25,
    alignItems: "center",
  },
  noChatContainer: {
    flex: 1,
    justifyContent: "center",
    justifyContent: "center",
  },
  noChat: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  noChatText: {
    textAlign: "center",
    color: "#8596a1",
    fontSize: 20,
    fontWeight: "300",
  },
  noChatIcon: {
    color: "#8596a1",
    top: 3,
    marginLeft: 10,
    marginRight: 10,
  },
});
