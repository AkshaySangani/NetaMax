import React, { useRef } from "react";
import { screenSizes } from "styled/screen";
import { useMediaQuery, Box, Container, Img, Flex, Button, Text } from "@chakra-ui/react";
import { INavBarShopsProps } from "./INavBarShopsProps";
import { IPageNavBarDesktopProps } from "./IPageNavBarDesktopProps";
import { useRouter } from "next/router";
import { trackEvent } from "utils/tracker";
import { SA_COPIARLIGA_CLICKED, SA_AYUDA_CLICKED, TrackerApp } from "constants/amplitudeConstants";

/**
 * The NavBar component.
 * @param {INavBarShopsProps} props The component props
 * @returns {React.ReactElement} The NavBar component
 */
export const NavBarShops = (props: INavBarShopsProps): React.ReactElement => {
  const [isDesktop] = useMediaQuery(`(min-width: ${screenSizes.mdMin}px)`);
  const sendText = "Hablar con alguien";
  const msjText = sendText.split(" ").join("%20");
  const phoneNumber = "5215545439866";
  const toWhatsApp = `https://wa.me/${phoneNumber}?text=${msjText}`;

  return (
    <Box
      sx={{ position: "sticky", top: "0" }}
      zIndex={3}
      backdropFilter="saturate(200%) blur(5px)"
      backgroundColor="rgba(255,255, 255, 1)"
      maxH={["53px", "56px"]}
    >
      <Container maxW={["container.xl", "unset"]}>
        {isDesktop ? (
          <PageNavBarDesktop {...props} wspUrl={toWhatsApp} />
        ) : (
          <PageNavBarMobile {...props} wspUrl={toWhatsApp} />
        )}
      </Container>
    </Box>
  );
};

/**
 * The NavBar shops component.
 * @param {IPageNavBarDesktopProps} props The component props
 * @returns {React.ReactElement} The NavBar shops component
 */
const PageNavBarMobile = (props: IPageNavBarDesktopProps): React.ReactElement => {
  const { wspUrl } = props;
  const router = useRouter();

  return (
    <Flex
      direction="row"
      justify="space-between"
      align="center"
      w="100%"
      p="13px 0"
      h="100%"
      maxH={["53px", "56px"]}
    >
      <Box flexDirection="column" onClick={() => router.push("/")}>
        <Img src="/assets/images/logo.png" alt="Neta logo" w={["50px", "80px"]} h="auto" />
      </Box>
      <Box flexDirection="column" onClick={() => window.open(wspUrl, "_blank")}>
        <Img src="/assets/images/misVentas/AyudaMobile.svg" alt="ayuda-logo" />
      </Box>
    </Flex>
  );
};

/**
 * The NavBar shops component.
 * @param {IPageNavBarDesktopProps} props The component props
 * @returns {React.ReactElement} The NavBar shops component
 */
const PageNavBarDesktop = (props: IPageNavBarDesktopProps): React.ReactElement => {
  const { shopUser, wspUrl } = props;
  const currentShop = shopUser && shopUser[0];
  const copyText = useRef<HTMLHeadingElement>(null);
  const shortStoreName = currentShop?.Hosts.split(".")[0];
  const router = useRouter();
  /**
   * Adds to clipboard.
   * @type {Function}
   * @returns {promise} The clipboard.
   */
  function handleCopyText() {
    trackEvent(SA_COPIARLIGA_CLICKED, [TrackerApp.Amplitude, TrackerApp.Segment], {
      storeUrl: currentShop?.Url,
    });
    if (copyText && copyText.current !== null) {
      const toCopy = copyText.current.innerText;
      // navigator clipboard api needs a secure context (https)
      if (navigator.clipboard && window.isSecureContext) {
        // navigator clipboard api method'
        return navigator.clipboard.writeText(toCopy);
      } else {
        // text area method
        const textArea = document.createElement("textarea");
        textArea.value = toCopy;
        // make the textarea out of viewport
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        return new Promise<void>((res, rej) => {
          // here the magic happens
          document.execCommand("copy") ? res() : rej();
          textArea.remove();
        });
      }
    } else {
      return Promise.resolve();
    }
  }

  return (
    <Flex
      direction="row"
      justify="space-between"
      align="center"
      w="100%"
      p="13px"
      h="100%"
      maxH={["53px", "56px"]}
    >
      <Box flexDirection="column" cursor="pointer" onClick={() => router.push("/")}>
        <Img src="/assets/images/logo.png" alt="Neta logo" w={["50px", "80px"]} h="auto" />
      </Box>
      <Box flexDirection="column">
        <Flex
          direction="row"
          justify="space-between"
          aling="center"
          minW="350px"
          w="auto"
          h="40px"
          p="4px 4px 4px 16px"
          bg="#F7F6F8"
          borderRadius="24px"
        >
          <Flex
            fontStyle="normal"
            fontWeight="600"
            fontSize="14px"
            align="center"
            mr="9px"
            ref={copyText}
          >
            www.neta.mx/?store={shortStoreName}
          </Flex>
          <Button
            w=" 110px"
            h="32px"
            bgColor="transparent"
            border="1px solid #353535"
            boxSizing="border-box"
            borderRadius="48px"
            fontWeight="600"
            fontSize="14px"
            color="#353535"
            cursor="pointer"
            onClick={() => handleCopyText()}
          >
            Copiar liga
          </Button>
        </Flex>
      </Box>
      <Flex direction="row" wrap="nowrap" justify="space-around" align="center">
        <Img src="/assets/images/misVentas/ShopIcon.svg" alt="Shop-icon" />
        <Text fontWeight="500" fontSize="18px" color="#5F5F5F" ml="10px">
          Tienda de {currentShop?.Name.slice(0, 20)}
        </Text>
      </Flex>
      <Box
        position="absolute"
        right="1rem"
        top="4rem"
        onClick={() => window.open(wspUrl, "_blank")}
        style={{ cursor: "pointer" }}
      >
        <Flex align="flex-start" justify="space-around">
          <Flex w="70%" direction="column" align="center">
            <Text fontWeight="600" fontSize="18px" w="100%" textAling="right">
              ¿Necesitas ayuda?
            </Text>
            <Text fontWeight="500" fontSize="18px" w="100%" textAling="right">
              Presiona el botón de ayuda
            </Text>
          </Flex>
          <Flex
            w="30%"
            align="center"
            justify="flex-end"
            onClick={() => trackEvent(SA_AYUDA_CLICKED, [TrackerApp.Amplitude, TrackerApp.Segment])}
          >
            <Img src="/assets/images/misVentas/AyudaMobile.svg" alt="ayuda-logo" />
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};
