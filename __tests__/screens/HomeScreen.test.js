import React from "react";
import renderer from "react-test-renderer";

import HomeScreen from "../../screens/HomeScreen";

describe("Home screen renders correctly", () => {
  it("renders correctly", () => {
    const screen = renderer.create(HomeScreen);
    expect(screen).toMatchSnapshot();
  });
});
