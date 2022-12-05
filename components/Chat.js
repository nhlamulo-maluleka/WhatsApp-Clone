import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Image } from "react-native";
import manifest from "../manifest";
import ChatMessages from "./Chat_Messages";
import ChatProfile from "./Chat_Profile";
import ChatMessageControl from "./Chat_Message_Control";

export default function Chat({}) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if(messages[messages.length-1]?.msg?.message === "Hi"){
      setMessages([...messages, {
        id: Math.floor(Math.random() * 10000),
        msg: {
          user: "bot",
          message: "Hey there jonny, Howwa you?"
        }
      }])
    }
  }, [messages])

  const setMyMessage = (msg) => {
    setMessages([...messages, {
      id: Math.floor(Math.random() * 10000),
      msg
    }]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={manifest.chatbg} style={styles.bgImage} />
      <ChatProfile />
      <ChatMessages messageList={messages}/>
      <ChatMessageControl sendMessage={setMyMessage} />
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
