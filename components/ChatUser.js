import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import manifest from "../manifest";

export default function ChatUser({}) {
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
      onPress={() => {}}
      onPressOut={() => {
        setPressed(false);
      }}
    >
      <TouchableOpacity>
        <Image style={styles.profile} source={manifest.userProfile} />
      </TouchableOpacity>
      <View style={styles.textView}>
        <Text style={styles.userName}>Nhlamulo</Text>
        <Text style={styles.msgPreview}>Recent message preview</Text>
      </View>
      <Text style={styles.time}>11:20</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    position: "relative",
    marginRight: 10,
  },
  profile: {
    width: 60,
    height: 60,
    borderRadius: 20,
  },
  textView: {
    flexDirection: "column",
    marginLeft: 10,
  },
  userName: {
    fontSize: 20,
    color: "#989ea2",
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
  },
});
