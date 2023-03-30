import { ReactElement } from "react";

import InfiniteScroll from "react-infinite-scroll-component";

import { Loader } from "components/common/Loader";
import { IBalanceCardStyle } from "components/GanaDinero/IGanaDineroStyles";
import { COIN } from "constants/historialMonetasConstants";
import { CURRENCY_NAME } from "constants/localeFormatConstants";
import { screenSizes } from "styled/screen";
import { formatMoney } from "utils/currencyUtils";

import { useMediaQuery, Box, Center, Divider, Flex, Image, Text } from "@chakra-ui/react";

import CardHistoryComponent from "./CardHistoryComponent/CardHistoryComponent";
import { IHistorialMonetasProps } from "./IHistorialMonetasProps";
import { MonetasEmpty } from "./MonetasEmpty";

/**
 * The HistorialMonetas component.
 * @param {IHistorialMonetasProps} props the component props.
 * @returns {ReactElement} the component element.
 */
export const HistorialMonetas = (props: IHistorialMonetasProps): ReactElement => {
  const { monetasHistory, coins, hasMoreMonetas, loadNextPage } = props;
  const userAmountCoins = coins && parseFloat(coins?.customerCurrentNetaWallet);
  const hasMonetas = Array.isArray(monetasHistory) && monetasHistory.length > 0;
  const hadCoinsInNetaWallet = coins && parseFloat(coins?.customerCurrentNetaWallet) > 0;
  const [isDesktop] = useMediaQuery(`(min-width: ${screenSizes.mdMin}px)`);
  const [isMobile] = useMediaQuery(`(min-width: ${screenSizes.xs + 1}px)`);
  let balanceCardStyle: IBalanceCardStyle = {
    cardBackground: "white",
    boxShadow: "none",
    cardTextColor: "",
    amountCoinText: "",
  };
  if (hadCoinsInNetaWallet) {
    balanceCardStyle = {
      ...balanceCardStyle,
      cardBackground: "linear-gradient(180deg, #FFBB36 0%, #EC9C00 100%)",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25), inset -22px -10px 71px rgba(116, 0, 0, 0.25)",
      cardTextColor: "#610C00",
      amountCoinText: `${formatMoney(Number(userAmountCoins), CURRENCY_NAME)} pesos`,
    };
  } else {
    balanceCardStyle = {
      ...balanceCardStyle,
      cardBackground:
        "linear-gradient(180deg, rgba(173, 173, 173, 0.25), rgba(123, 123, 123, 0.25), rgba(87, 87, 87, 0.25))",
      boxShadow: "0px 1px 7px rgba(180, 180, 180, 0.25)",
      cardTextColor: "#777777",
      amountCoinText: "$0 pesos",
    };
  }

  return hasMonetas ? (
    <Box pt="20px">
      <Flex
        flexDirection={isDesktop ? "row" : "column"}
        alignItems={isDesktop ? "center" : ""}
        justifyContent={isDesktop ? "space-between" : ""}
      >
        <Box pb={3}>
          <Text fontSize="24px" fontWeight={800}>
            Movimientos
          </Text>
          <Text fontSize="14px">Conoce los movimientos que has realizado con tus monetas</Text>
          <Divider p={3} />
        </Box>

        <Box
          background={balanceCardStyle.cardBackground}
          h="100px"
          boxShadow={balanceCardStyle.boxShadow}
          display="flex"
          alignItems="center"
          borderRadius="13px"
        >
          <Flex flexDirection="column">
            <Box
              flexDirection="column"
              alignItems="center"
              p="10px 20px 10px"
              color={balanceCardStyle.cardTextColor}
            >
              <Flex flexDirection="row">
                <Flex p="8px 0">
                  <Image w="100%" src={COIN} />
                </Flex>
                <Flex flexDirection="column" p={2}>
                  <Box fontWeight="700" fontSize="18px">
                    Saldo actual
                  </Box>
                  <Box fontWeight="600" fontSize={isMobile ? "36px" : "24px"}>
                    {balanceCardStyle.amountCoinText}
                  </Box>
                </Flex>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Flex>
      <InfiniteScroll
        dataLength={monetasHistory.length}
        style={{ overflow: "hidden", width: "100%", padding: "0.5rem 0" }}
        next={loadNextPage}
        hasMore={hasMoreMonetas}
        loader={
          <Center pt="30px">
            <Loader />
          </Center>
        }
      >
        {monetasHistory?.map((moneta) => {
          return (
            <Box key={moneta.Id} padding="0.5rem 0">
              <CardHistoryComponent
                amount={moneta.Amount}
                detail={moneta.MovementDescription}
                date={moneta.CreatedOnUtc}
                orderId={moneta.OrderId}
                movementTypeId={moneta.MovementType}
              />
            </Box>
          );
        })}
      </InfiniteScroll>
    </Box>
  ) : (
    <MonetasEmpty />
  );
};
