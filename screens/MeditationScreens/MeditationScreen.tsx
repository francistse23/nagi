import React, { useEffect, useState } from "react";
import { Modal, StyleSheet, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Audio } from "expo-av";

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
  const [playbackObject, setPlaybackObject] = useState(null);
  const [playbackLoaded, setPlaybackLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
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
      }, 10);
    }

    return () => clearInterval(runTimer);
  }, [timerRunning]);

  useEffect(() => {
    if (timeRemaining <= 10) {
      playbackObject.sound.setVolumeAsync(0.1);
    }

    if (timeRemaining <= 0) {
      setTimerRunning(false);
      playbackObject.sound.pauseAsync();
      playbackObject.sound.unloadAsync();
      navigation.navigate("End");
    }
  }, [timeRemaining]);

  useEffect(() => {
    async function createPlayback() {
      await setPlaybackObject(
        await Audio.Sound.createAsync(require("../../assets/audio/waves.mp3"), {
          shouldPlay: true,
          isLooping: true,
        })
      );

      if (!playbackLoaded) {
        await playbackObject.sound.loadAsync();
        setPlaybackLoaded(true);
      }
    }
    createPlayback();
  }, []);

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

      <DangerButton
        onPress={() =>
          isPlaying
            ? playbackObject.sound.pauseAsync()
            : playbackObject.sound.playAsync()
        }
      >
        <SmallText>music</SmallText>
      </DangerButton>

      <DangerButton onPress={() => setModalVisible(true)}>
        <SmallText>Leave Session</SmallText>
      </DangerButton>
      {/* leave session modal */}
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
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <SmallText>No</SmallText>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
                navigation.popToTop();
                navigation.navigate("Home");
              }}
            >
              <SmallText>Yes</SmallText>
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
