import { faPaperPlane, faSmile } from "@fortawesome/free-regular-svg-icons";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";

export default function ChatMessageControl({ sendMessage }) {
  const [message, setMessage] = useState({});

  return (
    <View style={styles.controls}>
      <View style={styles.msgInput}>
        <TextInput
          placeholder="Message"
          multiline={true}
          numberOfLines={1}
          style={styles.messageBox}
          onChangeText={(msg) => {
            setMessage({
              user: "me",
              message: msg
            });
          }}
        ></TextInput>
        <TouchableOpacity style={styles.emojiBtnContainer}>
          <FontAwesomeIcon icon={faSmile} size={24} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.attachBtnContainer}>
          <FontAwesomeIcon icon={faPaperclip} size={24} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => {
        sendMessage(message)
      }} style={styles.btnContainer}>
        <FontAwesomeIcon icon={faPaperPlane} size={20} style={styles.btnSend} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  controls: {
    flexDirection: "row",
    maxHeight: 150,
    padding: 3,
    bottom: 22,
    alignItems: "flex-end",
    padding: 5,
  },
  msgInput: {
    width: "88%",
    flexDirection: "row",
    alignItems: "flex-end",
    paddingTop: 10,
  },
  messageBox: {
    width: "100%",
    fontSize: 19,
    borderRadius: 20,
    borderWidth: 2,
    backgroundColor: "#fff",
    paddingLeft: 40,
    paddingRight: 41,
    paddingTop: 5,
    paddingBottom: 5,
  },
  btnContainer: {
    backgroundColor: "#075E54",
    borderRadius: 25,
    padding: 12,
    marginLeft: 3,
  },
  btnSend: {
    color: "#fff",
  },
  emojiBtnContainer: {
    position: "absolute",
    left: 10,
    bottom: 10,
  },
  attachBtnContainer: {
    position: "absolute",
    right: 10,
    bottom: 10,
  },
});
