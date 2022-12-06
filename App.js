import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import Chat from './components/Chat';
import io from "./socket"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Chat socket={io}/>
      <StatusBar style="dark" hidden={false} animated={true}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
