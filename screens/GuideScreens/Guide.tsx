import React from "react";
import { Image } from "react-native";
import GestureRecognizer, {
  swipeDirections,
} from "react-native-swipe-gestures";
import { useNavigation } from "@react-navigation/native";

import { scale, verticalScale } from "../../utilities/scale";
import {
  LargeText,
  MediumText,
  SmallText,
  VerticalView,
} from "../../styled-components";

export default function Guide({
  description,
  image,
  name,
  prev,
  next,
  number,
}): React.ReactElement {
  const navigation = useNavigation();

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

  const handleSwipe = (gestureName: string) => {
    const { SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;

    switch (gestureName) {
      case SWIPE_DOWN:
        navigation.popToTop();
        break;
      case SWIPE_RIGHT:
        navigation.navigate(prev);
        break;
      case SWIPE_LEFT:
        navigation.navigate(next);
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
      <VerticalView style={{ justifyContent: "space-between" }}>
        <LargeText>{name}</LargeText>
        <Image
          source={image}
          style={{ height: verticalScale(250), width: scale(175) }}
        />
        <MediumText adjustsFontSizeToFit numberOfLines={7}>
          {description}
        </MediumText>
        <SmallText>{number}/7</SmallText>
      </VerticalView>
    </GestureRecognizer>
  );
}
