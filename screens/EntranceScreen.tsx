import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { scale, verticalScale } from "../utilities/scale";

export default function EntranceScreen() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#8B9DD8", "#8BD8C6"]}
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
            color: "ghostwhite",
            fontFamily: "Roboto",
            fontSize: 60,
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
            color: "ghostwhite",
            fontFamily: "Roboto",
            fontSize: 30,
            paddingHorizontal: scale(50),
            textAlign: "center",
          }}
        >
          "Quiet the mind, and the soul will speak."
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: "white", fontSize: scale(30) }}>
            Start Meditating
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#94D88B",
    borderRadius: scale(15),
    height: verticalScale(90),
    justifyContent: "center",
    width: scale(300),
  },
  container: {
    alignItems: "center",
    // backgroundColor: "#8BD8C6",
    flex: 1,
    justifyContent: "center",
  },
});
