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
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./screens/HomeScreen";

import { scale, verticalScale } from "./utilities/scale";

const width = Dimensions.get("window").width;
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        backBehavior="history"
        drawerStyle={styles.drawerStyle}
        edgeWidth={width * 0.15}
        initialRouteName="Home"
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    // backgroundColor: "#8BD8C6",
    flex: 1,
    justifyContent: "center",
  },
  drawerStyle: {
    backgroundColor: "#8BD8C6",
    width: width * 0.75,
  },
});
