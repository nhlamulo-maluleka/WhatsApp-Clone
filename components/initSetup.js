import { faArrowLeft, faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Platform,
  Alert,
} from "react-native";
import manifest from "../manifest";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import axios from "axios";
import uuid from "react-native-uuid";
import endPoint from "../endPoint";
import AsyncStorage from "@react-native-async-storage/async-storage";

const setSession = async (id) => {
  try {
    await AsyncStorage.setItem("sId", id);
    console.log(id, "successfully stored...")
  } catch (e) {
    console.log("Session storage encountered an error", e);
  }
};

export default function InitSetUp({ navigation, route }) {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [extension, setExtension] = useState(null);
  const [uid, setUID] = useState(null);

  // Image upload
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const splited = result.assets[0].uri.split(".");
      setExtension(splited[splited.length - 1]);
      setImage(result.assets[0].uri);
      setUID(uuid.v4());
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onpress={() => {
            navigation.goBack();
          }}
        >
          <FontAwesomeIcon
            icon={faArrowLeft}
            size={22}
            style={{ color: "#8596a1" }}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Edit Profile</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.info}>
          Enter your name and an optional profile picture
        </Text>
        <View style={styles.imgContainer}>
          <View style={{ position: "relative" }}>
            <Image
              style={styles.profile}
              source={image ? { uri: image } : manifest.userProfile}
            />
            <View style={styles.pchange}>
              <TouchableOpacity style={styles.btnChange} onPress={pickImage}>
                <FontAwesomeIcon
                  style={styles.camera}
                  icon={faCamera}
                  size={20}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.nameContainer}>
          <TextInput
            placeholderTextColor={"grey"}
            placeholder="Enter your name"
            style={styles.txtName}
            value={name}
            onChangeText={(n) => {
              setName(n);
            }}
          />
        </View>
      </View>
      <View style={styles.saveContainer}>
        <TouchableOpacity
          style={styles.saveProfile}
          onPress={() => {
            // Checking name is not empty
            if (name?.trim().length > 0) {
              const data = new FormData();
              data.append("number", route.params.number);
              data.append("name", name);
              data.append(
                "profile",
                image
                  ? {
                      name: uid,
                      uri:
                        Platform.OS === "ios"
                          ? image.replace("file://", "")
                          : image,
                      type: `image/${extension}`,
                    }
                  : null
              );

              axios
                .post(`${endPoint}/createUser`, data, {
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "multipart/form-data",
                  },
                })
                .then(({ data: { id, error, success } }) => {
                  if (success) {
                    setSession(id);
                    console.log(id);
                    navigation.navigate("Home", {
                      session: id,
                    });
                  } else {
                    Alert.alert(
                      "Error",
                      `An error occured while creating user...\n${error}`,
                      [
                        {
                          text: "Okay",
                          onPress: () => {},
                        },
                      ]
                    );
                  }
                })
                .catch((err) => console.log(err));
            } else {
              Alert.alert(
                "Setup Profile",
                "Please enter your profile name before before continuing!",
                [
                  {
                    text: "Okay",
                    onPress: () => {},
                  },
                ]
              );
            }
          }}
        >
          <Text style={styles.saveBtn}>Save</Text>
        </TouchableOpacity>
      </View>
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121b22",
  },
  header: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#1f2c34",
    padding: 10,
  },
  headerText: {
    width: "90%",
    textAlign: "center",
    fontSize: 20,
    color: "#8596a1",
  },
  body: {
    flex: 1,
    padding: 15,
  },
  profile: {
    width: 150,
    height: 150,
    borderRadius: 70,
  },
  imgContainer: {
    position: "relative",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    top: 25,
  },
  info: {
    fontSize: 15,
    color: "#8596a1",
    textAlign: "center",
    top: 10,
  },
  camera: {
    color: "#FFF",
  },
  pchange: {
    alignItems: "flex-end",
    marginRight: 4,
    padding: 10,
    top: -45,
  },
  btnChange: {
    padding: 10,
    backgroundColor: "#075e54",
    borderRadius: 20,
  },
  nameContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  txtName: {
    width: "90%",
    padding: 5,
    fontSize: 18,
    borderColor: "grey",
    color: "#FFF",
    borderWidth: 1,
    borderRadius: 7,
  },
  saveContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  saveBtn: {
    color: "#FFF",
    fontSize: 16,
  },
  saveProfile: {
    width: "60%",
    backgroundColor: "#128c7e",
    alignItems: "center",
    padding: 8,
    borderRadius: 5,
  },
});
