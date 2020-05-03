import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

import Constants from "../../constants";
import { Button, MediumText, SmallText } from "../../styled-components";

const { mainColor, secondaryColor, spacing } = Constants;

export default function ChooseTimeScreen(): React.ReactElement {
  const { navigate } = useNavigation();
  const options: number[] = [2, 5, 10];

  return (
    <LinearGradient
      colors={[secondaryColor, mainColor]}
      end={[0, 0.7]}
      style={styles.container}
    >
      <MediumText style={{ marginVertical: spacing * 3 }}>
        Please choose how long you would like to meditate today
      </MediumText>

      <FlatList
        contentContainerStyle={{
          flex: 3,
          justifyContent: "space-between",
        }}
        data={options}
        keyExtractor={(item, index) => String(index)}
        renderItem={({ item }) => (
          <Button
            onPress={() =>
              navigate("Meditation", {
                // passing seconds to meditation screen
                time: item * 60,
              })
            }
            style={{ marginVertical: spacing }}
          >
            <SmallText>{`${item} Minutes`}</SmallText>
          </Button>
        )}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: "10%",
    width: "100%",
  },
});
