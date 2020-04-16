import React from "react";
import { LinearGradient } from "expo-linear-gradient";

import Constants from "../../constants";
import { scale, verticalScale } from "../../utilities/scale";
import {
  LargeText,
  MediumText,
  SmallText,
  VerticalView,
} from "../../styled-components";

const {
  buttonColor,
  mainColor,
  secondaryColor,
  spacing,
  textColor,
} = Constants;

export default function ChooseTimeScreen() {
  return (
    <LinearGradient
      colors={[secondaryColor, mainColor]}
      end={[0, 0.7]}
      style={{
        alignItems: "center",
        flex: 1,
        justifyContent: "space-between",
        paddingVertical: "10%",
        width: "100%",
      }}
    >
      <MediumText>
        Please choose how long you would like to meditate today
      </MediumText>
    </LinearGradient>
  );
}
