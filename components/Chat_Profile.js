import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import {
  faArrowLeft,
  faPhone,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import manifest from "../manifest";
import ChatPopupMenu from "./ChatPopupMenu";

export default function ChatProfile({ navigation, route }) {
  return (
    <View style={styles.profile}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
        style={styles.back}
      >
        <FontAwesomeIcon size={20} icon={faArrowLeft} style={styles.backIcon} />
        <Image style={styles.userprofile} source={manifest.userProfile} />
      </TouchableOpacity>
      <View style={styles.userNameContainer}>
        <Text style={styles.user}>{route.params.name}</Text>
        <Text style={styles.online}>online</Text>
      </View>

      <View style={styles.tools}>
        <TouchableOpacity>
          <FontAwesomeIcon size={20} style={styles.icons} icon={faVideo} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <FontAwesomeIcon size={20} style={styles.icons} icon={faPhone} />
        </TouchableOpacity>
        <TouchableOpacity>
          <ChatPopupMenu/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profile: {
    backgroundColor: "#1f2c34",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 9,
  },
  userprofile: {
    width: 35,
    height: 35,
    borderRadius: 50,
    color: "#fff",
  },
  back: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 2,
    paddingBottom: 2,
    borderRadius: 40,
  },
  backIcon: {
    fontSize: 25,
    color: "#fff",
  },
  user: {
    fontSize: 18,
    marginLeft: 2,
    color: "#fff",
  },
  tools: {
    position: "absolute",
    flexDirection: "row",
    right: 12,
  },
  icons: {
    color: "#fff",
  },
  iconContainer: {
    marginLeft: 25,
    marginRight: 20,
  },
  online: {
    fontSize: 11,
    color: "#FFF",
  },
  userNameContainer: {
    flexDirection: "column",
    // alignItems: "flex-start",
    // justifyContent: "center"
  },
});
