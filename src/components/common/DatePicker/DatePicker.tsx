import { ReactElement } from "react";

import { SingleDatepicker } from "chakra-dayzed-datepicker";
import IconDate from "styled/icons/Shops/Menu/Date";

import { Flex } from "@chakra-ui/react";

import { IDatePickerProps } from "./IDatePickerProps";

/**
 * DatePicker component
 * @param {IDatePickerProps} props component props
 * @return {ReactElement} The Component
 */
export const DatePicker = (props: IDatePickerProps): ReactElement => {
  const { onDateChange, currentDate } = props;
  const MONTH_NAMES_DEFAULT = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const DAYS_NAMES_DEFAULT = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];

  const configs = {
    dateFormat: "dd / MM / yyyy",
    monthNames: MONTH_NAMES_DEFAULT,
    dayNames: DAYS_NAMES_DEFAULT,
  };

  return (
    <Flex direction="row" justifyContent="space-between">
      <Flex
        mr={["1", "2"]}
        mt={["2", "0"]}
        borderRadius="10px"
        h={["40px", "46px"]}
        w={["320px", "405px"]}
      >
        <SingleDatepicker
          name="date-input"
          date={currentDate}
          onDateChange={onDateChange}
          configs={configs}
        />
      </Flex>
      <Flex pt={[4, 2]}>
        <IconDate />
      </Flex>
    </Flex>
  );
};
