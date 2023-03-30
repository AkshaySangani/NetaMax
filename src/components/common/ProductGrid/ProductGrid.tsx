import React, { useMemo, ReactElement } from "react";

import { SimpleGrid } from "@chakra-ui/layout";

import { ProductCard } from "../ProductCard";
import { IProductGridProps } from "./IProductGridProps";

/**
 * The ProductGrid component.
 * @param {IProductGridProps} props the props for the component.
 * @returns {ReactElement} the rendered component.
 */
export const ProductGrid = (props: IProductGridProps): ReactElement => {
  const { products, onProductClick, addToCart, removeFromCart, getQtyOnCart } = props;
  const columns = useMemo(() => {
    const count = products.length;
    return {
      base: Math.min(2, count),
      md: Math.min(3, count),
      lg: Math.min(4, count),
      xl: Math.min(5, count),
    };
  }, [products]);

  return (
    <SimpleGrid
      columns={columns}
      columnGap={{ base: "4", md: "6" }}
      rowGap={{ base: "8", md: "10" }}
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          qtyOnBasket={getQtyOnCart(product)}
          addToCart={() => addToCart(product)}
          removeFromCart={() => removeFromCart(product)}
          onProductClick={() => onProductClick(product)}
        />
      ))}
    </SimpleGrid>
  );
};
