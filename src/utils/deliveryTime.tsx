import { ReactElement } from "react";

import TruckIcon from "styled/icons/Truck";

import { Flex, Text } from "@chakra-ui/react";

/**
 * Format delivery date.
 * @param {number} deliveryDate the delivery date.
 * @param {string} deliveryDateName the delivery date name.
 * @param {string} fontSize the text font size.
 * @param {string} imageSizeWidth the image size width.
 * @param {string} imageSizeHeight the image size height.
 * @returns {ReactElement} string and icon to show the delivery date.
 */
export const deliveryDate = (
  deliveryDate: number,
  deliveryDateName: string,
  fontSize?: string,
  imageSizeWidth?: string,
  imageSizeHeight?: string
): ReactElement => {
  switch (deliveryDate) {
    case 1:
      return (
        <Flex alignItems="center">
          <TruckIcon fill="#0744A6" width={imageSizeWidth} height={imageSizeHeight} />
          <Text fontSize={fontSize ? fontSize : "14px"} textColor="#0744A6" ml="4px">
            {deliveryDateName}
          </Text>
        </Flex>
      );
    case 2:
      return (
        <Flex alignItems="center">
          <TruckIcon fill="#068441" width={imageSizeWidth} height={imageSizeHeight} />
          <Text fontSize={fontSize ? fontSize : "14px"} textColor="#068441" ml="4px">
            {deliveryDateName}
          </Text>
        </Flex>
      );
    case 3:
      return (
        <Flex alignItems="center">
          <TruckIcon fill="#7B61FF" width={imageSizeWidth} height={imageSizeHeight} />
          <Text fontSize={fontSize ? fontSize : "14px"} textColor="#7B61FF" ml="4px">
            {deliveryDateName}
          </Text>
        </Flex>
      );
    default:
      return <></>;
  }
};
