import { useEffect, ReactElement } from "react";

import NotificationIcon from "styled/icons/CheckoutFlow/Notification";

import { useToast, Box, Text } from "@chakra-ui/react";

import { IToastProps } from "./IToastProps";

/**
 * The Toast component.
 * @param {IToastProps} props the props for the component.
 * @returns {ReactElement} the rendered component.
 */
export const Toast = (props: IToastProps): ReactElement => {
  const { message, backgroundColor, delayTime } = props;
  const toast = useToast();
  useEffect(() => {
    toast({
      duration: delayTime ? delayTime * 1000 : 5000,
      isClosable: true,
      position: "bottom",
      containerStyle: {
        marginBottom: "5.5rem",
      },

      render: () => (
        <Box
          p={3}
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25), inset -22px -10px 71px rgba(116, 0, 0, 0.25);"
          bgGradient="linear-gradient(180deg, #EA9C05 0%, #F49507 100%)"
          bg={backgroundColor ? backgroundColor : ""}
          w="100%"
          minH="67px"
          borderRadius="13px"
          d="flex"
          alignItems="center"
        >
          <Box d="flex" alignItems="center" justifyContent="space-between">
            <NotificationIcon />

            <Text
              color="white"
              fontSize="14px"
              fontWeight="700"
              lineHeight="20px"
              paddingLeft="16px"
            >
              {message}
            </Text>
          </Box>
        </Box>
      ),
    });
  }, []);

  return <></>;
};
