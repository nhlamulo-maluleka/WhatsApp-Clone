import { useState } from "react";
import { SafeAreaView, StyleSheet, StatusBar, Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Calls from "./Calls";
import Chats from "./Chats";
import Status from "./Status";

const Tab = createMaterialTopTabNavigator();

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
        <Tab.Navigator>
            <Tab.Screen name="CHATS" component={Chats}/>
            <Tab.Screen name="STATUS" component={Status}/>
            <Tab.Screen name="CALLS" component={Calls}/>
        </Tab.Navigator>
      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
