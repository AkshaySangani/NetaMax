import { ReactElement } from "react";

import { BiCheck } from "react-icons/bi";

import { MisComprasStatus } from "constants/misComprasConstants";
import IconAlistando from "styled/icons/MisCompras/Alistando";
import IconTiendita from "styled/icons/MisCompras/Tiendita";
import IconTienditaDisabled from "styled/icons/MisCompras/TienditaDisabled";
import IconTruck from "styled/icons/MisCompras/Truck";
import TruckDisabled from "styled/icons/MisCompras/TruckDisabled";

import {
  Box,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
} from "@chakra-ui/react";

import { IOrderStatusProps } from "./IOrderStatus";

/**
 * The order status component.
 * @param {IOrderStatusProps} props the Order Status props
 * @returns { ReactElement } The order status component
 */
export const OrderStatus = (props: IOrderStatusProps): ReactElement => {
  const { status } = props;

  /**
   *
   * @returns {jsx} TitleStatus
   */
  const renderTitleStatus = () => {
    switch (status) {
      case MisComprasStatus.PENDING:
        return (
          <Text fontWeight="bold" data-testid="order-header" color="#04A940">
            Estamos alistando tu pedido:
          </Text>
        );
      case MisComprasStatus.PROCESSING:
        return (
          <Text fontWeight="bold" data-testid="order-header" color="#04A940">
            Pedido en camino a tu tiendita:
          </Text>
        );

      case MisComprasStatus.COMPLETE:
        return (
          <Text fontWeight="bold" data-testid="order-header" color="#04A940">
            Pedido entregado a la tiendita:
          </Text>
        );

      case MisComprasStatus.CANCELLED:
        return (
          <Text color="red.400" fontWeight="bold" fontSize="14px">
            Pedido cancelado
          </Text>
        );

      case MisComprasStatus.REPROGRAMMED:
        return (
          <Text color="red.400" fontWeight="bold" fontSize="14px">
            Pedido reprogramado
          </Text>
        );
      default:
        return null;
    }
  };

  /**
   *
   * @returns {jsx} OrderStatus
   */
  const renderOrderStatus = () => {
    switch (status) {
      case MisComprasStatus.PENDING:
        return (
          <Box mt="4" pl="12" pr="12">
            <RangeSlider defaultValue={[0, 50, 100]} isReadOnly>
              <RangeSliderTrack>
                <RangeSliderFilledTrack bg="#B6B6B6" />
              </RangeSliderTrack>
              <RangeSliderThumb
                boxSize={8}
                index={0}
                bg="white"
                border="2px"
                borderColor="green.400"
              >
                <Box as={IconAlistando} color="white" w="100%" h="100%" />
              </RangeSliderThumb>
              <RangeSliderThumb
                boxSize={8}
                index={1}
                bg="#fffce4"
                border="2px"
                borderColor="#8A8A8A"
              >
                <Box as={TruckDisabled} />
              </RangeSliderThumb>
              <RangeSliderThumb
                boxSize={8}
                index={2}
                bg="#fffce4"
                border="2px"
                borderColor="#8A8A8A"
              >
                <Box as={IconTienditaDisabled} />
              </RangeSliderThumb>
            </RangeSlider>
          </Box>
        );
      case MisComprasStatus.PROCESSING:
        return (
          <Box mt="4" pl="12" pr="12">
            <RangeSlider defaultValue={[0, 50, 100]} isReadOnly>
              <RangeSliderTrack>
                <RangeSliderFilledTrack bg="green.400" w="50% !important" />
              </RangeSliderTrack>
              <RangeSliderThumb boxSize={8} index={0} bg="green.400">
                <Box as={BiCheck} color="white" w="100%" h="100%" />
              </RangeSliderThumb>
              <RangeSliderThumb
                boxSize={8}
                index={1}
                bg="#fffce4"
                border="2px"
                borderColor="green.400"
              >
                <Box as={IconTruck} />
              </RangeSliderThumb>
              <RangeSliderThumb
                boxSize={8}
                index={2}
                bg="#fffce4"
                border="2px"
                borderColor="#8A8A8A"
              >
                <Box as={IconTienditaDisabled} />
              </RangeSliderThumb>
            </RangeSlider>
          </Box>
        );

      case MisComprasStatus.COMPLETE:
        return (
          <Box mt="4" pl="12" pr="12">
            <RangeSlider defaultValue={[0, 50, 100]} isReadOnly>
              <RangeSliderTrack>
                <RangeSliderFilledTrack bg="green.400" />
              </RangeSliderTrack>
              <RangeSliderThumb boxSize={8} index={0} bg="green.400">
                <Box as={BiCheck} color="white" w="100%" h="100%" />
              </RangeSliderThumb>
              <RangeSliderThumb boxSize={8} index={1} bg="green.400">
                <Box as={BiCheck} color="white" w="100%" h="100%" />
              </RangeSliderThumb>
              <RangeSliderThumb
                boxSize={8}
                index={2}
                bg="#fffce4"
                border="2px"
                borderColor="green.400"
              >
                <Box as={IconTiendita} />
              </RangeSliderThumb>
            </RangeSlider>
          </Box>
        );

      default:
        return null;
    }
  };

  return (
    <Box pt="4" pb="4">
      <Box pl="4">
        <Text fontWeight="bold" data-testid="order-header" color="#000">
          Estado del pedido
        </Text>
        {renderTitleStatus()}
      </Box>

      {renderOrderStatus()}
    </Box>
  );
};
