import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import * as WebBrowser from "expo-web-browser";

import { scale, verticalScale } from "../utilities/scale";
import Constants from "../constants";

const { spacing, textColor } = Constants;

export default function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Nagi</Text>
        <Image source={require("../assets/nagi.png")} style={styles.icon} />
      </View>
      <DrawerItem
        icon={() => (
          <Image
            source={require("../assets/home.png")}
            style={{ height: 41, width: 39 }}
          />
        )}
        label={() => <Text style={styles.label}>Home</Text>}
        onPress={() => props.navigation.navigate("Home")}
      />
      <DrawerItem
        icon={() => (
          <Image
            source={require("../assets/guide.png")}
            style={{ height: 40, width: 39 }}
          />
        )}
        label={() => <Text style={styles.label}>Meditating Guide</Text>}
        onPress={() =>
          props.navigation.navigate("Guide", { screen: "Benefits" })
        }
      />
      {/* <DrawerItem
        icon={() => (
          <Image
            source={require("../assets/tips.png")}
            style={{ height: 40, width: 40 }}
          />
        )}
        label={() => <Text style={styles.label}>Tips</Text>}
        // onPress={() => props.navigation.navigate("Home")}
      /> */}
      <DrawerItem
        icon={() => (
          <Image
            source={require("../assets/contact.png")}
            style={{ height: 39, width: 40 }}
          />
        )}
        label={() => <Text style={styles.label}>Contact</Text>}
        onPress={async () =>
          await WebBrowser.openBrowserAsync("https://francistse.me/")
        }
      />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: verticalScale(spacing * 2),
    paddingHorizontal: scale(spacing),
  },
  headerText: {
    color: textColor,
    fontSize: scale(55),
  },
  icon: {
    height: verticalScale(100),
    width: scale(100),
  },
  label: {
    color: textColor,
    fontSize: scale(20),
  },
});
