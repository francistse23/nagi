import React from "react";
import { Image, StyleSheet, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

import { Button, LargeText, MediumText } from "../styled-components";
import Constants from "../constants";
import { scale, verticalScale } from "../utilities/scale";

const { mainColor, secondaryColor } = Constants;

export default function HomeScreen(): React.ReactElement {
  const { navigate } = useNavigation();

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
        <LargeText
          style={{
            fontSize: scale(60),
          }}
        >
          Nagi
        </LargeText>
        <Image
          source={require("../assets/nagi.png")}
          style={{
            height: verticalScale(197),
            marginVertical: verticalScale(50),
            width: scale(200),
          }}
        />
        <MediumText style={{ width: "60%" }}>
          "Quiet the mind, and the soul will speak."
        </MediumText>
        <Button onPress={() => navigate("Meditation")}>
          <MediumText>Start Meditating</MediumText>
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
