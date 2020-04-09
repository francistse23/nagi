import React from "react";
import { FlatList } from "react-native";

import Constants from "../../constants";
import {
  LargeText,
  MediumText,
  SmallText,
  VerticalView,
} from "../../styled-components";

const { spacing } = Constants;

export default function Benefits() {
  const benefits = [
    "Understand your pain",
    "Lower your stress",
    "Connect better",
    "Improve focus",
    "Reduce brain chatter",
  ];

  return (
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
  );
}
