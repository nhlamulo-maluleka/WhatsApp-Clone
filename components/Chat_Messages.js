import { StyleSheet, ScrollView } from "react-native";
import ReceivedMessage from "./ReceivedMessage";
import SentMessage from "./SentMessage";

export default function ChatMessages({ messageList }) {
  return (
    <ScrollView style={styles.messages}>
        {
            messageList.map(({id, msg: {user, message}}) => {
                return user === "me" ? <SentMessage id={id} msg={message} key={id}/> : <ReceivedMessage id={id} msg={message} key={id}/>;
            })
        }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  messages: {
    flex: 1,
    padding: 8,
  },
});
