import { ScrollView, Text, StyleSheet } from "react-native";

export default function Calls({}){
    return (
        <ScrollView style={styles.container}>
            <Text>Calls</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#121b22"
    }
})