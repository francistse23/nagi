import calculateTimeRemaining from "../utilities/calculateTimeRemaining";

describe("testing if calculate time remaining is showing the correct values", () => {
  it("time === 0", () => {
    expect(calculateTimeRemaining(0)).toBe("00:00");
  });
  it("time === -123", () => {
    expect(calculateTimeRemaining(-123)).toBe("00:00");
  });
  it("time === 346", () => {
    expect(calculateTimeRemaining(346)).toBe("05:46");
  });
});
