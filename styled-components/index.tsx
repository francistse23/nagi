import styled from "styled-components";
import Constants from "app/constants";

const { fontSize, mainColor, textColor } = Constants;

export const VerticalView = styled.View`
  background-color: ${mainColor};
  flex: 1;
  justify-content: center;
`;

export const LargeText = styled.Text`
  color: ${textColor};
  font-size: ${fontSize * 3}px;
`;

export const MediumText = styled.Text`
  color: ${textColor};
  font-size: ${fontSize * 2}px;
`;

export const SmallText = styled.Text`
  color: ${textColor};
  font-size: ${fontSize}px;
`;
