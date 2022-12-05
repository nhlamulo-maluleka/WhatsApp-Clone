import { useState } from "react"
import { SafeAreaView, ScrollView, StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft, faEllipsisVertical, faPhone, faVideo } from '@fortawesome/free-solid-svg-icons'

export default function Chat({ }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.profile}>
                <TouchableOpacity style={styles.back}>
                    <FontAwesomeIcon size={20} icon={faArrowLeft} style={styles.backIcon} />
                    <Image style={styles.userprofile} source={require('../assets/profile.png')} />
                </TouchableOpacity>
                <Text style={styles.user}>Nhlamulo</Text>
                <View style={styles.tools}>
                    <FontAwesomeIcon size={20} icon={faVideo} />
                    <FontAwesomeIcon size={20} icon={faPhone} />
                    <FontAwesomeIcon size={20} icon={faEllipsisVertical} />
                </View>
            </View>
            <ScrollView style={styles.messages}>
                <Image source={require('../assets/wallp.jpg')} />
                <Text>Content</Text>
            </ScrollView>
            <View style={styles.controls}>
                <Text>Controls</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    profile: {
        backgroundColor: '#075E54',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 7
    },
    userprofile: {
        width: 35,
        height: 35,
        borderRadius: 50,
        color: '#fff'
    },
    messages: {
        backgroundColor: 'yellow',
    },
    controls: {
        backgroundColor: 'brown',
    },
    back: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 2,
        paddingBottom: 2,
        borderRadius: 40
    },
    backIcon: {
        fontSize: 25,
        color: '#fff'
    },
    user: {
        fontSize: 18,
        marginLeft: 2,
        color: '#fff'
    },
    tools: {
        position: 'absolute',
        flexDirection: 'row',
        right: 12
    }
})