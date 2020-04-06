import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import Constants from "../../constants";

const { fontSize, textColor } = Constants;

const benefits = [
  "Understand your pain",
  "Lower your stress",
  "Connect better",
  "Improve focus",
  "Reduce brain chatter",
];

export default function Benefits() {
  return (
    <View>
      <Text style={styles.item}>Some of the benefits of meditating...</Text>
      <FlatList
        data={benefits}
        keyExtractor={(item, index) => String(index)}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    color: textColor,
    fontSize: fontSize,
  },
});
