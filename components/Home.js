import { SafeAreaView, StyleSheet, StatusBar, Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Calls from "./Calls";
import Chats from "./Chats";
import Status from "./Status";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCamera, faSearch } from "@fortawesome/free-solid-svg-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import socket from "../socket";
import { useEffect, useState } from "react";
import axios from "axios";
import endPoint from "../endPoint";

import HomePopupMenu from "./HomePopupMenu";

const Tab = createMaterialTopTabNavigator();

export default function Home({ navigation, route }) {
  const [session, _] = useState(route.params.session);

  useEffect(() => {
    axios
      .post(`${endPoint}/loadMessages`, {})
      .then((result) => {})
      .catch((err) => console.log(err));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>WhatsApp</Text>
        <View style={styles.tools}>
          <TouchableOpacity>
            <FontAwesomeIcon
              style={styles.toolIcons}
              size={21}
              icon={faCamera}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.midToolIcon}>
            <FontAwesomeIcon
              size={21}
              style={styles.toolIcons}
              icon={faSearch}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <HomePopupMenu />
          </TouchableOpacity>
        </View>
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "#1f2c34",
          },
          tabBarLabelStyle: {
            color: "#06a683",
          },
          tabBarIndicatorStyle: {
            backgroundColor: "#06a683",
          },
        }}
      >
        <Tab.Screen
          style={styles.tab}
          name={"CHATS"}
          component={Chats}
          initialParams={{ socket: socket }}
        />
        <Tab.Screen name={"STATUS"} component={Status} />
        <Tab.Screen name={"CALLS"} component={Calls} />
      </Tab.Navigator>
      <StatusBar style={{ backgroundColor: "#1f2c34" }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    padding: 18,
    alignItems: "center",
    backgroundColor: "#1f2c34",
  },
  tools: {
    position: "absolute",
    flexDirection: "row",
    right: 15,
  },
  toolIcons: {
    color: "#8596a1",
  },
  midToolIcon: {
    marginLeft: 27,
    marginRight: 22,
  },
  headerTitle: {
    fontSize: 19,
    color: "#8596a1",
  },
  tab: {
    color: "#fff",
  },
});
