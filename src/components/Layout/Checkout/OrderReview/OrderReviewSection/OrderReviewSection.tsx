import { Box, Flex, Text } from "@chakra-ui/react";
import { ReactElement } from "react";
import { IOrderReviewSectionProps } from "./IOrderReviewSectionProps";

/**
 * The OrderReviewSection component.
 * @param { IOrderReviewSectionProps } props the component props.
 * @returns { ReactElement } The OrderReviewSection component.
 */
export const OrderReviewSection: React.FC<IOrderReviewSectionProps> = (props): ReactElement => {
  const { title, children, icon } = props;

  return (
    <Box marginTop="40px">
      <Flex alignItems="center">
        <Text fontSize="32px" fontWeight="800" alignSelf="start">
          {title}
        </Text>
        {icon && icon}
      </Flex>
      {children}
    </Box>
  );
};
