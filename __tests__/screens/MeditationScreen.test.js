import React from "react";
import renderer from "react-test-renderer";
import MockedNavigator from "../navigation/MockedNavigator";
import MeditationScreen from "../../screens/MeditationScreens/MeditationScreen";

describe("Meditation screen tests", () => {
  it("matches snapshot", () => {
    const screen = renderer.create(MeditationScreen);
    expect(screen).toMatchSnapshot();
  });

  it("matches expected navigation behavior", () => {
    const screen = renderer(
      <MockedNavigator component={MeditationScreen} params={{ time: 300 }} />
    ).toJSON();
    expect(screen).toMatchSnapshot;
  });
});
