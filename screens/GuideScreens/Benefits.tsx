import React from "react";
import { FlatList } from "react-native";

import Constants from "../../constants";
import { MediumText, SmallText, VerticalView } from "app/styled-components";

const benefits = [
  "Understand your pain",
  "Lower your stress",
  "Connect better",
  "Improve focus",
  "Reduce brain chatter",
];

export default function Benefits() {
  return (
    <VerticalView style={{ padding: 48 }}>
      <MediumText>Some of the benefits of meditating...</MediumText>
      <FlatList
        data={benefits}
        keyExtractor={(item, index) => String(index)}
        renderItem={({ item }) => <SmallText>{item}</SmallText>}
      />
    </VerticalView>
  );
}
