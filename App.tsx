import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "ghostwhite", fontFamily: "Roboto", fontSize: 40 }}>
        Mindful
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#8BD8C6",
    flex: 1,
    justifyContent: "center",
  },
});
