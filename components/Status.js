import { ScrollView, StyleSheet, Text } from "react-native";

export default function Status({}){
    return (
        <ScrollView style={styles.container}>
            <Text>Status</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#121b22"
    }
})