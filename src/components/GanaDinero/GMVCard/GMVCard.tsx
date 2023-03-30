import { ReactElement } from "react";

import { LANG_CODE } from "constants/localeFormatConstants";
import IconCoin from "styled/icons/Coin";
import { screenSizes } from "styled/screen";

import { useMediaQuery, Box, Button, Flex, Image, Img, Spacer, Text } from "@chakra-ui/react";

import { CardLayout } from "../CardLayout/CardLayout";
import { BannerText, BannerWrapper, CardWrapper } from "../CardLayout/CardLayout.styled";
import { CustomProgressBar } from "./GMVCard.styled";
import { IGMVCardProps } from "./IGMVCardProps";

/**
 * The GMV card component.
 * @returns {ReactElement} The GMV card component.
 * @param {IGMVCardProps} props The component properties.
 */
export const GMVCard = (props: IGMVCardProps): ReactElement => {
  const {
    title,
    backToHome,
    progressBarValue,
    completed,
    endChallenge,
    cardDescription,
    priceAmount,
    GMVThreshold,
  } = props;
  const [isDesktop] = useMediaQuery(`(min-width: ${screenSizes.mdMin}px)`);

  /**
   * User completed the challenge.
   * @returns {ReactElement} Complete challenge card.
   */
  const challengeCompleted = (): ReactElement => {
    return (
      <CardWrapper>
        <BannerWrapper>
          <BannerText data-testid="card-layout-banner">{title}</BannerText>
        </BannerWrapper>
        <Box paddingTop="20px">
          <Box
            background="#E8E8E8"
            h="220px"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            borderRadius="12px"
            alignItems="center"
            display="flex"
            justifyContent="center"
            flexDirection="column"
            paddingTop="20px"
          >
            <Image src="/assets/images/icons/clock.png" alt="clock" />
            <Text margin="10px 20px" fontWeight="bold" fontSize="22px">
              ¡RETO COMPLETADO!
            </Text>
            <Text margin="0px 40px" textAlign="center" fontSize="18px">
              Vuelve mañana para seguir ganando monetas
            </Text>
          </Box>
        </Box>
      </CardWrapper>
    );
  };

  if (completed) return challengeCompleted();

  return (
    <CardLayout bannerText={title}>
      <Text
        fontSize={isDesktop ? "22px" : "17px"}
        fontWeight="bold"
        color="white"
        mt={["0px", "20px"]}
      >
        {progressBarValue >= GMVThreshold ? "¡LLEGASTE A LA META! 🎉 " : cardDescription}
      </Text>
      <Text fontSize={isDesktop ? "18px" : "14px"} fontWeight="bold" color="white">
        {progressBarValue >= GMVThreshold
          ? `Finaliza tu pedido actual para ganar $${priceAmount} monetas`
          : ` gana $${priceAmount} monetas para tu próxima compra`}
      </Text>
      <Box className="progress-bar" pos="relative" w={["100%", "90%"]} mt="20px">
        <CustomProgressBar value={progressBarValue} min={0} max={GMVThreshold} />
        <Img
          src="/assets/images/icono_gana.png"
          height="31px"
          pos="absolute"
          right="30px"
          top="8px"
        />
        {progressBarValue >= GMVThreshold ? (
          <Box pos="absolute" right="41px" top="11px">
            <IconCoin width="25px" height="26px" />
          </Box>
        ) : (
          <Box pos="absolute" right="41px" top="11px">
            <IconCoin width="25px" height="26px" opacity="0.3" />
          </Box>
        )}
      </Box>
      <Flex w="100%" p="0 46px" mt="12px" mb="6px">
        <Box>
          <Text fontSize="15px" fontWeight="bold" color="white">
            Lejos de ganar
          </Text>
        </Box>
        <Spacer />
        <Box>
          <Text fontSize="15px" fontWeight="bold" color="white">
            GANASTE
          </Text>
        </Box>
      </Flex>
      {endChallenge && (
        <Text fontSize={isDesktop ? "18px" : "14px"} fontWeight="bold" m="10px 0" color="white">
          *Válido hasta el{" "}
          {endChallenge.toLocaleDateString(LANG_CODE, {
            month: "long",
            day: "numeric",
          })}
        </Text>
      )}
      <Box p="28px 0">
        <Button
          onClick={() => {
            backToHome();
          }}
          borderRadius="16px"
          h="56px"
          w="290px"
          backgroundColor="white"
          color="#3870FF"
          data-testid="gmv-card-button"
        >
          ¡Ir a comprar!
        </Button>
      </Box>
    </CardLayout>
  );
};
