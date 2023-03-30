import React, { ReactElement } from "react";

import { TabMenu } from "../TabMenu/TabMenu";
import { InfoHeaderContainer, MainInfoHeader } from "./InfoHeader.styled";

/**
 * The InfoHeader Component
 * @param {IInfoHeaderProps} props the InfoHeader props.
 * @returns {ReactElement} the InfoHeader component.
 */
export const InfoHeader = (): ReactElement => {
  return (
    <MainInfoHeader>
      <InfoHeaderContainer>
        <TabMenu />
      </InfoHeaderContainer>
    </MainInfoHeader>
  );
};
