import React, { useEffect, useRef, useState, ReactElement } from "react";

import { BsXLg } from "react-icons/bs";
import { FaChevronLeft } from "react-icons/fa";
import { Step, Steps, Wizard } from "react-multistep-wizard";
import { useDispatch, useSelector } from "react-redux";

import { Loader } from "components/common/Loader";
import { TermsAndConditionsText } from "components/common/TermsAndConditions/TermsAndConditionsText";
import { OrderSummary } from "components/Layout/Checkout/OrderSummary/OrderSummary";
import { LOGIN_COMPLETED, ORDER_COMPLETED, TrackerApp } from "constants/amplitudeConstants";
import { PLATFORM_OTP_LOGIN } from "constants/authConstants";
import {
  loginCheckoutWizardSteps,
  CheckoutWizardSteps,
  COUNTDOWN_TIMER_SECONDS,
  INVALID_CUSTOMER_MESSAGE,
  MIS_COMPRAS_ROUTE,
  OrderStatus,
  SHARE_DISCOUNT_CODE_TEMPLATE,
} from "constants/checkoutConstants";
import {
  selectCustomer,
  selectDeviceId,
  selectErrorMessage,
  selectIsLoadingLogIn,
  selectIsLoggedIn,
  selectIsSendingOtpCode,
  selectSuccessValidationOtp,
} from "dataflows/Auth/AuthSelectors";
import { clearIsOtpSent, setIsNewUserToFalse } from "dataflows/Auth/AuthSlice";
import {
  acquireToken,
  getCustomerInfo,
  postSendZipCode,
  sendOtpCodeCore as sendOtpCodeAction,
  validateOtpCode as validateOtpCodeAction,
} from "dataflows/Auth/AuthThunks";
import {
  selectBasketItems,
  selectTotalBasketPrice,
  selectTotalDiscountPrice,
} from "dataflows/Basket/BasketSelectors";
import { addQuantity, clearBasket, removeQuantity } from "dataflows/Basket/BasketSlice";
import {
  selectCountDown,
  selectCurrentStep,
  selectIsOpen,
  selectOrderStatus,
  selectPlaceOrderErrorMessage,
  selectPlacingOrderStatus,
} from "dataflows/Checkout/CheckoutSelectors";
import {
  clearPlaceOrderErrorMessage,
  moveToNextStep,
  moveToPreviousStep,
  onClose as onCloseAction,
  resetCountDown as resetCountDownAction,
  setCountDown as setCountDownAction,
  setCurrentStep,
} from "dataflows/Checkout/CheckoutSlice";
import { postPlaceOrder } from "dataflows/Checkout/CheckoutThunks";
import { ICouponCodeFormValues } from "dataflows/Checkout/CouponCode/ICouponCodeFormValues";
import { ICheckoutFormValues } from "dataflows/Checkout/ICheckoutFormValues";
import { ICheckoutOrder } from "dataflows/Checkout/ICheckoutOrder";
import { ICoupon } from "dataflows/Checkout/ICoupon";
import { INameAndTermConditionsFormValues } from "dataflows/Checkout/NameAndTermConditions/INameAndTermConditionsFormValues";
import { IPhoneNumberFormValues } from "dataflows/Checkout/PhoneNumber/IPhoneNumberFormValues";
import { IPostalCodeFormValues } from "dataflows/Checkout/PostalCode/IPostalCodeFormValues";
import { IVerificationCodeFormValues } from "dataflows/Checkout/VerificationCode/IVerificationCodeFormValue";
import { clearGMVNotified } from "dataflows/GanaDinero/GanaDineroSlice";
import { selectOrders, selectOrdersMetadata } from "dataflows/MisCompras/MisComprasSelectors";
import { getOrders } from "dataflows/MisCompras/MisComprasThunks";
import { setSelectedStore } from "dataflows/Stores/IStoreSlice";
import { selectStore } from "dataflows/Stores/StoreSelectors";
import { useIsMounted } from "hooks/useIsMounted";
import { uniqueId } from "lodash";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import NetaLogo from "styled/icons/NetaLogo";
import { identifyUser, trackEvent } from "utils/tracker";

import {
  useDisclosure,
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Center,
  CloseButton,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  Flex,
  IconButton,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";

import { IBasketContainerProps } from "./BasketContainer/IBasketContainerProps";
import { IFindStoreWithMapContainerProps } from "./FindStoreWithMapContainer/IFindStoreWithMapContainerProps";
import { ICheckoutContainerProps } from "./ICheckoutContainerProps";
import { ICheckoutStep } from "./ICheckoutStep";
import { INameAndTermsConditionsContainerProps } from "./NameAndTermConditionsContainer/INameAndTermsConditionsContainerProps";
import { IOrderReviewContainerProps } from "./OrderReviewContainer/IOrderReviewContainerProps";
import { IOrderSuccessContainerProps } from "./OrderSuccessContainer/IOrderSuccessContainerProps";
import { IPhoneNumberContainerProps } from "./PhoneNumberContainer/IPhoneNumberContainerProps";
import { IPostalCodeContainerProps } from "./PostalCodeContainer/IPostalCodeContainerProps";
import { IStoreByDefaultContainerProps } from "./StoreByDefaultContainer/IStoreByDefaultContainerProps";
import { IVerificationCodeContainerProps } from "./VerificationCodeContainer/IVerificationCodeContainerProps";

const CheckoutLoader = (
  <Center>
    <Loader delay={300} />
  </Center>
);

const BasketContainer = dynamic<IBasketContainerProps>(
  () =>
    import(
      /* webpackChunkName: "Checkout-Basket" */
      "./BasketContainer/BasketContainer"
    ).then((mod) => mod.BasketContainer),
  {
    loading: () => CheckoutLoader,
  }
);

const NameAndTermsConditionsContainer = dynamic<INameAndTermsConditionsContainerProps>(
  () =>
    import(
      /* webpackChunkName: "Checkout-NameAndTermConditions" */
      "./NameAndTermConditionsContainer/NameAndTermsConditionsContainer"
    ).then((mod) => mod.NameAndTermsConditionsContainer),
  {
    loading: () => CheckoutLoader,
  }
);

const PhoneNumberContainer = dynamic<IPhoneNumberContainerProps>(
  () =>
    import(
      /* webpackChunkName: "Checkout-PhoneNumber" */
      "./PhoneNumberContainer/PhoneNumberContainer"
    ).then((mod) => mod.PhoneNumberContainer),
  {
    loading: () => CheckoutLoader,
  }
);

const VerificationCodeContainer = dynamic<IVerificationCodeContainerProps>(
  () =>
    import(
      /* webpackChunkName: "Checkout-VerificationCode" */
      "./VerificationCodeContainer/VerificationCodeContainer"
    ).then((mod) => mod.VerificationCodeContainer),
  {
    loading: () => CheckoutLoader,
  }
);

const PostalCodeContainer = dynamic<IPostalCodeContainerProps>(
  () =>
    import(
      /* webpackChunkName: "Checkout-PostalCode" */
      "./PostalCodeContainer/PostalCodeContainer"
    ).then((mod) => mod.PostalCodeContainer),
  {
    loading: () => CheckoutLoader,
  }
);

const StoreByDefaultContainer = dynamic<IStoreByDefaultContainerProps>(
  () =>
    import(
      /* webpackChunkName: "Checkout-UserFormContainer" */
      "./StoreByDefaultContainer/StoreByDefaultContainer"
    ).then((mod) => mod.StoreByDefaultContainer),
  {
    loading: () => CheckoutLoader,
  }
);

const FindStoreWithMapContainer = dynamic<IFindStoreWithMapContainerProps>(
  () =>
    import(
      /* webpackChunkName: "Checkout-FindStoreWithMapContainer" */
      "./FindStoreWithMapContainer/FindStoreWithMapContainer"
    ).then((mod) => mod.FindStoreWithMapContainer),
  {
    loading: () => CheckoutLoader,
  }
);

const OrderReviewContainer = dynamic<IOrderReviewContainerProps>(
  () =>
    import(
      /* webpackChunkName: "Checkout-OrderReview" */
      "./OrderReviewContainer/OrderReviewContainer"
    ).then((mod) => mod.OrderReviewContainer),
  {
    loading: () => CheckoutLoader,
  }
);

const OrderSuccessContainer = dynamic<IOrderSuccessContainerProps>(
  () =>
    import(
      /* webpackChunkName: "Checkout-OrderSuccess" */
      "./OrderSuccessContainer/OrderSuccessContainer"
    ).then((mod) => mod.OrderSuccessContainer),
  {
    loading: () => CheckoutLoader,
  }
);

/**
 * Renders the basket container
 * @param {IBasketContainerProps} props The props for the basket container
 * @returns {ReactElement} The basket container
 */
const renderBasketContainer = (props: IBasketContainerProps): ReactElement => {
  return <BasketContainer {...props} />;
};

/**
 * Renders the log in step container
 * @param {INameAndTermsConditionsContainerProps} props The props for the log in step container
 * @returns {ReactElement} The log in step container
 */
const renderNameAndTermConditionsContainer = (
  props: INameAndTermsConditionsContainerProps
): ReactElement => {
  return <NameAndTermsConditionsContainer {...props} />;
};

/**
 * Renders the phone number step container
 * @param {IPhoneNumberContainerProps} props The props for the phone number step container
 * @returns {ReactElement} The phone number step container
 */
const renderPhoneNumberContainer = (props: IPhoneNumberContainerProps): ReactElement => {
  return <PhoneNumberContainer {...props} />;
};

/**
 * Renders the verification code step container
 * @param {IVerificationCodeContainerProps} props The props for the verification code step container
 * @returns {ReactElement} The verification code step container
 **/
const renderVerificationCodeContainer = (props: IVerificationCodeContainerProps): ReactElement => {
  return <VerificationCodeContainer {...props} />;
};

/**
 * Render the postal code step container
 * @param {IPostalCodeContainerProps} props the props for the postal code step container
 * @returns {ReactElement} The postal code step container
 */
const renderPostalCodeContainer = (props: IPostalCodeContainerProps): ReactElement => {
  return <PostalCodeContainer {...props} />;
};

/**
 * Renders the store by default container
 * @param {IStoreByDefaultContainerProps} props The props for the store by default container
 * @returns {ReactElement} The store by default  container
 */
const renderStoreByDefaultContainer = (props: IStoreByDefaultContainerProps): ReactElement => {
  return <StoreByDefaultContainer {...props} />;
};

/**
 * Renders the find store container
 * @param {IFindStoreWithMapContainerProps} props The props for the find store container
 * @returns {ReactElement} The find store container
 */
const renderFindStoreWithMapContainer = (props: IFindStoreWithMapContainerProps): ReactElement => {
  return <FindStoreWithMapContainer {...props} />;
};

/**
 * Render the order review step container
 * @param {IOrderReviewContainerProps} props the props for the order review step container
 * @returns {ReactElement} The order review step container
 */
const renderOrderReviewContainer = (props: IOrderReviewContainerProps): ReactElement => {
  return <OrderReviewContainer {...props} />;
};

/**
 * Render the order success step container
 * @param {IOrderSuccessContainerProps} props the component props
 * @returns {ReactElement} The order review step container
 */
const renderOrderSuccessContainer = (props: IOrderSuccessContainerProps): ReactElement => {
  return <OrderSuccessContainer {...props} />;
};

/**
 * The checkout container.
 * @returns {ReactElement} The component.
 */
export const CheckoutContainer = ({ onlyLoginSteps }: ICheckoutContainerProps): ReactElement => {
  const dispatch = useDispatch();
  const basketItems = useSelector(selectBasketItems);
  const currentStep = useSelector(selectCurrentStep);
  const totalNetPrice = useSelector(selectTotalBasketPrice);
  const store = useSelector(selectStore);
  const isOpen = useSelector(selectIsOpen);
  const isPlacingOrder = useSelector(selectPlacingOrderStatus);
  const orderStatus = useSelector(selectOrderStatus);
  const btnRef = useRef<HTMLButtonElement>(null);
  const totalDiscountPrice = useSelector(selectTotalDiscountPrice);
  const isUserAuthenticated = useSelector(selectIsLoggedIn);
  const countDown = useSelector(selectCountDown);
  const loginErrorMessage = useSelector(selectErrorMessage);
  const isLoadingLogIn = useSelector(selectIsLoadingLogIn);
  const customer = useSelector(selectCustomer);
  const placeOrderErrorMessage = useSelector(selectPlaceOrderErrorMessage);
  const orders = useSelector(selectOrders);
  const metadata = useSelector(selectOrdersMetadata);
  const deviceId = useSelector(selectDeviceId);
  const isSendingOtpCode = useSelector(selectIsSendingOtpCode);
  const validationOtpSuccess = useSelector(selectSuccessValidationOtp);
  const isMounted = useIsMounted();

  const errorAlertMessage = customer?.deleted ? INVALID_CUSTOMER_MESSAGE : placeOrderErrorMessage;
  const [partialSumSuccess, setPartialSumSuccess] = useState<number>(0);
  const [couponSumSuccess, setCouponSumSuccess] = useState<number>(0);
  const [monetasSumSuccess, setMonetasSumSuccess] = useState<number>(0);
  const [totalSumSuccess, setTotalSumSuccess] = useState<number>(0);
  const [couponSuccess, setCouponSuccess] = useState<ICoupon[] | undefined>();
  const {
    isOpen: isOpenDisclosure,
    onOpen: onOpenDisclosure,
    onClose: onCloseDisclosure,
  } = useDisclosure();
  const router = useRouter();

  const [isClickingNextButton, setIsClickingNextButton] = useState(false);
  const [formHasError, setFormHasError] = useState(false);
  const [checkoutForm, setCheckoutForm] = useState<ICheckoutFormValues>();
  const [validationList, setValidationList] = useState(
    new Map(
      onlyLoginSteps
        ? [
            [CheckoutWizardSteps.NAME_AND_TERM_CONDITIONS, false],
            [CheckoutWizardSteps.PHONE_NUMBER, false],
            [CheckoutWizardSteps.VERIFICATION_CODE, true],
            [CheckoutWizardSteps.POSTAL_CODE, false],
          ]
        : [
            [CheckoutWizardSteps.BASKET, true],
            [CheckoutWizardSteps.NAME_AND_TERM_CONDITIONS, false],
            [CheckoutWizardSteps.PHONE_NUMBER, false],
            [CheckoutWizardSteps.VERIFICATION_CODE, true],
            [CheckoutWizardSteps.POSTAL_CODE, false],
            [CheckoutWizardSteps.STORE_BY_DEFAULT, true],
            [CheckoutWizardSteps.FIND_STORE, true],
            [CheckoutWizardSteps.ORDER_REVIEW, true],
            [CheckoutWizardSteps.ORDER_SUCCESS, true],
          ]
    )
  );

  const isValidStep = !formHasError || validationList.get(currentStep);

  const isRunningCountdown =
    countDown <= COUNTDOWN_TIMER_SECONDS &&
    countDown > 0 &&
    currentStep === CheckoutWizardSteps.VERIFICATION_CODE;

  useEffect(() => {
    if (customer && orders?.length == 0) {
      dispatch(
        getOrders({
          npp: metadata.perPage,
          page: metadata.currentPage,
          userId: customer.id,
        })
      );
    }
  }, []);

  useEffect(() => {
    if (isMounted && isUserAuthenticated) {
      const userInfo = { name: checkoutForm?.name, phone: checkoutForm?.phone };
      customer && identifyUser(customer?.id, userInfo);
      trackEvent(LOGIN_COMPLETED, [TrackerApp.Amplitude, TrackerApp.Segment]);
    }
  }, [isUserAuthenticated]);

  useEffect(() => {
    if (onlyLoginSteps) {
      dispatch(setCurrentStep(CheckoutWizardSteps.NAME_AND_TERM_CONDITIONS));
    }
  }, [isOpen, isUserAuthenticated]);

  useEffect(() => {
    if (validationOtpSuccess && onlyLoginSteps) {
      dispatch(onCloseAction());
      dispatch(setCurrentStep(CheckoutWizardSteps.BASKET));
    }
  }, [validationOtpSuccess, isUserAuthenticated]);

  useEffect(() => {
    if (isMounted && isUserAuthenticated) {
      const userInfo = { name: checkoutForm?.name, phone: checkoutForm?.phone };
      customer && identifyUser(customer?.id, userInfo);
      trackEvent(LOGIN_COMPLETED, [TrackerApp.Amplitude, TrackerApp.Segment]);
    }
  }, [isUserAuthenticated]);

  useEffect(() => {
    if (orderStatus === OrderStatus.SUBMITTED) {
      trackEvent(ORDER_COMPLETED, [TrackerApp.Amplitude, TrackerApp.Segment], {
        productName: basketItems.map((product) => product.name).join(";"),
        productSKU: basketItems.map((product) => product.sku).join(";"),
        categoryId: basketItems.map((product) => product.categoryId).join(";"),
        quantityProducts: basketItems.map((product) => product.quantity).join(";"),
        totalOrder: totalNetPrice,
        couponID: checkoutForm?.couponCode || undefined,
        totalSavings: totalDiscountPrice,
        orderID: undefined, //TODO: Capture the order ID.
        isCouponUsed: checkoutForm?.couponCode ? "Si" : "No",
      });

      dispatch(getCustomerInfo());
      dispatch(clearBasket());
      dispatch(clearGMVNotified());
      dispatch(setIsNewUserToFalse());
    }
  }, [orderStatus]);

  useEffect(() => {
    if (basketItems.length === 0 && currentStep < CheckoutWizardSteps.ORDER_SUCCESS) {
      dispatch(setCurrentStep(CheckoutWizardSteps.BASKET));
    }
  }, [basketItems, isUserAuthenticated]);

  /**
   * Add quantity to the basket
   * @param {string} productId The product id
   * @returns {void}
   **/
  const onAddToBasket = (productId: string) => dispatch(addQuantity(productId));

  /**
   * Remove quantity from the basket
   * @param {string} productId The product id
   * @returns {void}
   **/
  const onRemoveFromBasket = (productId: string) => dispatch(removeQuantity(productId));

  /**
   * On close panel action
   * @returns {void}
   **/
  const onClose = () => {
    if (currentStep === CheckoutWizardSteps.ORDER_SUCCESS) {
      dispatch(setCurrentStep(CheckoutWizardSteps.BASKET));
    }
    dispatch(clearPlaceOrderErrorMessage());
    dispatch(onCloseAction());
  };

  /**
   * Authenticate user with token
   * @param {string} accessToken Token for invoke login
   * @returns {VoidFunction} Void Function
   */
  const authenticateUserAccessToken = (accessToken?: string): void => {
    if (checkoutForm?.phone !== undefined && checkoutForm?.verificationCode !== undefined) {
      dispatch(
        acquireToken({
          username: checkoutForm.phone,
          code: checkoutForm.verificationCode,
          name: checkoutForm.name,
          accessToken,
          deviceId: !!deviceId
            ? deviceId
            : window.localStorage.getItem("local_device_id") ?? uniqueId(),
        })
      );
    }
  };

  /**
   * Save the checkout form
   * @param {Partial<ICheckoutFormValues>} formValues The form values
   * @returns {void}
   **/
  const saveFormValues = (formValues: Partial<ICheckoutFormValues>): void => {
    const checkoutFormValues = {
      ...checkoutForm,
      ...formValues,
    } as ICheckoutFormValues;
    setCheckoutForm(() => checkoutFormValues);
  };

  /**
   * On next button click callback
   * @returns {void}
   * */
  const loadNextStep = (): void => {
    if (validationList.get(currentStep)) {
      switch (currentStep) {
        case CheckoutWizardSteps.BASKET:
          if (isUserAuthenticated && !store) {
            dispatch(setCurrentStep(CheckoutWizardSteps.FIND_STORE));
          } else if (isUserAuthenticated && store) {
            dispatch(setCurrentStep(CheckoutWizardSteps.ORDER_REVIEW));
          } else {
            dispatch(moveToNextStep());
          }
          break;
        case CheckoutWizardSteps.VERIFICATION_CODE:
          if (!customer?.isNewUser && store) {
            dispatch(setCurrentStep(CheckoutWizardSteps.STORE_BY_DEFAULT));
          } else if (!customer?.isNewUser && !store) {
            dispatch(setCurrentStep(CheckoutWizardSteps.FIND_STORE));
          } else if (customer?.isNewUser) {
            dispatch(moveToNextStep());
          }
          break;
        case CheckoutWizardSteps.POSTAL_CODE:
          if (!store) {
            dispatch(setCurrentStep(CheckoutWizardSteps.FIND_STORE));
          } else {
            dispatch(moveToNextStep());
          }
          break;
        case CheckoutWizardSteps.STORE_BY_DEFAULT:
          dispatch(setCurrentStep(CheckoutWizardSteps.ORDER_REVIEW));
          break;
        default:
          dispatch(moveToNextStep());
      }
    }
  };

  /**
   * load previous step
   * @returns {void}
   **/
  const loadPreviousStep = (): void => {
    setIsClickingNextButton(false);
    if (currentStep <= CheckoutWizardSteps.ORDER_REVIEW && isUserAuthenticated) {
      dispatch(setCurrentStep(CheckoutWizardSteps.BASKET));
    } else {
      dispatch(moveToPreviousStep());
    }
    if (currentStep === CheckoutWizardSteps.VERIFICATION_CODE) {
      dispatch(clearIsOtpSent());
    }
    dispatch(clearPlaceOrderErrorMessage());
  };

  /**
   * Place order callback
   * @param {IOrder} order callback function
   * @returns {Function} The callback function
   * */
  const placeOrder = (order: ICheckoutOrder) => {
    dispatch(postPlaceOrder(order));
  };

  /**
   * send zip code callback
   * @param {{username: string, zipcode: string}} data callback function
   * @returns {Function} The callback function
   * */
  const sendZipCode = (data: { username: string; zipcode: string }) => {
    dispatch(postSendZipCode(data));
  };

  /**
   * Restarts all success variables
   * @returns { void }
   */
  const clearAllSuccessVariables = (): void => {
    setMonetasSumSuccess(0);
    setTotalSumSuccess(0);
    setPartialSumSuccess(0);
    setCouponSumSuccess(0);
  };

  /**
   * The action to be performed on clicking finish button
   * @returns {void}
   */
  const finishOrder = () => {
    clearAllSuccessVariables();
    dispatch(onCloseAction());
    dispatch(setCurrentStep(CheckoutWizardSteps.BASKET));
    if (customer) {
      dispatch(
        getOrders({
          npp: metadata.perPage,
          page: metadata.currentPage,
          userId: customer.id,
        })
      );
    }
    router.push(MIS_COMPRAS_ROUTE);
  };

  /**
   * Set the countdown timer
   * @param {number} seconds the second elapsed.
   * @returns {void}
   */
  const setCountDown = (seconds: number) => {
    dispatch(setCountDownAction(seconds));
  };

  /**
   * The reset countdown timer action.
   * @returns {void}
   */
  const resetCountDown = () => {
    dispatch(resetCountDownAction());
  };

  /**
   * Wizard on click button action
   * @return {void}
   */
  const onButtonClick = () => {
    if (currentStep === CheckoutWizardSteps.BASKET && basketItems.length === 0 && !onlyLoginSteps) {
      onClose();
    } else if (currentStep === CheckoutWizardSteps.ORDER_SUCCESS) {
      finishOrder();
    } else {
      setIsClickingNextButton(true);
    }
  };

  /**
   * Handles logic to update store
   * @returns { void }
   */
  const handleUpdateStore = (): void => {
    dispatch(setCurrentStep(CheckoutWizardSteps.FIND_STORE));
    dispatch(setSelectedStore(undefined));
  };

  /**
   * Gets the wizard button label.
   * @returns {string} the button label
   */
  const getButtonLabel = () => {
    if (currentStep === CheckoutWizardSteps.BASKET && basketItems.length === 0 && !onlyLoginSteps) {
      return "Ir a comprar";
    } else if (currentStep === CheckoutWizardSteps.STORE_BY_DEFAULT) {
      return "¡Sí!, quiero recoger aquí";
    } else if (currentStep === CheckoutWizardSteps.ORDER_SUCCESS) {
      return "Ver el estado de mi orden";
    } else if (currentStep === CheckoutWizardSteps.ORDER_REVIEW) {
      return "Realizar Pedido";
    } else {
      return "Continuar";
    }
  };

  const shareDiscountCodeText = ` 
  ${SHARE_DISCOUNT_CODE_TEMPLATE.split("{código}")[0]} *${customer?.referralCode}*\n
  ${SHARE_DISCOUNT_CODE_TEMPLATE.split("{código}")[1]?.split("{liga}")[0]}\n 
  https://neta.mx/?${store?.hosts.split(".")[0]}?utm_campaign=referral&utm_source=wa\n
  ${SHARE_DISCOUNT_CODE_TEMPLATE.split("{código}")[1]?.split("{liga}")[1]}`;

  /**
   * Validate otp customer
   * @param {string} phone The phone number
   * @param {string} code The code validation
   * @returns {void}
   **/
  const validateOtpCode = (phone: string, code: string): void => {
    const dataValidateOtpRequest = { origin: phone, platform: PLATFORM_OTP_LOGIN, code };
    dispatch(validateOtpCodeAction(dataValidateOtpRequest));
  };

  /**
   * Register the user
   * @param {string} phone The phone number
   * @returns {void}
   **/
  const sendOtpCode = (phone: string): void => {
    const dataOtpRequest = {
      origin: phone,
      platform: PLATFORM_OTP_LOGIN,
      deviceId: !!deviceId
        ? deviceId
        : window.localStorage.getItem("local_device_id") ?? uniqueId(),
    };
    dispatch(sendOtpCodeAction(dataOtpRequest));
  };

  let checkoutSteps: ICheckoutStep[] = [
    {
      id: CheckoutWizardSteps.BASKET,
      render: (): ReactElement =>
        renderBasketContainer({
          validationList,
          setValidationList,
          isClickingNextButton,
          setIsClickingNextButton,
          basketItems,
          onAddToBasket,
          onRemoveFromBasket,
          currentStep,
          loadNextStep,
        }),
    },
    {
      id: CheckoutWizardSteps.NAME_AND_TERM_CONDITIONS,
      render: (): ReactElement =>
        renderNameAndTermConditionsContainer({
          validationList,
          setValidationList,
          isClickingNextButton,
          setIsClickingNextButton,
          nameAndTermConditionsFormValues: checkoutForm as INameAndTermConditionsFormValues,
          saveFormValues,
          currentStep,
          loadNextStep,
          setFormHasError,
        }),
    },
    {
      id: CheckoutWizardSteps.PHONE_NUMBER,
      render: (): ReactElement =>
        renderPhoneNumberContainer({
          validationList,
          setValidationList,
          isClickingNextButton,
          setIsClickingNextButton,
          phoneNumberFormValues: checkoutForm as IPhoneNumberFormValues,
          saveFormValues,
          currentStep,
          loadNextStep,
          setFormHasError,
          sendOtpCode,
        }),
    },
    {
      id: CheckoutWizardSteps.VERIFICATION_CODE,
      render: (): ReactElement =>
        renderVerificationCodeContainer({
          validationList,
          setValidationList,
          isClickingNextButton,
          setIsClickingNextButton,
          verificationCodeFormValues: checkoutForm as IVerificationCodeFormValues,
          saveFormValues,
          currentStep,
          loadNextStep,
          isUserAuthenticated,
          authenticateUserAccessToken,
          setFormHasError,
          setCountDown,
          countDown,
          loginErrorMessage,
          isLoadingLogIn,
          loadPreviousStep,
          resetCountDown,
          userPhone: checkoutForm?.phone,
          name: checkoutForm?.name,
          validateOtpCode,
          sendOtpCode,
        }),
    },
    {
      id: CheckoutWizardSteps.POSTAL_CODE,
      render: (): ReactElement =>
        renderPostalCodeContainer({
          validationList,
          setValidationList,
          isClickingNextButton,
          setIsClickingNextButton,
          postalCodeFormValues: checkoutForm as IPostalCodeFormValues,
          saveFormValues,
          currentStep,
          loadNextStep,
          setFormHasError,
          sendZipCode: (zipcode: string) => {
            if (customer) {
              sendZipCode({
                username: customer.username,
                zipcode,
              });
            }
          },
        }),
    },
    {
      id: CheckoutWizardSteps.STORE_BY_DEFAULT,
      render: (): ReactElement =>
        renderStoreByDefaultContainer({
          validationList,
          setValidationList,
          isClickingNextButton,
          setIsClickingNextButton,
          currentStep,
          loadNextStep,
          loadPreviousStep,
        }),
    },
    {
      id: CheckoutWizardSteps.FIND_STORE,
      render: (): ReactElement =>
        renderFindStoreWithMapContainer({
          validationList,
          setValidationList,
          isClickingNextButton,
          setIsClickingNextButton,
          currentStep,
          loadNextStep,
          loadPreviousStep,
        }),
    },
    {
      id: CheckoutWizardSteps.ORDER_REVIEW,
      render: (): ReactElement =>
        renderOrderReviewContainer({
          totalNetPrice,
          isClickingNextButton,
          setIsClickingNextButton,
          customerName: customer?.name || "",
          currentStep,
          updateStore: handleUpdateStore,
          loadNextStep,
          saveFormValues,
          totalDiscountPrice,
          customerCurrentNetaWallet: customer?.customerCurrentNetaWallet || "0",
          orderStatus,
          couponCodeFormValues: checkoutForm as ICouponCodeFormValues,
          basketItems,
          loadPreviousStep,
          setPartialSumSuccess,
          setCouponSumSuccess,
          setMonetasSumSuccess,
          setTotalSumSuccess,
          setCouponSuccess,
          placeOrder: () =>
            placeOrder({
              customerId: Number(customer?.id),
              storeId: store?.id,
              discountCoupon: checkoutForm?.couponCode || "",
              basketItems: basketItems.map((item) => ({
                id: item.id,
                quantity: item.quantity,
              })),
            }),
        }),
    },
    {
      id: CheckoutWizardSteps.ORDER_SUCCESS,
      render: (): ReactElement =>
        renderOrderSuccessContainer({
          shareDiscountCodeText,
          loader: CheckoutLoader,
          partialSumSuccess,
          couponSumSuccess,
          monetasSumSuccess,
          totalSumSuccess,
          couponSuccess,
        }),
    },
  ];

  if (onlyLoginSteps) {
    checkoutSteps = checkoutSteps.filter((step) => loginCheckoutWizardSteps.includes(step.id));
  }

  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      size="md"
      finalFocusRef={btnRef}
      closeOnEsc={!isPlacingOrder}
      closeOnOverlayClick={!isPlacingOrder}
    >
      <DrawerOverlay />
      <DrawerContent>
        <Flex
          alignItems="center"
          bg={currentStep == CheckoutWizardSteps.ORDER_SUCCESS ? "white" : "netaRed.500"}
          h="58px"
        >
          <IconButton
            bg="none"
            disabled={
              currentStep === CheckoutWizardSteps.BASKET || isRunningCountdown || isPlacingOrder
            }
            colorScheme="white"
            _hover={{ bg: "transparent" }}
            _focus={{
              boxShadow: "0 0 1px 2px transparent",
            }}
            size="md"
            aria-label="step back"
            icon={<FaChevronLeft />}
            onClick={loadPreviousStep}
            hidden={
              (currentStep === CheckoutWizardSteps.NAME_AND_TERM_CONDITIONS && onlyLoginSteps) ||
              currentStep === CheckoutWizardSteps.BASKET ||
              currentStep === CheckoutWizardSteps.ORDER_SUCCESS
            }
          />
          <Spacer display="flex" alignItems="center" justifyContent="center">
            <Box hidden={currentStep == CheckoutWizardSteps.ORDER_SUCCESS}>
              <NetaLogo />
            </Box>
          </Spacer>

          <IconButton
            bg="none"
            colorScheme={currentStep == CheckoutWizardSteps.ORDER_SUCCESS ? "gray" : "white"}
            _hover={{ bg: "transparent" }}
            _focus={{
              boxShadow: "0 0 1px 2px transparent",
            }}
            size="md"
            aria-label="close basket"
            disabled={isPlacingOrder}
            icon={<BsXLg />}
            onClick={onClose}
          />
        </Flex>

        <DrawerBody>
          <Wizard
            externalOverrides={{
              currentStep: currentStep,
              next: loadNextStep,
              previous: loadPreviousStep,
            }}
          >
            <Steps>
              {checkoutSteps.map((step) => (
                <Step key={step.id}>{() => step.render()}</Step>
              ))}
            </Steps>
          </Wizard>
        </DrawerBody>

        {basketItems.length !== 0 &&
          currentStep === CheckoutWizardSteps.BASKET &&
          !onlyLoginSteps && (
            <OrderSummary totalDiscountPrice={totalDiscountPrice} totalNetPrice={totalNetPrice} />
          )}
        <DrawerFooter>
          <VStack width="100%">
            <Alert
              maxHeight="180px"
              status="error"
              rounded="lg"
              hidden={
                errorAlertMessage === undefined ||
                isPlacingOrder ||
                currentStep !== CheckoutWizardSteps.ORDER_REVIEW
              }
            >
              <AlertIcon />
              <AlertTitle mr={10}>{errorAlertMessage}</AlertTitle>
              <CloseButton
                position="absolute"
                right="10px"
                top="8px"
                onClick={() => dispatch(clearPlaceOrderErrorMessage())}
              />
            </Alert>
            <Button
              _hover={{ backgroundColor: "none" }}
              _disabled={{ backgroundColor: "netaGray.500" }}
              colorScheme="netaBlue"
              disabled={
                !isValidStep ||
                isPlacingOrder ||
                isSendingOtpCode ||
                (customer?.deleted && currentStep === CheckoutWizardSteps.ORDER_REVIEW)
              }
              textColor="white"
              width="100%"
              borderRadius="xl"
              fontSize="18px"
              onClick={onButtonClick}
              height="56px"
              hidden={
                currentStep === CheckoutWizardSteps.VERIFICATION_CODE ||
                currentStep === CheckoutWizardSteps.FIND_STORE
              }
              isLoading={isPlacingOrder || isSendingOtpCode}
              loadingText="Ya merito..."
              spinnerPlacement="end"
            >
              {getButtonLabel()}
            </Button>
            {currentStep === CheckoutWizardSteps.ORDER_REVIEW && (
              <Text>
                Al dar clic en hacer pedido, aceptas los{" "}
                <Link
                  onClick={onOpenDisclosure}
                  textDecoration="underline"
                  cursor="pointer"
                  fontWeight="700"
                >
                  términos y condiciones
                </Link>{" "}
                de servicio de la plataforma
              </Text>
            )}
            <Button
              hidden={currentStep !== CheckoutWizardSteps.STORE_BY_DEFAULT}
              height="56px"
              width="100%"
              textColor="#3870ff"
              border="1px solid #3870ff"
              colorScheme="white"
              borderRadius="xl"
              onClick={() => dispatch(setCurrentStep(CheckoutWizardSteps.FIND_STORE))}
            >
              No, prefiero otra tiendita
            </Button>
          </VStack>
        </DrawerFooter>
      </DrawerContent>
      <Modal
        size="4xl"
        isCentered
        onClose={onCloseDisclosure}
        isOpen={isOpenDisclosure}
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>TÉRMINOS Y CONDICIONES</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <TermsAndConditionsText />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Drawer>
  );
};
