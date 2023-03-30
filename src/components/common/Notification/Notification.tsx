import { useEffect, useState, ReactElement } from "react";

import { Box, Text } from "@chakra-ui/react";

import { INotificationProps } from "./INotificationProps";

/**
 * The Notification component.
 * @param {INotificationProps} props the props for the component.
 * @returns {ReactElement} the rendered component.
 */
export const Notification = ({
  message,
  backgroundColor,
  delayTime,
  icon,
}: INotificationProps): ReactElement | null => {
  const [showNotification, setShowNotification] = useState(true);

  const timeDisplay = delayTime ? delayTime * 1000 : 5000;
  useEffect(() => {
    const interval = setInterval(() => {
      if (showNotification) {
        setShowNotification(false);
      }
    }, timeDisplay);

    return () => {
      clearInterval(interval);
    };
  }, [showNotification]);

  return showNotification ? (
    <Box
      p={3}
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25), inset -22px -10px 71px rgba(116, 0, 0, 0.25);"
      bgGradient={
        backgroundColor ? backgroundColor : "linear-gradient(180deg, #EA9C05 0%, #F49507 100%)"
      }
      bg={backgroundColor ? backgroundColor : ""}
      w="92%"
      minH="67px"
      borderRadius="13px"
      d="flex"
      alignItems="center"
      margin="0 auto"
      position="absolute"
      marginLeft="16px"
      marginRight="16px"
      bottom="-4px"
    >
      <Box d="flex" alignItems="center" justifyContent="space-between">
        {icon}

        <Text
          color="white"
          fontSize="14px"
          fontWeight="700"
          lineHeight="20px"
          paddingLeft="16px"
          paddingTop="10px"
        >
          {message}
        </Text>

        <Text
          color="white"
          fontSize="14px"
          fontWeight="700"
          lineHeight="20px"
          position="absolute"
          right="12px"
          top="5px"
          cursor="pointer"
          onClick={() => setShowNotification(false)}
        >
          X
        </Text>
      </Box>
    </Box>
  ) : null;
};
