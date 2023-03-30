import React, { useMemo, ReactElement } from "react";

import { Box, Container, Text } from "@chakra-ui/layout";
import { SimpleGrid } from "@chakra-ui/react";

import { IGridSectionProps } from "./IGridSectionProps";

/**
 * Product grid offers section
 * @param {IProductGridSection} props the props of the component
 * @returns {ReactElement} the component.
 */
export const GridSection = (props: IGridSectionProps): ReactElement => {
  const { title, elements } = props;
  const columns = useMemo(() => {
    const count = elements.length;
    return {
      base: Math.min(2, count),
      md: Math.min(3, count),
      lg: Math.min(4, count),
      xl: Math.min(5, count),
    };
  }, [elements]);

  return (
    <Container maxW="container.xl">
      <Box pt={7}>
        <Box pb={5}>
          <Text fontSize="30px" fontWeight={700}>
            {title}
          </Text>
        </Box>
        <Box>
          <SimpleGrid
            columns={columns}
            columnGap={{ base: "4", md: "6" }}
            rowGap={{ base: "8", md: "10" }}
          >
            {elements}
          </SimpleGrid>
        </Box>
      </Box>
    </Container>
  );
};
