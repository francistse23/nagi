import styled from "styled-components";
import Constants from "../constants";
import { scale, verticalScale } from "../utilities/scale";

const {
  buttonColor,
  dangerColor,
  fontSize,
  mainColor,
  spacing,
  textColor,
} = Constants;

export const VerticalView = styled.View`
  align-items: center;
  background-color: ${mainColor};
  flex: 1;
  justify-content: center;
  padding: ${fontSize * 3}px;
`;

export const LargeText = styled.Text`
  color: ${textColor};
  font-size: ${fontSize * 2.5}px;
`;

export const MediumText = styled.Text`
  color: ${textColor};
  font-size: ${fontSize * 1.8}px;
  text-align-vertical: center;
  text-align: center;
`;

export const SmallText = styled.Text`
  color: ${textColor};
  font-size: ${fontSize * 1.5}px;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  background-color: ${buttonColor};
  border-radius: ${scale(15)}px;
  height: ${verticalScale(90)}px;
  justify-content: center;
  margin-vertical: ${verticalScale(spacing)}px;
  width: ${scale(300)}px;
`;

export const DangerButton = styled.TouchableOpacity`
  align-items: center;
  background-color: ${dangerColor};
  border-radius: ${scale(15)}px;
  height: ${verticalScale(70)}px;
  justify-content: center;
  margin-vertical: ${verticalScale(spacing)}px;
  width: ${scale(200)}px;
`;
