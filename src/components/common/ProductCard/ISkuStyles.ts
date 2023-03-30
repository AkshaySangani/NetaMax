import { ReactElement } from "react";

export interface ISkuStyleTag {
  /**
   * changes the tag background color.
   * @type {string}
   **/
  background?: string;
  /**
   * changes the tag's text.
   * @type {string}
   **/
  text?: string;
  /**
   * changes the tag's text color.
   * @type {string}
   **/
  color?: string;
  /**
   * changes the tag's width.
   * @type {string}
   **/
  width?: string;
  /**
   * changes the tag's text font size.
   * @type {string}
   **/
  fontSize?: string;
}

export interface ISkuStyleButton {
  /**
   * enables/disables the product card's button.
   * @type {boolean}
   **/
  disabled?: boolean;
  /**
   * changes the product card's button text.
   * @type {string}
   **/
  text: string;
  /**
   * changes the product's card button color scheme.
   * @type {string}
   **/
  colorScheme: string;
}

export interface ISkuStyleImage {
  /**
   * changes the product card's image filter.
   * @type {string}
   **/
  filter?: string;
}

export interface ISkuStyles {
  /**
   * changes the product card's background color.
   * @type {string}
   **/
  cardBackground: string;
  /**
   * shows a badge in the product card.
   * @type {ReactElement<HTMLElement> | boolean}
   **/
  badge?: ReactElement<HTMLElement> | boolean;
  /**
   * shows and gives style to a tag in the product card.
   * @type {ISkuStyleTag}
   **/
  tag?: ISkuStyleTag;
  /**
   * gives style to the button in the product card.
   * @type {ISkuStyleButton}
   **/
  cardButton?: ISkuStyleButton;
  /**
   * shows if the product's old price in the product card.
   * @type {boolean}
   **/
  showDiscount?: boolean;
  /**
   * style to the product card image.
   * @type {ISkuStyleImage}
   **/
  image?: ISkuStyleImage;
}
