import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import Chat from './components/Chat';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Chat/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 22
  },
});
