import { Text, View } from "react-native";
import { SafeAreaView, StyleSheet } from 'react-native';
import io from "../socket"

export default function Home({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text onPress={() => {
                    navigation.navigate("Chat", {
                        user: "From Home",
                        socket: io
                    })
                }}>Home</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});