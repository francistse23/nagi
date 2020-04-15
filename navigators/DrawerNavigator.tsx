import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "../screens/HomeScreen";
import CustomDrawerContent from "../components/CustomDrawerComponent";
import GuideStackNavigator from "./GuideStackNavigator";
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
      edgeWidth={width * 0.2}
      initialRouteName="Home"
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Guide" component={GuideStackNavigator} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  drawerStyle: {
    backgroundColor: Constants.secondaryColor,
    width: width * 0.75,
  },
});
