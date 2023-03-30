import React, { ReactElement, useEffect } from "react";
import { Container, Text } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { textContent } from "../../../constants/InicioShopConstants";
import { onOpen as onOpenAction } from "dataflows/Shops/DeliverOrder/DeliverOrderSlice";
import { IDeliverOrderButtonProps } from "components/Shops/DeliverOrderButton/IDeliverOrderButtonProps";
import { DeliverOrderButton } from "../../../components/Shops/DeliverOrderButton/DeliverOrderButton";
import { PickUpContainer } from "../PickUp/PickUpContainer";
import { SA_HOME_PAGE_VIEWED, TrackerApp } from "constants/amplitudeConstants";
import { trackEvent } from "utils/tracker";
import { selectShopUser } from "dataflows/Shops/Login/LoginSelectors";

/**
 * The User Shop's Invoices Container
 * @returns {ReactElement} The User's Invoices Container
 */
export const InicioShopContainer = (): ReactElement => {
  const { title, subTitle, titleDescription, tags } = textContent;
  const dispatch = useDispatch();

  const shopUser = useSelector(selectShopUser);
  const currentShop = shopUser && shopUser[0];

  /**
   * Handles on open action for the pick up token authentication
   * @returns {void}
   */
  const onOpen = (): void => {
    dispatch(onOpenAction());
  };

  const DeliverOrderButtonProps: IDeliverOrderButtonProps = {
    onOpen,
  };

  type MyType = {
    order: string;
    content: string;
  };

  useEffect(() => {
    trackEvent(SA_HOME_PAGE_VIEWED, [TrackerApp.Amplitude, TrackerApp.Segment], {
      storeId: currentShop?.Id,
      storePhone: currentShop?.CompanyPhoneNumber,
    });
  }, []);

  return (
    <Container maxW="container.lg" p="6" marginTop={4}>
      <Flex direction={["column"]} w="100%" align="center" justify="center">
        <Flex direction={["column"]} w="100%" align="center" justify="center">
          <Text fontWeight="600" fontSize="25px" lineHeight="25px">
            {title} <span style={{ color: "#f04d4b" }}>{subTitle}</span>
          </Text>
          <Text
            fontWeight="400"
            fontSize="17px"
            lineHeight="28px"
            w="327px"
            mt="19px"
            mb={["22px", "24px"]}
          >
            {titleDescription}
          </Text>
        </Flex>
        <Flex
          direction={["column"]}
          w={["100%", "470px"]}
          boxShadow={["unset", "md"]}
          p={["0", "6"]}
          pt={["27px", "6"]}
          pb="0"
          rounded="md"
          bg={["white", "#F5F5F5"]}
          marginTop={["0", 4]}
          borderRadius={["0", "29px"]}
          borderTop={["1px solid #DCDCDC", "unset"]}
        >
          {tags.map((item: MyType, i: number) => {
            const { order, content } = item;
            return (
              <Flex key={i} aling="center" mb={["20px", "40px"]}>
                <Text fontWeight="700" fontSize="25px" lineHeight="24px" mr="16px">
                  {order}
                </Text>
                <Text fontWeight="400" fontSize="16px" lineHeight="24px">
                  {content}
                </Text>
              </Flex>
            );
          })}
        </Flex>
        <Flex w="343px">
          {/* Btn */}
          <DeliverOrderButton {...DeliverOrderButtonProps} />
          {/* Modal */}
          <PickUpContainer withToken />
        </Flex>
      </Flex>
    </Container>
  );
};
