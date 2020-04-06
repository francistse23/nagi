import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Benefits from "../screens/GuideScreens/Benefits";

const Stack = createStackNavigator();

export default function GuideStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Benefits">
      <Stack.Screen name="Benefits" component={Benefits} />
    </Stack.Navigator>
  );
}
