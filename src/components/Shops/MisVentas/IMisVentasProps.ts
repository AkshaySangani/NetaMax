import { IOrderShops } from "dataflows/Shops/IOrderShops";
import { ISummaryProps } from "../Summary/ISummaryProps";
import { IModalInvoice } from "dataflows/Shops/IModalInvoice";

export interface IMisVentasProps {
  /**
   * The customer's orders.
   * @type {IOrderShops[]}
   */
  orders?: IOrderShops[];
  /**
   * The client summary
   * @type {ISummaryProps}
   */
  summary: ISummaryProps;
  /**
   * The Url Link
   * @type {String}
   * */
  shopUrl: string;
  /**
   * The shopName
   * @type {String}
   * */
  shopName?: string;
  /**
   * callback when Ver Detalle button clicked
   * @type {void}
   *
   * */
  onOrderDetailsClick: (order: IOrderShops) => void;
  /**
   * callback when Contactar Cliente button clicked
   * @type {void}
   *
   * */
  onContactarCliente: (order: IOrderShops) => void;
  /**
   * callback when Ver Compartir Liga clicked
   * @type {void}
   *
   * */
  onClickCompartirLiga: () => void;
  /**
   * callback when Rastrear button clicked
   * @type {void}
   *
   * */
  handleOnTrackClick: () => void;
  /**
   * callback when Factura button clicked
   * @type {void}
   *
   * */
  handleOnInvoiceClick: () => void;
  /**
   * function to open the ModalInvoice
   * @type {void}
   *
   * */
  onOpen: () => void;
  /**
   * function to close the ModalInvoice
   * @type {void}
   *
   * */
  onClose: () => void;
  /**
   * indicate if Modal is open
   * @type {boolean}
   *
   * */
  isOpenModal: boolean;
  /**
   * Payload of getModalInvoice()
   * @type {IModalInvoice}
   *
   * */
  modalInvoice?: IModalInvoice;
}
