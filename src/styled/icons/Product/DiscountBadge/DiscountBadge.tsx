import { ReactElement } from "react";

import { Box, Text } from "@chakra-ui/react";

import DiscountBadgeBackground from "./DiscountBadgeBackground";

interface IDiscountBadgeProps {
  discount: string;
  top: string;
  left: string;
  fontSize: string;
  BgHeight?: string;
  BgWidth?: string;
}

/**
 * The badge for the item that have discount.
 * @param {IDiscountBadgeProps} props the discount percentage
 * @returns {ReactElement} The badge.
 */
export default function DiscountBadge(props: IDiscountBadgeProps): ReactElement {
  const { discount, top, left, fontSize, BgHeight = "40", BgWidth = "40" } = props;
  return (
    <Box display="flex" data-testid="discount-badge">
      <DiscountBadgeBackground height={BgHeight} width={BgWidth} />
      <Text
        position="absolute"
        color="#FFFAFA"
        transform="rotate(-8.38deg)"
        fontWeight="700"
        top={top}
        left={parseInt(discount) < 10 ? `${parseInt(left) + 8}px` : `${left}px`}
        fontSize={fontSize}
        data-testid="discount-badge-text"
      >
        {`${props.discount}%`}
      </Text>
    </Box>
  );
}
