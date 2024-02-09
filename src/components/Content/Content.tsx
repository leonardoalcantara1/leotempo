import React, { PropsWithChildren } from "react";
import { ContentBox, ContentWrapper } from "./styles";

const Content: React.FC<PropsWithChildren<{}>> = ({ children }) => (
  <ContentWrapper>
    <ContentBox>
      {children}
    </ContentBox>
  </ContentWrapper>
);

export default Content;
