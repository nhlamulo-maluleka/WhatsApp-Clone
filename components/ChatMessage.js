import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Image, StatusBar } from "react-native";
import manifest from "../manifest";
import ChatMessages from "./Chat_Messages";
import ChatProfile from "./Chat_Profile";
import ChatMessageControl from "./Chat_Message_Control";

export default function ChatMessage({ navigation, route }) {
  const [messages, setMessages] = useState([]);
  const [userId, setId] = useState();
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    route.params.socket?.on("/connected", (id) => {
      setId(id);
    });

    route.params.socket?.on("/sentMessage", (newMsg) => {
      setMessages([...messages, newMsg]);
    });
  }, [route, messages]);

  const setMyMessage = (msg, resetMsgBox) => {
    route.params.socket?.emit("/newMessage", msg);
    setMessages([...messages, msg]);
    resetMsgBox("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={manifest.chatbg} style={styles.bgImage} />
      <ChatProfile navigation={navigation} route={route} />
      <ChatMessages rootId={userId} messageList={messages} />
      <ChatMessageControl rootId={userId} sendMessage={setMyMessage} />
      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    position: "absolute",
    width: "100%",
    zIndex: 0,
  },
});
