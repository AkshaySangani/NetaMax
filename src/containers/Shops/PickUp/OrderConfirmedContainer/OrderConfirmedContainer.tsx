import { useEffect, useState, ReactElement } from "react";

import { useSelector } from "react-redux";

import {
  SA_FORCE_TOKEN_VALIDATION,
  SA_ORDER_DELIVERED_PAGE,
  TrackerApp,
} from "constants/amplitudeConstants";
import { PickUpWizardSteps } from "constants/pickUpTokenConstants";
import { selectShopUser } from "dataflows/Shops/Login/LoginSelectors";
import { splitHost } from "utils/stringUtils";
import { trackEvent } from "utils/tracker";
import { IOrderConfirmedContainerProps } from "./IOrderConfirmedContainerProps";
import { OrderConfirmed } from "components/Shops/PickUp/OrderConfirmed/OrderConfirmed";

import copy from "copy-to-clipboard";

/**
 * The Pick Up Order Details Container
 * @param {IOrderConfirmedContainerProps} props The props.
 * @returns {ReactElement} The Pick Up Token Container
 */
export const OrderConfirmContainer = (props: IOrderConfirmedContainerProps): ReactElement => {
  const { onClose, onVerify, orderDetail, withToken } = props;
  const shopUser = useSelector(selectShopUser);
  const currentShop = shopUser && shopUser[0];
  const [copyText, setCopyText] = useState("Copiar liga");

  useEffect(() => {
    if (withToken) {
      trackEvent(
        SA_ORDER_DELIVERED_PAGE,
        [TrackerApp.Amplitude, TrackerApp.Segment],
        shopForTracker()
      );
    } else {
      trackEvent(
        SA_FORCE_TOKEN_VALIDATION,
        [TrackerApp.Amplitude, TrackerApp.Segment],
        shopForTracker()
      );
    }
  }, []);

  /**
   * Creates shop track object with shop info
   * @returns {object}
   **/
  const shopForTracker = () => {
    return {
      storeID: currentShop?.Id,
      storeName: currentShop?.CompanyName,
      storePhone: currentShop?.CompanyPhoneNumber,
    };
  };

  /**
   * On close panel action
   * @returns {void}
   **/
  const handleClose = () => {
    onVerify(PickUpWizardSteps.RESET_FLOW);
    onClose();
  };

  /**
   * On copy shop link
   * @returns {void}
   **/
  const handleCopy = () => {
    copy(`https://neta.mx?${splitHost(currentShop?.Hosts || "")}`);

    // Text success copy
    setCopyText("Copiado");

    // Restore text for copy button
    setTimeout(() => {
      // Try/Catch for prevent exception if component is already unmounted
      try {
        setCopyText("Copiar liga");
      } catch (e) {}
    }, 1000);
  };

  return (
    <OrderConfirmed
      handleCopy={handleCopy}
      handleClose={handleClose}
      copyText={copyText}
      currentShop={currentShop}
      orderDetail={orderDetail}
    />
  );
};
