import React from "react";
import { Image, StyleSheet } from "react-native";
import GestureRecognizer, {
  swipeDirections,
} from "react-native-swipe-gestures";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

import { scale, verticalScale } from "../../utilities/scale";
import { MediumText, SmallText } from "../../styled-components";
import Constants from "../../constants";

const { mainColor, secondaryColor, spacing } = Constants;

export default function GuideScreen({
  description,
  image,
  name,
  prev,
  next,
  number,
}): React.ReactElement {
  const { navigate, popToTop } = useNavigation();

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

  const handleSwipe = (gestureName: string) => {
    const { SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;

    switch (gestureName) {
      case SWIPE_DOWN:
        popToTop();
        break;
      case SWIPE_RIGHT:
        navigate(prev);
        break;
      case SWIPE_LEFT:
        navigate(next);
        break;
      default:
        break;
    }
  };

  return (
    <GestureRecognizer
      config={config}
      onSwipe={(direction) => handleSwipe(direction)}
      style={{ flex: 1 }}
    >
      <LinearGradient
        colors={[secondaryColor, mainColor]}
        end={[0, 0.7]}
        style={styles.container}
      >
        <MediumText adjustsFontSizeToFit>{name}</MediumText>
        <Image
          source={image}
          style={{ height: verticalScale(250), width: scale(175) }}
        />
        <MediumText
          adjustsFontSizeToFit
          numberOfLines={7}
          style={{ paddingHorizontal: spacing * 2 }}
        >
          {description}
        </MediumText>
        <SmallText>{number}/7</SmallText>
      </LinearGradient>
    </GestureRecognizer>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "space-around",
    paddingVertical: "10%",
    width: "100%",
  },
});
