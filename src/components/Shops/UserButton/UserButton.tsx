import React, { ReactElement } from "react";

import { USER_SHOPS_TITLE } from "constants/shopsConstants";
import ShopsUserIcon from "styled/icons/Shops/Menu/ShopsUser";

import { IconButton } from "@chakra-ui/react";

/**
 * Shops User button component.
 * @returns {ReactElement} the user icon.
 */
export const UserButton = (): ReactElement => {
  return (
    <IconButton
      variant="ghost"
      aria-label={USER_SHOPS_TITLE}
      icon={
        <>
          <ShopsUserIcon />
        </>
      }
    />
  );
};
