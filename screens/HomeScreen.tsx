import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Constants from "../constants";
import { scale, verticalScale } from "../utilities/scale";

const {
  buttonColor,
  mainColor,
  secondaryColor,
  spacing,
  textColor,
} = Constants;

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[secondaryColor, mainColor]}
        end={[0, 0.6]}
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
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: textColor, fontSize: scale(30) }}>
            Start Meditating
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: buttonColor,
    borderRadius: scale(15),
    height: verticalScale(90),
    justifyContent: "center",
    marginVertical: verticalScale(spacing),
    width: scale(300),
  },
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});
