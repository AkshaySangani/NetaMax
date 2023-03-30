import { useEffect, ReactElement } from "react";

import { SA_TOKEN_REDEEMED, TrackerApp } from "constants/amplitudeConstants";
import { trackEvent } from "utils/tracker";

import { IOrderDetailsContainerProps } from "./IOrderDetailsContainerProps";
import { OrderDetails } from "components/Shops/PickUp/OrderDetails/OrderDetails";

/**
 * The Pick Up Order Details Container
 * @param {IOrderDetailsContainerProps} props The props.
 * @returns {ReactElement} The Pick Up Order Details Container
 */
export const OrderDetailsContainer = (props: IOrderDetailsContainerProps): ReactElement => {
  const { onVerify, orderDetail, currentShop } = props;

  useEffect(() => {
    trackEvent(SA_TOKEN_REDEEMED, [TrackerApp.Amplitude, TrackerApp.Segment], {
      storeID: currentShop?.Id,
      storeName: currentShop?.CompanyName,
      storePhone: currentShop?.CompanyPhoneNumber,
    });
  }, []);

  return <OrderDetails orderDetail={orderDetail} onVerify={onVerify} />;
};
