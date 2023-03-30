import { ReactElement } from "react";

import { Box, Text } from "@chakra-ui/react";

import { IPaginationComponentProps } from "./IPaginationComponentProps";

/**
 * The PaginationComponent component.
 * @param {IPaginationComponentProps} props the component props.
 * @returns {ReactElement} the component element.
 */
const PaginationComponent = (props: IPaginationComponentProps): ReactElement => {
  const { page, totalPage, onChangePage } = props;
  const totalPageList = Array.from({ length: totalPage }, (_, i) => i + 1);

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      padding="1rem"
    >
      {totalPageList.map((pageItem, index) => {
        const pageItemActive = pageItem === page;

        const itemPaginationActive = pageItemActive
          ? {
              backgroundColor: "#353535",
              borderRadius: "50%",
            }
          : {};
        const textPaginationActive = pageItemActive
          ? {
              textColor: "#FFFFFF",
            }
          : {};

        return (
          <Box
            key={index}
            width={35}
            height={35}
            margin="0 0.5rem"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            cursor="pointer"
            {...itemPaginationActive}
            onClick={() => onChangePage(pageItem)}
          >
            <Text textColor="#242424" fontWeight={600} fontSize={16} {...textPaginationActive}>
              {pageItem}
            </Text>
          </Box>
        );
      })}
    </Box>
  );
};

export default PaginationComponent;
