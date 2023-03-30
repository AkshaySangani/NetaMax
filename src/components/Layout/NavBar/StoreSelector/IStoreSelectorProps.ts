import { FlexProps } from "@chakra-ui/react";

export interface IStoreSelectorProps extends FlexProps {
  /**
   * The store selector.
   * @type {string}
   */
  storeName?: string;

  /**
   * Indicates if the container has padding
   * @type {boolean}
   **/
  hasPadding?: boolean;
}
