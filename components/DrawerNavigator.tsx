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

const Drawer = createDrawerNavigator();

const width = Dimensions.get("window").width;

export default function DrawerNavigator(props) {
  return (
    <Drawer.Navigator
      backBehavior="history"
      drawerContent={props => <CustomDrawerContent {...props} />}
      drawerStyle={styles.drawerStyle}
      drawerType="slide"
      edgeWidth={width * 0.15}
      initialRouteName="Home"
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  drawerStyle: {
    backgroundColor: "#8BD8C6",
    width: width * 0.75,
  },
});
