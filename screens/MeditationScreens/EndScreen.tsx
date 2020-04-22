import React from "react";
import GestureRecognizer, {
  swipeDirections,
} from "react-native-swipe-gestures";

import { quotes } from "../../constants/quotes";
import { SmallText, VerticalView } from "../../styled-components";

export default function EndScreen({ navigation }) {
  // 0 - 11
  const index = Math.floor(Math.random() * 12);

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

  const handleSwipe = (gestureName: string) => {
    const { SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT, SWIPE_UP } = swipeDirections;

    switch (gestureName) {
      case SWIPE_DOWN:
      case SWIPE_LEFT:
      case SWIPE_RIGHT:
      case SWIPE_UP:
        navigation.navigate("Home");
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
      <VerticalView>
        <SmallText>"{quotes[index].quote}"</SmallText>
        <SmallText style={{ alignSelf: "flex-end", paddingVertical: 16 }}>
          - {quotes[index].author}
        </SmallText>
      </VerticalView>
    </GestureRecognizer>
  );
}
