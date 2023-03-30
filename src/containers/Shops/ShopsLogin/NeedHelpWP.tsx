import { Flex, Img, Text } from "@chakra-ui/react";
import { ReactElement, useEffect, useState } from "react";
/**
 * The Needs Help button for WhatsApp.
 * @returns {ReactElement} the component element.
 */
export const NeedHelpWP = (): ReactElement => {
  const [preTransition, setPreTransition] = useState(true);
  const sendText = "Hablar con alguien";
  const msjText = sendText.split(" ").join("%20");
  const phoneNumber = "5215545439866";
  const toWhatsApp = `https://wa.me/${phoneNumber}?text=${msjText}`;

  useEffect(() => {
    setTimeout(() => setPreTransition(false), 1000);
  }, []);

  return (
    <Flex
      alignItems="center"
      p={{ base: preTransition ? "8px 16px" : "8px", md: preTransition ? "16px 32px" : "16px" }}
      color="white"
      borderRadius={{ base: "24px", md: "40px" }}
      backgroundColor="#03D66F"
      cursor="pointer"
      onClick={() => window.open(toWhatsApp, "_blank")}
      transitionDuration="0.7s"
      width={{ base: preTransition ? "200px" : "40px", md: preTransition ? "250px" : "64px" }}
      position={{ md: "fixed", base: "relative" }}
      bottom={{ base: "0", md: "24px" }}
      right={{ base: "0", md: "56px" }}
    >
      <Img src="/assets/images/whatsapp-logo.png" width={{ base: "24px", md: "32px" }} />
      {preTransition && <Text marginLeft="8px">¿Necesitas ayuda?</Text>}
    </Flex>
  );
};
