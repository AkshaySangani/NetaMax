import React, { ReactElement } from "react";

import { Box, Image } from "@chakra-ui/react";

import { ICategoryCardProps } from "./ICategoryCardProps";

/**
 * The CategoryBox component.
 * @param {ICategoryCardProps} props the component props.
 * @returns {ReactElement} the category card component.
 */
export const CategoryCard = (props: ICategoryCardProps): ReactElement => {
  const { category, onCategoryClick } = props;

  return (
    <Box maxW="sm" height="100%" overflow="hidden">
      <Image
        src={category.seoFilename}
        draggable="false"
        alt={category.name}
        height="100%"
        minW={{ base: 159, md: "160px" }}
        onClick={() => onCategoryClick(category)}
        fallbackSrc="/assets/images/noimg.png"
      />
    </Box>
  );
};
