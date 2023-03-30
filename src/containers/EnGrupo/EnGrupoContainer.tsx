import React, { ReactElement } from "react";

import AccordionComponent from "components/EnGrupo/AccordionComponent/AccordionComponent";
import { IAccordionItemComponentProps } from "components/EnGrupo/AccordionComponent/IAccordionComponentProps";

import { Container } from "@chakra-ui/react";

import { Items } from "./items";

/**
 * The EnGrupoContainer component.
 * @returns {ReactElement} the component element.
 */
export const EnGrupoContainer = (): ReactElement => {
  const [items, setItems] = React.useState(Items);

  /**
   * The handlePaginationForCategory.
   * @param {number} categoryIndex of category
   * @param {number} page of category
   * @returns {void} the component element.
   */
  const handlePaginationForCategory = (categoryIndex: number, page: number): void => {
    const getCategory: IAccordionItemComponentProps | undefined = Items[categoryIndex];
    if (getCategory) {
      getCategory.page = page;
      const newItems = [...Items];
      newItems.splice(categoryIndex, 1, getCategory);
      setItems(newItems);
    }
  };

  return (
    <Container maxW="container.xl">
      <AccordionComponent items={items} onChangePagination={handlePaginationForCategory} />
    </Container>
  );
};
