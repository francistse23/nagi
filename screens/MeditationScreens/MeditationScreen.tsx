import React, { useEffect, useState } from "react";
import { Modal, StyleSheet, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Audio } from "expo-av";

import { scale } from "../../utilities/scale";
import calculateTimeRemaining from "../../utilities/calculateTimeRemaining";
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
    let timeoutNavigate;

    const pauseAndUnloadAudio = async () => {
      await playbackObject.sound.pauseAsync();
      await playbackObject.sound.unloadAsync();
    };

    // gradually reduces the volume as the timer is close to expire
    if (timeRemaining <= 60) {
      playbackObject.sound.setVolumeAsync(0.5);
    } else if (timeRemaining <= 30) {
      playbackObject.sound.setVolumeAsync(0.25);
    }

    if (timeRemaining <= 0) {
      setTimerRunning(false);
      setTimeRemaining(0);
      pauseAndUnloadAudio();
      timeoutNavigate = setTimeout(navigation.navigate("End"), 2500);
    }

    return clearTimeout(timeoutNavigate);
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

    if (playbackObject) {
      return playbackObject.sound.unloadAysnc();
    }
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

      {playbackObject ? (
        <DangerButton
          onPress={() =>
            isPlaying
              ? playbackObject.sound.pauseAsync()
              : playbackObject.sound.playAsync()
          }
        >
          <SmallText>music</SmallText>
        </DangerButton>
      ) : null}

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
                playbackObject.sound.unloadAsync();
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
