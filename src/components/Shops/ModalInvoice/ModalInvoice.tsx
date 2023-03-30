import React, { ReactElement } from "react";
import { screenSizes } from "styled/screen";
import { MisCuentas } from "./MisCuentas";
import { Steps } from "./Steps";
import { Valores } from "./Valores";
import { List } from "./ListModalInvoice";
import { Ganancias } from "./Ganancias";
import {
  SA_VOLVER_BUTTON_CLICKED,
  SA_DESCARGAR_BUTTON_CLICKED,
  TrackerApp,
} from "constants/amplitudeConstants";
import { trackEvent } from "utils/tracker";

import {
  useMediaQuery,
  Center,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Button,
  Stack,
  Link,
} from "@chakra-ui/react";
import { IModalInvoiceProps } from "./IModalInvoiceProps";
/**
 * Modal in Summary component
 * @param {IModalInvoiceProps} props Shops Menu props
 * @returns {ReactElement} The menu container
 */
export const ModalInvoice = ({
  isOpenModal,
  onClose,
  onOpen,
  invoice,
  credit,
  metadata,
  orderItems,
  storeProfit,
  modalInvoice,
}: IModalInvoiceProps): ReactElement => {
  const [isDesktop] = useMediaQuery(`(min-width: ${screenSizes.mdMin}px)`);

  return (
    modalInvoice && (
      <Center>
        <Modal
          isOpen={isOpenModal}
          onClose={onClose}
          size={isDesktop ? "4xl" : "md"}
          scrollBehavior="inside"
        >
          <ModalOverlay />
          <ModalContent maxH="100%" ml="2%" mr="2%" pt="0" rounded="lg" gap="1.5rem">
            <ModalCloseButton fontSize="13px" background="transparent" />
            <ModalBody w="100%" gap="1.5rem" p="0" rounded="inherit" borderColor="#C9C9C9">
              <MisCuentas
                invoice={invoice}
                credit={credit}
                metadata={metadata}
                orderItems={orderItems}
                storeProfit={storeProfit}
                modalInvoice={modalInvoice}
                onOpen={onOpen}
                onClose={onClose}
                isOpenModal={isOpenModal}
              />
              <Ganancias
                invoice={invoice}
                credit={credit}
                metadata={metadata}
                orderItems={orderItems}
                storeProfit={storeProfit}
                modalInvoice={modalInvoice}
                onOpen={onOpen}
                onClose={onClose}
                isOpenModal={isOpenModal}
              />
              <Steps />
              <Valores
                invoice={invoice}
                credit={credit}
                metadata={metadata}
                orderItems={orderItems}
                storeProfit={storeProfit}
                modalInvoice={modalInvoice}
                onOpen={onOpen}
                onClose={onClose}
                isOpenModal={isOpenModal}
              />
              <List
                invoice={invoice}
                credit={credit}
                metadata={metadata}
                orderItems={orderItems}
                storeProfit={storeProfit}
                modalInvoice={modalInvoice}
                onOpen={onOpen}
                onClose={onClose}
                isOpenModal={isOpenModal}
              />
              <Stack
                w={["100%", "90%"]}
                justify={["center", "flex-end"]}
                direction="row"
                spacing={8}
                align="center"
                pt="5"
                pb="40"
                mr="auto"
                ml="auto"
              >
                <Button
                  colorScheme="#002F7A"
                  variant="outline"
                  borderWidth="2px"
                  borderColor="#D5D5D5"
                  borderRadius="99px"
                  pl="10"
                  pr="10"
                  onClick={() => {
                    onClose();
                    trackEvent(SA_VOLVER_BUTTON_CLICKED, [
                      TrackerApp.Amplitude,
                      TrackerApp.Segment,
                    ]);
                  }}
                >
                  Volver
                </Button>
                <Link
                  href={invoice.pdfUrl === "" ? undefined : invoice.pdfUrl}
                  target="_blank"
                  data-testid="Factura link"
                  _hover={{
                    textDecoration: "none",
                    cursor: invoice.pdfUrl === "" ? "default" : "pointer",
                  }}
                >
                  <Button
                    colorScheme="#002F7A"
                    variant="outline"
                    borderWidth="2px"
                    borderColor="#D5D5D5"
                    borderRadius="99px"
                    pl="10"
                    pr="10"
                    onClick={() =>
                      trackEvent(SA_DESCARGAR_BUTTON_CLICKED, [
                        TrackerApp.Amplitude,
                        TrackerApp.Segment,
                      ])
                    }
                  >
                    Descargar
                  </Button>
                </Link>
              </Stack>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Center>
    )
  );
};
