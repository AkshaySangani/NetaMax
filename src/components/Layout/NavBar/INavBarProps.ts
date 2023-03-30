import { ICustomer } from "dataflows/Auth/ICustomer";
import { ICoins } from "dataflows/GanaDinero/ICoins";
import { IPopup } from "dataflows/Popup/IPopup";
import { IProduct } from "dataflows/Product/IProduct";
import { IStore } from "dataflows/Stores/IStore";

export interface INavBarProps {
  /**
   * Indicates if is home
   * @type {boolean}
   **/
  isHome: boolean;

  /**
   * The store props
   * @type {IStore}
   **/
  store?: IStore;

  /**
   * The popup props
   * @type {IPopup}
   **/
  popup?: IPopup;

  /**
   * This prop indicates when the infoHeader need to be shown
   * @type {boolean}
   **/
  showInfoHeader?: boolean;

  /**
   * The search input value
   * @type {string | undefined}
   **/
  searchInputValue?: string;

  /**
   * Indicates if the search products are loading
   * @type {boolean}
   **/
  isLoadingSearchProduct: boolean;

  /**
   * The searched products
   * @type {IProduct[]}
   **/
  productSearch?: IProduct[];

  /**
   * The empty search message
   * @type {string}
   */
  emptySearchMessage: string;

  /**
   * Indicates if the search has more products
   * @type {boolean}
   **/
  hasMoreProducts: boolean;

  /**
   * The total number of products in basket
   * @type {number}
   **/
  totalBasketItems: number;

  /**
   * Netawallet coins
   * @type {ICoins}
   **/
  coins?: ICoins;

  /**
   * The search input change event handler
   * @type {(event?: React.ChangeEvent<HTMLInputElement>) => void}
   **/
  onSearchInputChange: (event?: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * The add to basket event handler
   * @type {(product: IProduct) => void}
   **/
  onAddToBasketClick: (product: IProduct) => void;

  /**
   * The remove from basket event handler
   * @type {(product: IProduct) => void}
   **/
  onRemoveFromBasketClick: (product: IProduct) => void;

  /**
   * Gets the quantity of the product.
   * @type {(product: IProduct) => number}
   */
  getQtyInBasket: (product: IProduct) => number;

  /**
   * Action to go back
   * @type {() => void}
   **/
  goBack: () => void;

  /**
   * Clears the searched products.
   */
  clearSearch: () => void;

  /**
   * Handles "Ver más" click
   * @type {() => void}
   **/
  handleSearchProducts: () => void;

  /**
   * On open cart event handler
   * @type {() => void}
   */
  onOpen: () => void;
  /**
   * customer data
   * @type {ICustomer}
   */
  customer?: ICustomer;
}
