import React, { useCallback, useMemo } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ChooseTimeScreen from "../screens/MeditationScreens/ChooseTimeScreen";
import MeditationScreen from "../screens/MeditationScreens/MeditationScreen";

const Stack = createStackNavigator();

export default function MeditationStackNavigator() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Choose Time">
      <Stack.Screen name="Choose Time" component={ChooseTimeScreen} />
      <Stack.Screen
        name="Meditation"
        component={MeditationScreen}
        initialParams={{ time: 0 }}
      />
    </Stack.Navigator>
  );
}
