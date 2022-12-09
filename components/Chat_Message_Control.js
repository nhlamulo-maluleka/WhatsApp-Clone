import { faPaperPlane, faSmile } from "@fortawesome/free-regular-svg-icons";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
// import { widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function ChatMessageControl({ rootId, sendMessage }) {
  const [message, setMessage] = useState({});

  return (
    <View style={styles.controls}>
      <View style={styles.msgInput}>
        <TextInput
          placeholder="Message"
          placeholderTextColor={"#8596a1"}
          multiline={true}
          numberOfLines={1}
          style={styles.messageBox}
          value={message}
          onChangeText={(msg) => {
            setMessage({
              id: rootId,
              user: "me",
              message: msg,
            });
          }}
        ></TextInput>
        <TouchableOpacity style={styles.emojiBtnContainer}>
          <FontAwesomeIcon style={styles.icons} icon={faSmile} size={24} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.attachBtnContainer}>
          <FontAwesomeIcon style={styles.icons} icon={faPaperclip} size={23} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          sendMessage(message, setMessage);
        }}
        style={styles.btnContainer}
      >
        <FontAwesomeIcon icon={faPaperPlane} size={20} style={styles.btnSend} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  controls: {
    flexDirection: "row",
    maxHeight: 150,
    padding: 10,
    alignItems: "flex-end",
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
    backgroundColor: "#1f2c34",
    paddingLeft: 40,
    paddingRight: 41,
    paddingTop: 8,
    paddingBottom: 8,
    color: "#FFF",
  },
  btnContainer: {
    backgroundColor: "#25D366",
    borderRadius: 25,
    padding: 12,
    marginLeft: 3,
    alignItems: "center",
    justifyContent: "center",
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
  icons: {
    color: "#8596a1",
  },
});
