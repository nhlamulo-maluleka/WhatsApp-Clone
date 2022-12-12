import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MenuProvider } from "react-native-popup-menu";
import ChatMessage from "./components/ChatMessage";
import ConfirmNumber from "./components/ConfirmNumber";
import Home from "./components/Home";
import InitSetUp from "./components/initSetup";
import Intro from "./components/Intro";
import StartChat from "./components/StartChat";

const Stack = createStackNavigator();

export default function App() {
  return (
    <MenuProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={"Welcome"}
            component={Intro}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={"SetNumber"}
            component={ConfirmNumber}
            options={{ title: "Phone Number", headerShown: false }}
          />
          <Stack.Screen
            name={"Home"}
            component={Home}
            options={{ title: "WhatsApp", headerShown: false }}
          />
          <Stack.Screen
            name={"EditProfile"}
            component={InitSetUp}
            options={{ title: "Edit Profile", headerShown: false }}
          />
          <Stack.Screen
            name={"ChatMessage"}
            component={ChatMessage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={"StartChat"}
            component={StartChat}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </MenuProvider>
  );
}
