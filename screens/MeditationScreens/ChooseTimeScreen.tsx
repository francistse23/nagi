import React from "react";
import { FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Constants from "../../constants";
import { Button, MediumText, SmallText } from "../../styled-components";

const { mainColor, secondaryColor, spacing } = Constants;

export default function ChooseTimeScreen({ navigation }) {
  // const [isTimePickerVisible, setTimePickerVisible] = useState(false);

  const options = [2, 5, 10];

  return (
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
            onPress={() => {
              item
                ? navigation.navigate("Meditation", {
                    time: item * 60,
                  })
                : null;
            }}
            style={{ marginVertical: spacing }}
          >
            <SmallText>{item ? `${item} Minutes` : "Custom"}</SmallText>
          </Button>
        )}
      />
    </LinearGradient>
  );
}
