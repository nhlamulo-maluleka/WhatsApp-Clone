import { ScrollView, Text } from "react-native";
import io from "../socket";
import ChatUser from "./ChatUser";

export default function Chats({}){
    return (
        <ScrollView>
            <ChatUser/>
        </ScrollView>
    );
}