import { Image, StyleSheet, Text, Touchable, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import manifest from "../manifest"

export default function ChatUser({}){
    return (
        <TouchableOpacity style={styles.container}>
            <Image style={styles.profile} source={manifest.userProfile}/>
            <View style={styles.textView}>
                <Text style={styles.userName}>Nhlamulo</Text>
                <Text style={styles.msgPreview}>Recent message preview</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        borderWidth: 1
    },
    profile: {
        width: 60,
        height: 60,
        borderRadius: 20,
        borderColor: 'grey'
    },
    textView: {
        flexDirection: 'column',
        marginLeft: 5
    },
    userName: {
        fontSize: 20
    },
    msgPreview: {
        fontSize: 12
    }
})