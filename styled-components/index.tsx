import styled from "styled-components";
import Constants from "../constants";

const { fontSize, mainColor, textColor } = Constants;

export const VerticalView = styled.View`
  align-items: center;
  background-color: ${mainColor};
  flex: 1;
  justify-content: center;
  padding: ${fontSize * 1.5}px;
`;

export const LargeText = styled.Text`
  color: ${textColor};
  font-size: ${fontSize * 2.5}px;
`;

export const MediumText = styled.Text`
  color: ${textColor};
  font-size: ${fontSize * 1.8}px;
`;

export const SmallText = styled.Text`
  color: ${textColor};
  font-size: ${fontSize * 1.5}px;
`;
