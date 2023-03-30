import React, { ReactElement } from "react";

import { CURRENCY_NAME } from "constants/localeFormatConstants";
import Link from "next/link";
import { formatMoney } from "utils/currencyUtils";

import { Center, Stack, Text } from "@chakra-ui/react";

import { IProfitBannerProps } from "./IProfitBannerProps";

/**
 * The ProfitBanner component.
 * @returns {ReactElement} the ProfitBanner component.
 * @param {IProfitBannerProps} profitBannerProps ProfitBanner props
 */
export const ProfitBanner = (profitBannerProps: IProfitBannerProps): ReactElement => {
  const { todaysProfit, url } = profitBannerProps;

  return (
    <div>
      <Link href={url} passHref>
        <a href="inherit" target="_blank">
          <Center
            mt="2"
            cursor="pointer"
            background={"linear-gradient(to right, #d64900 0%, #F52220 100%)"}
            h={["70px", "100px", "115px"]}
            color="white"
            borderRadius="md"
            mb="4"
          >
            <Stack spacing={2} align={"center"} lineHeight={["14px", "20px", "24px"]}>
              <Text
                fontSize={{ base: "15px", sm: "20px", md: "20px", lg: "20px" }}
                fontWeight="500"
              >
                Tus ganancias hasta hoy son de{" "}
                <b>¡{formatMoney(todaysProfit, CURRENCY_NAME)} pesos!</b>
              </Text>
              <Text
                fontSize={{ base: "18px", sm: "23px", md: "24px", lg: "24px" }}
                fontWeight="700"
              >
                ¡Comparte tu liga y sigue ganando!
              </Text>
            </Stack>
          </Center>
        </a>
      </Link>
    </div>
  );
};
