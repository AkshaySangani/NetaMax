import React, { ReactElement } from "react";

import IconTracking from "styled/icons/Shops/Order/Tracking";

import { Link, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";

import { ITrackingButtonProps } from "./ITrackingButtonProps";

/**
 * TrackingButton component.
 * @returns {ReactElement} the TrackingButton component.
 * @param {ITrackingButtonProps} props TrackingButton props
 */
export const TrackingButton = (props: ITrackingButtonProps): ReactElement => {
  const { trackingUrl, disabled } = props;
  return (
    <Link
      href={disabled ? undefined : trackingUrl}
      target="_blank"
      textDecoration="none"
      _hover={{
        textDecoration: "none",
        cursor: disabled ? "default" : "pointer",
      }}
    >
      <Button
        background="linear-gradient(180deg, #499453 0%, #088519 100%);"
        height="72px"
        borderRadius="13px"
        display="flex"
        justifyContent="space-between"
        _hover={{
          background: "linear-gradient(180deg, #76bc80 0%, #6bb675 100%);",
          cursor: disabled ? "default" : "pointer",
        }}
        data-testid="Tracking button"
        disabled={disabled}
      >
        <IconTracking />
        <Text ml="1" color="#FFF" fontSize="20px">
          Rastrear mi última entrega
        </Text>
      </Button>
    </Link>
  );
};
