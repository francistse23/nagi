import React, { useEffect, useState } from "react";
import { Modal, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { scale } from "../../utilities/scale";
import Constants from "../../constants";
import {
  Button,
  DangerButton,
  LargeText,
  MediumText,
  SmallText,
} from "../../styled-components";

const { buttonColor, mainColor, secondaryColor, spacing } = Constants;

export default function MeditationScreen({ route }) {
  const { time } = route.params;

  const [timerRunning, setTimerRunning] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(time);

  const calculateTimeRemaining = (time) => {
    const mins = Math.floor(time / 60);
    const seconds = time % 60;

    return `${mins > 10 ? mins : `0${mins}`}:${
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
      <DangerButton>
        <SmallText>Leave Session</SmallText>
      </DangerButton>
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
