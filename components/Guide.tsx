import React, { useCallback } from "react";
import GestureRecognizer, {
  swipeDirections,
} from "react-native-swipe-gestures";

import { VerticalView } from "../styled-components";

export default function Guide(name: string, imageDir: string, { navigation }) {
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

  const guideTitles = [
    [
      "Take a Seat",
      "Find a place to sit (or lie down) that feels calm and quiet to you",
    ],
    [
      "Set a Time limit",
      "If you are just beginning, it can help to choose a short time, such as 5 or 10 minutes",
    ],
    [
      "Notice Your Body",
      "You can sit in a chair with your feet on the floor, you can sit loosely cross-legged, you can kneel - all are fine. Just make sure you are stable and in a position you can stay in for a while",
    ],
    "Feel Your Breath",
    "Notice When Your Mind Has Wandered",
    "Be Kind to Your Wandering Mind",
    "Close with Kindness",
  ];

  // const guides = {
  //   "Take a Seat": { description: "", prev: null, next: "Set a Time Limit", number: 1},
  //   "Set a Time Limit": { prev: "Take a Seat", next: "Notice Your Body", number: 2},
  //   "Notice Your Body": { prev: "Set a Time Limit", next: "", number: 3},
  //   "Sit Down": { description: "", prev: null, next: "Set a Time Limit", number: 4},
  //   "Sit Down": { description: "", prev: null, next: "Set a Time Limit", number: 5},
  //   "Sit Down": { description: "", prev: null, next: "Set a Time Limit", number: 6},
  //   "Sit Down": { description: "", prev: null, next: "Set a Time Limit", number: 7},
  // }

  // return (

  // )
}
