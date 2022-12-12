import { StyleSheet, Text } from "react-native";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

export default function ChatPopupMenu() {
  return (
    <Menu>
      <MenuTrigger style={styles.icons}>
        <FontAwesomeIcon
          size={20}
          style={styles.icons}
          icon={faEllipsisVertical}
        />
      </MenuTrigger>
      <MenuOptions style={styles.menu}>
        <MenuOption
          onSelect={() => {
            console.log("View Contact");
          }}
        >
          <Text style={styles.menuOpt}>View Contact</Text>
        </MenuOption>
        <MenuOption
          style={styles.menuOpt}
          onSelect={() => {
            console.log("Media, links, and docs");
          }}
        >
          <Text style={styles.menuOpt}>Media, links, and docs</Text>
        </MenuOption>
        <MenuOption
          onSelect={() => {
            console.log("Mute Notifications");
          }}
        >
          <Text style={styles.menuOpt}>Mute Notifications</Text>
        </MenuOption>
        <MenuOption
          onSelect={() => {
            console.log("Disapperaring messages");
          }}
        >
          <Text style={styles.menuOpt}>Disapperaring messages</Text>
        </MenuOption>
        <MenuOption
          onSelect={() => {
            console.log("Wallpaper");
          }}
        >
          <Text style={styles.menuOpt}>Wallpaper</Text>
        </MenuOption>
      </MenuOptions>
    </Menu>
  );
}

const styles = StyleSheet.create({
  menu: {
    backgroundColor: "#1f2c34",
  },
  menuOpt: {
    fontSize: 16,
    color: "#FFF",
    padding: 8,
    flexWrap: "nowrap",
  },
  icons: {
    color: "#fff",
  },
});
