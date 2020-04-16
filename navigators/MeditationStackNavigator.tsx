import React, { useCallback, useMemo } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ChooseTimeScreen from "../screens/MeditateScreens/ChooseTimeScreen";

const Stack = createStackNavigator();

export default function MeditationStackNavigator() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Choose Time">
      <Stack.Screen name="Choose Time" component={ChooseTimeScreen} />
    </Stack.Navigator>
  );
}
