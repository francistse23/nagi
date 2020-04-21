import React from "react";

import { quotes } from "../../constants/quotes";
import { SmallText, VerticalView } from "../../styled-components";

export default function EndScreen() {
  const index = Math.floor(Math.random() * 12);

  return (
    <VerticalView>
      <SmallText>{quotes[index].quote}</SmallText>
      <SmallText style={{ textAlign: "right" }}>
        - {quotes[index].author}
      </SmallText>
    </VerticalView>
  );
}
