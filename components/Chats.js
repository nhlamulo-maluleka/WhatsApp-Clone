import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import ChatUser from "./ChatUser";
import * as Contacts from "expo-contacts";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMessage } from "@fortawesome/free-regular-svg-icons";

export default function Chats({ route }) {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    (async () => {
      let contactList = []
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.FirstName, Contacts.Fields.PhoneNumbers],
        });

        if (data.length > 0) {
          data.forEach((object) => {
            if (object) {
              const contact = { name: object.firstName };

              object.phoneNumbers?.forEach((phone) => {
                if (contact.name) {
                  if (!contact.phone) {
                    contact.phone = phone.number;
                    contactList = [...contactList, contact];
                  }
                }
              });
            }
          });
        }
        setContacts(contactList);
      }
    })();
  }, []);

  return (
    <>
      <ScrollView style={styles.container}>
        {contacts.map((object, index) => {
          return <ChatUser name={object.name} phone={object.phone} key={index}/>;
        })}
      </ScrollView>
      <TouchableOpacity style={styles.message}>
        <FontAwesomeIcon icon={faMessage} size={20} />
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121b22",
    padding: 0,
  },
  message: {
    position: "absolute",
    bottom: 30,
    right: 30,
    padding: 15,
    backgroundColor: "#075E54",
    borderRadius: 25,
    alignItems: "center",
  },
});
