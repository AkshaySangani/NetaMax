import React, { ReactElement } from "react";

import ArrowBottomBorder from "styled/icons/ArrowBottomBorder";
import ArrowTopBorder from "styled/icons/ArrowTopBorder";

import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from "@chakra-ui/react";

import PaginationComponent from "../PaginationComponent/PaginationComponent";
import { IAccordionComponentProps } from "./IAccordionComponentProps";

/**
 * The AccordionComponent component.
 * @param {IAccordionComponentProps} props the component props.
 * @returns {ReactElement} the component element.
 */
const AccordionComponent = (props: IAccordionComponentProps): ReactElement => {
  const { items, onChangePagination } = props;
  const [expanded, setExpanded] = React.useState<number>();

  /**
   * The handleChangeAccordion.
   * @param {Array<number>} index the component props.
   * @returns {void} the component element.
   */
  const handleChangeAccordion = (index: number): void => {
    setExpanded(index);
  };

  return (
    <Accordion allowToggle onChange={handleChangeAccordion}>
      {items.map((item, indexCategory) => {
        return (
          <AccordionItem key={indexCategory} borderTop={0} borderBottom="1px solid #E4E4E4">
            <AccordionButton padding="1rem 0">
              <Box
                flex="1"
                textAlign="left"
                fontWeight="bold"
                fontSize={24}
                lineHeight="30.72px"
                color="#242424"
              >
                {item.title}
              </Box>
              <Text fontSize={16} fontWeight={600} marginRight="1rem" textColor="#F04D4B">
                {expanded === indexCategory ? "Ocultar" : "Ver"}
              </Text>
              {expanded === indexCategory ? <ArrowTopBorder /> : <ArrowBottomBorder />}
            </AccordionButton>
            <AccordionPanel padding={0}>
              {item.products.map((item, index) => {
                return <Box key={index}>{item.name}</Box>;
              })}
              {item.totalPage > 1 && (
                <PaginationComponent
                  page={item.page}
                  totalPage={item.totalPage}
                  onChangePage={(page) => onChangePagination(indexCategory, page)}
                />
              )}
            </AccordionPanel>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default AccordionComponent;
