import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from "react-native-popup-menu";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { StyleSheet, Text } from "react-native";

export default function () {
  return (
    <Menu>
      <MenuTrigger style={styles.toolIcons}>
        <FontAwesomeIcon
          style={styles.toolIcons}
          size={21}
          icon={faEllipsisVertical}
        />
      </MenuTrigger>
      <MenuOptions style={styles.menu}>
        <MenuOption
          onSelect={() => {
            console.log("New group");
          }}
        >
          <Text style={styles.menuOpt}>New group</Text>
        </MenuOption>
        <MenuOption
          onSelect={() => {
            console.log("New broadcast");
          }}
        >
          <Text style={styles.menuOpt}>New broadcast</Text>
        </MenuOption>
        <MenuOption
          onSelect={() => {
            console.log("Starred messages");
          }}
        >
          <Text style={styles.menuOpt}>Starred messages</Text>
        </MenuOption>
        <MenuOption
          onSelect={() => {
            console.log("Settings");
          }}
        >
          <Text style={styles.menuOpt}>Settings</Text>
        </MenuOption>
      </MenuOptions>
    </Menu>
  );
}

const styles = StyleSheet.create({
  toolIcons: {
    color: "#8596a1",
  },
  menu: {
    backgroundColor: "#1f2c34",
  },
  menuOpt: {
    fontSize: 16,
    color: "#FFF",
    padding: 8,
  },
});
