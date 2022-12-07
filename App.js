import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Chat from './components/Chat';
import Home from './components/Home';
import { LogBox } from 'react-native';

// LogBox.ignoreWarnings([
//   'Non-serializable values were found in the navigation state',
// ]);

/* <Chat socket={io} /> */
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={"Home"}
          component={Home}
          options={{ title: "WhatsApp", headerShown: false }} />
        <Stack.Screen
          name={"Chat"}
          component={Chat}
          options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
