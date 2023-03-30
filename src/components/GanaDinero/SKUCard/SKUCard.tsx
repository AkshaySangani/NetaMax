import React, { ReactElement } from "react";

import { Box, Button, Flex, Text, useMediaQuery, Image, Img, Spacer } from "@chakra-ui/react";

import { CardLayout } from "../CardLayout/CardLayout";
import { screenSizes } from "styled/screen";
import Check from "styled/icons/Check";
import { ISKUCardProps } from "./ISKUCardProps";
import { CustomProgressBar } from "./SKUCard.styled";
import { LANG_CODE } from "constants/localeFormatConstants";
import { BannerText, BannerWrapper, CardWrapper } from "../CardLayout/CardLayout.styled";

/**
 * SKUCard
 * @param {ISKUCardProps} props component props
 * @returns {ReactElement} the react element to render.
 */
export const SKUCard = (props: ISKUCardProps): ReactElement => {
  const {
    title,
    buttonAction,
    endDate,
    progressBarValue,
    requiredItems,
    secondaryColor,
    awardCoins,
    accepted,
    completed,
    image,
  } = props;
  const [isDesktop] = useMediaQuery(`(min-width: ${screenSizes.mdMin}px)`);

  if (completed) {
    return (
      <CardWrapper>
        <BannerWrapper>
          <BannerText data-testid="card-layout-banner">Te regalamos ${awardCoins}</BannerText>
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
  }
  return (
    <CardLayout
      bannerText={`Te regalamos $${awardCoins}`}
      gradientColors={secondaryColor ? ["#8E35FF", "#7000FE"] : ["#B0009F", "#5B0077"]}
    >
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        pb="24px"
        h={isDesktop ? "335px" : "unset"}
      >
        <Flex
          alignItems="center"
          justifyContent="center"
          p="0 35px 0 25px"
          position="relative"
          flexDir={isDesktop ? "column" : "row"}
        >
          <Box mr={isDesktop ? 0 : "10px"} position="relative">
            <Flex
              backgroundColor="#FFF"
              borderWidth="3px"
              borderColor={secondaryColor ? "#7E19FE" : "#85008A"}
              w={isDesktop ? "35px" : "30px"}
              h={isDesktop ? "35px" : "30px"}
              borderRadius="99px"
              zIndex={2}
              position="absolute"
              alignItems="center"
              justifyContent="center"
              bottom="-18px"
              left={isDesktop ? "31%" : "25%"}
            >
              <Text
                color={secondaryColor ? "#7000CA" : "#A70098"}
                fontSize={isDesktop ? "12px" : "9px"}
                fontWeight="900"
                data-testid="sku-card-items"
              >
                {progressBarValue >= 100 ? (
                  <Check width={isDesktop ? "14px" : "12px"} height={isDesktop ? "14px" : "12px"} />
                ) : (
                  requiredItems
                )}
              </Text>
            </Flex>
            <Flex
              w={isDesktop ? "90px" : "60px"}
              h={isDesktop ? "90px" : "60px"}
              borderRadius="99px"
              overflow="hidden"
              position="relative"
              alignItems="center"
              justifyContent="center"
            >
              <Image src={image} zIndex={1} width={isDesktop ? "60px" : "50px"} mt="70px" />
              <Box
                backgroundColor="#C4C4C4"
                h={isDesktop ? "90px" : "60px"}
                w={isDesktop ? "90px" : "60px"}
                borderRadius={99}
                zIndex={0}
                mixBlendMode="hard-light"
                position="absolute"
              />
            </Flex>
          </Box>
          <Box>
            <Text
              fontSize={isDesktop ? "22px" : "20px"}
              fontWeight="bold"
              color="#FFF"
              mt={["0px", "20px"]}
              textAlign={isDesktop ? "center" : "left"}
              data-testid="sku-card-title"
            >
              {progressBarValue >= 100 ? "¡Llegaste a la meta!" : title}
            </Text>
            <Text
              fontSize="14px"
              color="#FFF"
              fontWeight="500"
              textAlign={isDesktop ? "center" : "left"}
              data-testid="sku-card-description"
            >
              {progressBarValue >= 100
                ? `Finaliza tu pedido actual y gana tus ${awardCoins} monetas.`
                : `Ganas ${awardCoins} monetas para tu próxima compra.`}
            </Text>
          </Box>
        </Flex>
        {accepted ? (
          <Box p="0 35px 0 25px" mt="20px" w="100%">
            <Box className="progress-bar" pos="relative" w={["98%", "100%"]}>
              <CustomProgressBar min={0} max={requiredItems} value={progressBarValue} />
              <Img
                src={`/assets/images/icono_gana_${secondaryColor ? "2" : "1"}.png`}
                height="31px"
                pos="absolute"
                right="-15px"
                top="-10px"
              />
            </Box>
            {progressBarValue < 100 && (
              <Flex mt="12px">
                <Box>
                  <Text
                    fontSize={isDesktop ? "14px" : "10px"}
                    fontWeight="400"
                    color="rgba(255, 255, 255, .5)"
                  >
                    Lejos de ganar
                  </Text>
                </Box>
                <Spacer />
                <Box>
                  <Text
                    fontSize={isDesktop ? "14px" : "10px"}
                    fontWeight="700"
                    color="rgba(255, 255, 255, .5)"
                  >
                    GANASTE
                  </Text>
                </Box>
              </Flex>
            )}
            <Text
              fontSize="14px"
              color="#FFF"
              fontWeight="500"
              data-testid="sku-card-date"
              mt="15px"
            >
              *Válido hasta el{" "}
              {endDate?.toLocaleDateString(LANG_CODE, {
                month: "long",
                day: "numeric",
              })}
            </Text>
          </Box>
        ) : (
          <Flex justifyContent="center" alignItems="center" mt="28px">
            <Text fontSize="14px" color="#FFF" fontWeight="500" w="30%" data-testid="sku-card-date">
              *Válido hasta el{" "}
              {endDate?.toLocaleDateString(LANG_CODE, {
                month: "long",
                day: "numeric",
              })}
            </Text>
            <Button
              onClick={buttonAction}
              borderRadius="16px"
              h="56px"
              w="154px"
              backgroundColor="#FFF"
              color="#3870FF"
              _hover={{ bgColor: "none" }}
              data-testid="SKU-card-button"
              ml="10px"
            >
              Empezar reto
            </Button>
          </Flex>
        )}
      </Flex>
    </CardLayout>
  );
};
