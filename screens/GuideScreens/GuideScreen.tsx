import React from "react";
import { Image } from "react-native";
import GestureRecognizer, {
  swipeDirections,
} from "react-native-swipe-gestures";
import { useNavigation } from "@react-navigation/native";

import { scale, verticalScale } from "../../utilities/scale";
import { MediumText, SmallText, VerticalView } from "../../styled-components";

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
      <VerticalView style={{ justifyContent: "space-between" }}>
        <MediumText adjustsFontSizeToFit>{name}</MediumText>
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
