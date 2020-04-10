import React from "react";
import { FlatList } from "react-native";

import Constants from "../../constants";
import {
  LargeText,
  MediumText,
  SmallText,
  VerticalView,
} from "../../styled-components";
import GestureRecognizer, {
  swipeDirections,
} from "react-native-swipe-gestures";

const { spacing } = Constants;

export default function Benefits({ navigation }) {
  const benefits = [
    "Understand your pain",
    "Lower your stress",
    "Connect better",
    "Improve focus",
    "Reduce brain chatter",
  ];

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

  const handleSwipe = (gestureName: string) => {
    const { SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;

    switch (gestureName) {
      case SWIPE_DOWN:
      case SWIPE_RIGHT:
        navigation.goBack();
        // console.log("dismissing");
        break;

      // case SWIPE_LEFT:
      //   this.setState({backgroundColor: 'blue'});
      //   break;
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
      <VerticalView style={{ padding: spacing * 4 }}>
        <MediumText style={{ marginBottom: spacing * 2 }}>
          Some of the benefits of meditating...
        </MediumText>
        <FlatList
          data={benefits}
          keyExtractor={(item, index) => String(index)}
          renderItem={({ item }) => (
            <SmallText style={{ marginVertical: spacing }}>- {item}</SmallText>
          )}
        />
      </VerticalView>
    </GestureRecognizer>
  );
}
