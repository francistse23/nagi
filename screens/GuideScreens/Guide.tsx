import React, { useCallback, useMemo } from "react";
import GestureRecognizer, {
  swipeDirections,
} from "react-native-swipe-gestures";
import { useNavigation } from "@react-navigation/native";

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
}: Props): React.ReactElement<Props> {
  const navigation = useNavigation();

  const handleSwipe = useCallback((gestureName: string) => {
    const { SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;

    switch (gestureName) {
      case SWIPE_DOWN:
      case SWIPE_RIGHT:
        navigation.goBack();
        break;
      // case SWIPE_LEFT:
      //   this.setState({backgroundColor: 'blue'});
      //   break;
      default:
        break;
    }
  }, []);

  return (
    <VerticalView>
      <LargeText>{name}</LargeText>
      <MediumText>{description}</MediumText>
      <SmallText>{number}/7</SmallText>
    </VerticalView>
  );
}