import { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
} from "react-native";
import * as Contacts from "expo-contacts";
import ChatUser from "./ChatUser";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faArrowLeft,
  faEllipsisVertical,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import serverEndPoint from "../endPoint";
import { trimNumber } from "../helperFunctions";

export default function StartChat({ navigation, route }) {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    (async () => {
      let contactList = [];
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
                if (
                  contact.name &&
                  !contact.phone &&
                  phone?.number.length > 9
                ) {
                  contact.phone = trimNumber(phone.number);
                  contactList = [...contactList, contact];
                }
              });
            }
          });
        }

        axios
          .post(`${serverEndPoint}/validatesContacts`, {
            contacts: contactList,
          })
          .then(({ data }) => {
            setContacts(data);
          })
          .catch((err) => console.log(err));
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <FontAwesomeIcon
            style={styles.backArrow}
            icon={faArrowLeft}
            size={19}
          />
        </TouchableOpacity>

        <View style={styles.headerText}>
          <Text style={styles.headerTextStyle1}>Select Contact</Text>
          <Text style={styles.headerTextStyle2}>
            {contacts ? contacts.length : 0} contacts
          </Text>
        </View>

        <View style={styles.headerTools}>
          <TouchableOpacity>
            <FontAwesomeIcon
              style={styles.headerToolStyle}
              icon={faSearch}
              size={18}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesomeIcon
              style={styles.headerToolStyle}
              icon={faEllipsisVertical}
              size={18}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.contentView}>
        {contacts.length > 0 ? (
          <ScrollView style={styles.contactsView}>
            <Text style={styles.contactsHeader}>Contacts on WhatsApp</Text>
            <View>
              {contacts.map((object, index) => {
                return object.isUser ? (
                  <ChatUser
                    user={object}
                    time={false}
                    navigation={navigation}
                    socket={route.params.socket}
                    key={index}
                  />
                ) : null;
              })}
            </View>
            <View>
              <Text style={styles.contactsHeader}>Invite to WhatsApp</Text>
              {contacts.map((object, index) => {
                return !object.isUser ? (
                  <ChatUser
                    user={object}
                    time={false}
                    navigation={navigation}
                    socket={route.params.socket}
                    key={index}
                  />
                ) : null;
              })}
            </View>
          </ScrollView>
        ) : (
          <ActivityIndicator size={"large"} color={"#FFF"} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121b22",
    padding: 0,
  },
  header: {
    position: "relative",
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    backgroundColor: "#1f2c34",
  },
  headerText: {
    flexDirection: "column",
  },
  headerTools: {
    position: "absolute",
    flexDirection: "row",
    right: 10,
  },
  headerToolStyle: {
    color: "#FFF",
    marginLeft: 15,
    marginRight: 10,
  },
  headerTextStyle1: {
    fontSize: 17,
    color: "#FFF",
  },
  headerTextStyle2: {
    fontSize: 11,
    color: "#FFF",
  },
  backArrow: {
    color: "#FFF",
    padding: 12,
    borderRadius: 20,
    marginRight: 15,
  },
  contactsView: {
    width: "100%",
  },
  contentView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contactsHeader: {
    textAlign: "left",
    color: "#06a683",
    padding: 8,
    fontSize: 14
  },
});
