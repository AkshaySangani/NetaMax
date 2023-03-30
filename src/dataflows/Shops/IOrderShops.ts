export interface IOrderShops {
  /**
   * order's id
   * @type {string}
   *
   * */
  id: string;
  /**
   * order's orderId
   * @type {string}
   *
   * */
  orderId?: string;
  /**
   * Order's status
   * @type {string}
   *
   * */
  orderStatusId: string;
  /**
   * Order's status name
   * @type {string}
   *
   * */
  shippingStatusId: string;
  /**
   * Order's ETA
   * @type {String}
   *
   * */
  currentETA: string;
  /**
   * Order's creation date
   * @type {String}
   *
   * */
  createdOnUtc: string;
  /**
   * Order's total amount
   * @type {Number}
   *
   * */
  orderTotal: number | string;
  /**
   * Order's creation date
   * @type {String}
   *
   * */
  storeName: string;
  /**
   * Order's products
   * @type {Number}
   *
   * */
  qtyItems: number;
  /**
   * Order's creation date
   * @type {String}
   *
   * */
  customerName: string;
  /**
   * Order's phoneNumber date
   * @type {String}
   *
   * */
  phoneNumber: string;
  /**
   * Picked up date
   * @type {string}
   *
   * */
  pickedUpDateAt?: string;
  /**
   * Callback to be executed when the user clicks on the order details
   * @type {() => void}
   */
  onOrderDetailsClick: (order: IOrderShops) => void;

  /**
   * onContactarCliente action
   * @type {void}
   *
   * */
  onContactarCliente: (order: IOrderShops) => void;
  /**
   * customer Pickup Date At
   * @type {string}
   *
   * */
  customerPickupDateAt: string;
}
