import React, { useCallback, useMemo } from "react";
import GestureRecognizer, {
  swipeDirections,
} from "react-native-swipe-gestures";

import { VerticalView } from "../../styled-components";

export default function Guide({
  description,
  image,
  name,
  prev,
  next,
  number,
  navigation,
}) {
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

  // return (

  // )
}
