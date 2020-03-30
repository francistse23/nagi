import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import { scale, verticalScale } from "./utilities/scale";

export default function App() {
  return <SafeAreaView style={styles.container}></SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    // backgroundColor: "#8BD8C6",
    flex: 1,
    justifyContent: "center",
  },
});
