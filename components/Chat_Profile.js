import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import {
  faArrowLeft,
  faEllipsisVertical,
  faPhone,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import manifest from "../manifest";

export default function ChatProfile({ navigation }) {
  return (
    <View style={styles.profile}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.back}
      >
        <FontAwesomeIcon size={20} icon={faArrowLeft} style={styles.backIcon} />
        <Image style={styles.userprofile} source={manifest.userProfile} />
      </TouchableOpacity>

      <Text style={styles.user}>Nhlamulo</Text>

      <View style={styles.tools}>
        <TouchableOpacity>
          <FontAwesomeIcon size={20} style={styles.icons} icon={faVideo} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <FontAwesomeIcon size={20} style={styles.icons} icon={faPhone} />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesomeIcon
            size={20}
            style={styles.icons}
            icon={faEllipsisVertical}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profile: {
    backgroundColor: "#075E54",
    flexDirection: "row",
    alignItems: "center",
    padding: 7,
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
});
