import React from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "../screens/HomeScreen";
import CustomDrawerContent from "./CustomDrawerComponent";
import Constants from "../constants";

const Drawer = createDrawerNavigator();

const width = Dimensions.get("window").width;

export default function DrawerNavigator(props) {
  return (
    <Drawer.Navigator
      backBehavior="history"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      drawerStyle={styles.drawerStyle}
      drawerType="slide"
      edgeWidth={width * 0.4}
      initialRouteName="Home"
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  drawerStyle: {
    backgroundColor: Constants.secondaryColor,
    width: width * 0.75,
  },
});
