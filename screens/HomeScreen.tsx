import React from "react";
import { Image, StyleSheet, Text, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { Button } from "../styled-components";
import Constants from "../constants";
import { scale, verticalScale } from "../utilities/scale";

const { mainColor, secondaryColor, textColor } = Constants;

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[secondaryColor, mainColor]}
        end={[0, 0.7]}
        style={{
          alignItems: "center",
          flex: 1,
          justifyContent: "space-between",
          paddingVertical: "10%",
          width: "100%",
        }}
      >
        <Text
          style={{
            color: textColor,
            fontFamily: "Roboto",
            fontSize: scale(60),
            textAlign: "center",
          }}
        >
          Nagi
        </Text>
        <Image
          source={require("../assets/nagi.png")}
          style={{
            height: verticalScale(197),
            marginVertical: verticalScale(50),
            width: scale(200),
          }}
        />
        <Text
          style={{
            color: textColor,
            fontFamily: "Roboto",
            fontSize: scale(30),
            paddingHorizontal: scale(50),
            textAlign: "center",
          }}
        >
          "Quiet the mind, and the soul will speak."
        </Text>
        <Button onPress={() => navigation.navigate("Meditation")}>
          <Text style={{ color: textColor, fontSize: scale(30) }}>
            Start Meditating
          </Text>
        </Button>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});
