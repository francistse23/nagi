import React from "react";
import renderer from "react-test-renderer";
import MeditationScreen from "../../screens/MeditationScreens/MeditationScreen";

describe("Meditation screen tests", () => {
  it("matches snapshot", () => {
    const screen = renderer.create(MeditationScreen);
    expect(screen).toMatchSnapshot();
  });
});
