import { StyleSheet, ScrollView } from "react-native";
import ReceivedMessage from "./ReceivedMessage";
import SentMessage from "./SentMessage";

export default function ChatMessages({ rootId, messageList }) {
  return (
    <ScrollView style={styles.messages}>
      {messageList.map((object, index) => {
        const { id, user, message } = object;
        return id === rootId ? (
          <SentMessage id={id} msg={message} key={index} />
        ) : (
          <ReceivedMessage id={id} msg={message} key={index} />
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  messages: {
    flex: 1,
    padding: 8,
  },
});
