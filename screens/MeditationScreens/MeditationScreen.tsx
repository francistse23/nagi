import React, { useEffect, useState } from "react";
import { Modal, StyleSheet, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { scale } from "../../utilities/scale";
import Constants from "../../constants";
import {
  DangerButton,
  LargeText,
  MediumText,
  SmallText,
} from "../../styled-components";

const { buttonColor, mainColor, secondaryColor, spacing } = Constants;

export default function MeditationScreen({ route, navigation }) {
  const { time } = route.params;

  const [modalVisible, setModalVisible] = useState(false);
  const [timerRunning, setTimerRunning] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(time);

  const calculateTimeRemaining = (time: number) => {
    const mins = Math.floor(time / 60);
    const seconds = time % 60;

    return `${mins >= 10 ? mins : `0${mins}`}:${
      seconds.toString().length > 1 ? seconds : `0${seconds}`
    }`;
  };

  const countDown = () => {
    setTimeRemaining((timeRemaining) => timeRemaining - 1);
  };

  useEffect(() => {
    let runTimer;

    if (timerRunning && timeRemaining > 0) {
      runTimer = setInterval(() => {
        countDown();
      }, 1000);
    }

    return () => clearInterval(runTimer);
  }, [timerRunning]);

  useEffect(() => {
    if (timeRemaining <= 0) {
      setTimerRunning(false);
      navigation.navigate("End");
    }
  }, [timeRemaining]);

  return (
    <LinearGradient
      colors={[secondaryColor, mainColor]}
      end={[0, 0.7]}
      style={{
        alignItems: "center",
        flex: 1,
        justifyContent: "space-around",
        paddingVertical: "10%",
        width: "100%",
      }}
    >
      <LargeText>{calculateTimeRemaining(timeRemaining)}</LargeText>
      <TouchableOpacity
        onPress={() => setTimerRunning((state) => !state)}
        style={styles.startButton}
      >
        <SmallText>{!timerRunning ? "Start" : "Pause"}</SmallText>
      </TouchableOpacity>
      <DangerButton onPress={() => setModalVisible(true)}>
        <SmallText>Leave Session</SmallText>
      </DangerButton>
      {/* leave session modal */}
      {/* set timerRunning to false */}
      <Modal
        animationType="fade"
        onShow={() => setTimerRunning(false)}
        visible={modalVisible}
      >
        <LinearGradient
          colors={[secondaryColor, mainColor]}
          end={[0, 0.7]}
          style={{
            alignItems: "center",
            flex: 1,
            justifyContent: "space-around",
            paddingVertical: "10%",
            width: "100%",
          }}
        >
          <MediumText>Do you want to leave this session?</MediumText>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "60%",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
                navigation.popToTop();
                navigation.navigate("Home");
              }}
            >
              <SmallText>Yes</SmallText>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <SmallText>No</SmallText>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </Modal>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  startButton: {
    alignItems: "center",
    backgroundColor: buttonColor,
    borderColor: secondaryColor,
    borderWidth: 5,
    borderRadius: scale(200) / 2,
    height: scale(200),
    justifyContent: "center",
    width: scale(200),
  },
});
