export interface IAdminOrderShops {
  /**
   * id product
   * @type {number}
   * */
  id: number;
  /**
   * order's orderId
   * @type {string}
   * */
  orderId: string;
  /**
   * product name
   * @type {string}
   * */
  name: string;
  /**
   * product price
   * @type {string}
   * */
  price: string;
  /**
   * qty's product
   * @type {number}
   * */
  qty: number;
  /**
   * image product
   * @type {string | null}
   * */
  image: string | null;
  /**
   * image Format
   * @type {string | null}
   * */
  imageFormat: string | null;
  /**
   * Order Customer Phone
   * @type {String}
   *
   * */
  phone: string;
  /**
   * Order's subtotal
   * @type {Number}
   *
   * */
  subtotal: number;
  /**
   * Order's discount
   * @type {Number}
   *
   * */
  discount: number;
  /**
   * Picked up date
   * @type {string}
   *
   * */
  pickedUpDateAt?: string;
}
