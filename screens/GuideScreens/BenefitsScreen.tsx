import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GestureRecognizer, {
  swipeDirections,
} from "react-native-swipe-gestures";
import { LinearGradient } from "expo-linear-gradient";

import Constants from "../../constants";
import { MediumText, SmallText } from "../../styled-components";

const { mainColor, secondaryColor, spacing } = Constants;

export default function BenefitsScreen(): React.ReactElement {
  const { goBack, navigate } = useNavigation();

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
        goBack();
        break;
      case SWIPE_LEFT:
        navigate("Take a Seat");
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
        <SmallText>Swipe left to continue</SmallText>
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
