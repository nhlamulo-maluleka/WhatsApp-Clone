import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import manifest from "../manifest";

export default function ChatUser({
  user: { name, phone, isUser },
  time,
  navigation,
  socket,
}) {
  const [pressed, setPressed] = useState(false);

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      underlayColor="#fff"
      style={{
        flexDirection: "row",
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 13,
        paddingRight: 13,
        backgroundColor: pressed ? "#000" : "transparent",
      }}
      onLongPress={() => {
        setPressed(true);
      }}
      onPress={() => {
        navigation.navigate("ChatMessage", {
          name: name,
          number: phone,
          socket: socket,
        });
      }}
      onPressOut={() => {
        setPressed(false);
      }}
    >
      <TouchableOpacity>
        <Image style={styles.profile} source={manifest.userProfile} />
      </TouchableOpacity>
      <View style={styles.textView}>
        <Text style={styles.userName}>{name}</Text>
        {
          isUser ? <Text style={styles.msgPreview}>Recent activity preview</Text> : null
        }
      </View>
      {time ? <Text style={styles.time}>11:20</Text> : null}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    position: "relative",
    marginRight: 10,
  },
  profile: {
    width: 45,
    height: 45,
    borderRadius: 20,
  },
  textView: {
    flexDirection: "column",
    marginLeft: 10,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  userName: {
    fontSize: 17,
    color: "#FFF",
  },
  msgPreview: {
    fontSize: 14,
    color: "#989ea2",
    flexDirection: "row",
    flexWrap: "nowrap",
  },
  time: {
    position: "absolute",
    top: 12,
    right: 14,
    color: "#989ea2",
    fontSize: 12,
  },
});
