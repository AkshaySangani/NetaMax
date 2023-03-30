export interface ITrackingURL {
  trackingId: string;
  invoiceId: string;
}

export interface ITrackingState {
  /**
   * Tracking urls
   * @type {IInvoice}
   */
  trackingUrl: ITrackingURL[];

  /**
   * lastOrderTrackingUrl
   * @type {string}
   */
  lastTrackingUrl: string;

  /**
   * Is Loading tracking url
   * @type {boolean}
   */
  loading: boolean;
}
