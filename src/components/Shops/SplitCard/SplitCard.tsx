import React, { ReactElement } from "react";

import { Center, Divider, Flex, Text } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/react";

import { ISplitCardProps } from "./ISplitCard";

/**
 * Card divided into 3 sections component.
 * @returns {ReactElement} the SplitCard component.
 * @param {ISplitCardProps} props SplitCard props
 */
export const SplitCard = (props: ISplitCardProps): ReactElement => {
  const {
    firstTitle,
    firstSubtitle,
    firstIcon,
    secondTitle,
    secondSubtitle,
    secondIcon,
    thirdTitle,
    thirdSubtitle,
    thirdIcon,
  } = props;

  return (
    <Flex
      direction={["column", "column", "row", "row"]}
      mt="6"
      mb="6"
      boxShadow="xs"
      p={["1", "2", "4"]}
      rounded="lg"
      justify="center"
    >
      <Flex align="center" mx="2" mt={["2", "0"]}>
        {firstIcon}
        <Box ml="2" mx="4" width={["auto", "auto", "130px"]}>
          <Text fontSize={{ base: "17px", md: "14px", lg: "15px" }}>
            {firstTitle}
            <b> {firstSubtitle}</b>
          </Text>
        </Box>
      </Flex>
      <Center
        align="center"
        height={["0px", "0px", "40px"]}
        ml={["0", "0", "3", "8"]}
        mr={["0", "0", "3", "8"]}
      >
        <Divider orientation="vertical" />
      </Center>
      <Flex align="center" mx="2" mt={["2", "0"]}>
        {secondIcon}
        <Box ml="2" mx="4" width={["auto", "auto", "100px"]}>
          <Text fontSize={{ base: "17px", md: "14px", lg: "15px" }}>
            {secondTitle}
            <b>{secondSubtitle}</b>
          </Text>
        </Box>
      </Flex>
      <Center
        align="center"
        height={["0px", "0px", "40px"]}
        ml={["0", "0", "3", "8"]}
        mr={["0", "0", "3", "8"]}
      >
        <Divider orientation="vertical" />
      </Center>
      <Flex align="center" mx="2" mt={["2", "0"]} mb={["2", "0"]}>
        {thirdIcon}
        <Box ml="2" mx="4" width={["auto", "auto", "140px"]}>
          <Text fontSize={{ base: "17px", md: "14px", lg: "15px" }}>
            {thirdTitle}
            <b>{thirdSubtitle}</b>
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};
