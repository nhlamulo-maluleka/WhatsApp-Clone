import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import manifest from "../manifest";

export default function Intro({ navigation }) {
  const [session, setSession] = useState(-1);

  useEffect(() => {
    (async () => {
      const value = await AsyncStorage.getItem("sId");
      setSession(value);
    })();
  }, []);

  return (
    <>
      {session === -1 ? (
        <View style={styles.container}>
          <View style={styles.imgcont}>
            <Image style={styles.image} source={manifest.welcome} />
          </View>
          <View style={styles.source}>
            <Text style={styles.sText}>from</Text>
            <Text style={styles.sName}>Silas_M</Text>
          </View>
        </View>
      ) : session === null ? (
        navigation.navigate("SetNumber")
      ) : (
        navigation.navigate("Home", {
          session: session,
        })
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121b22",
  },
  image: {
    width: 70,
    height: 70,
  },
  imgcont: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  source: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: 20,
  },
  sText: {
    fontSize: 13,
    color: "#FFF",
    bottom: 5,
  },
  sName: {
    fontSize: 16,
    color: "#FFF",
  },
});
