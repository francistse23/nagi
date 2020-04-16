import React, { useCallback, useMemo } from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";

import Benefits from "../screens/GuideScreens/Benefits";
import Guide from "../screens/GuideScreens/Guide";

const Stack = createStackNavigator();

export default function GuideStackNavigator() {
  const guideItems: any[][] = [
    [
      "Take a Seat",
      "Find a place to sit (or lie down) that feels calm and quiet to you",
      require("../assets/sitting.png"),
    ],
    [
      "Set a Time limit",
      "If you are just beginning, it can help to choose a short time, such as 5 or 10 minutes",
      require("../assets/stopwatch.png"),
    ],
    [
      "Notice Your Body",
      "It doesn't matter how you lie or sit, just make sure you are stable and in a position you can stay in for a while",
    ],
    [
      "Feel Your Breath",
      "Follow the sensation of your breah as it goes in and as it goes out",
    ],
    [
      "Notice When Your Mind Has Wandered",
      "Inevitably, your attention will wander to other places. When you have noticed that, simply return your attention to the breath",
    ],
    [
      "Be Kind to Your Wandering Mind",
      "Don't judge yourself or obsess over the content of the thoughts you find yourself lost in. Just come back",
    ],
    [
      "Close with Kindness",
      "When you're ready, gently lift your gaze (if your eyes are closed, open them). Take a moment and notice your thoughts and emotions",
    ],
  ];

  const compileGuide = useCallback(
    (guideItems: any[]) => {
      const guides = [];

      for (let i = 0; i < guideItems.length; i++) {
        const guide = {
          description: guideItems[i][1],
          image: guideItems[i][2],
          next: i === guideItems.length - 1 ? "Home" : guideItems[i + 1][0],
          number: i + 1,
          prev: i === 0 ? "Benefits" : guideItems[i - 1][0],
        };

        guides.push({ [guideItems[i][0]]: guide });
      }

      return guides;
    },
    [guideItems]
  );

  const guides = useMemo(() => compileGuide(guideItems), [guideItems]);

  return (
    <Stack.Navigator headerMode="none" initialRouteName="Benefits">
      <Stack.Screen name="Benefits" component={Benefits} />
      {guides.map((guide, index) => {
        const [screenName]: string[] = Object.keys(guide);
        const { description, image, next, number, prev } = Object.values(
          guide
        )[0];

        return (
          <Stack.Screen
            key={index}
            name={screenName}
            options={{
              title: "Profile",
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
          >
            {(props) => (
              <Guide
                {...props}
                description={description}
                image={image}
                name={screenName}
                next={next}
                number={number}
                prev={prev}
              />
            )}
          </Stack.Screen>
        );
      })}
    </Stack.Navigator>
  );
}
