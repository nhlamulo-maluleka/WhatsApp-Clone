import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Image } from "react-native";
import manifest from "../manifest";
import ChatMessages from "./Chat_Messages";
import ChatProfile from "./Chat_Profile";
import ChatMessageControl from "./Chat_Message_Control";

export default function Chat({ socket }) {
  const [messages, setMessages] = useState([]);
  const [userId, setId] = useState();

  useEffect(() => {
    socket.on("/connected", (id) => {
      setId(id);
    });

    socket.on("/sentMessage", (newMsg) => {
      setMessages([...messages, newMsg]);
    });
  }, [socket, messages]);

  const setMyMessage = (msg, resetMsgBox) => {
    socket.emit("/newMessage", msg);
    setMessages([...messages, msg]);
    resetMsgBox("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={manifest.chatbg} style={styles.bgImage} />
      <ChatProfile />
      <ChatMessages rootId={userId} messageList={messages} />
      <ChatMessageControl rootId={userId} sendMessage={setMyMessage} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bgImage: {
    position: "absolute",
    width: "100%",
    zIndex: 0,
  },
});
