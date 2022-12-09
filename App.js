import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ChatMessage from "./components/ChatMessage";
import Home from "./components/Home";
import StartChat from "./components/StartChat";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={"Home"}
          component={Home}
          options={{ title: "WhatsApp", headerShown: false }}
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
  );
}
