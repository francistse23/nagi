import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

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
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: verticalScale(spacing),
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
});
