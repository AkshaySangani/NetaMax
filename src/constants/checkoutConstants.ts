export enum CheckoutWizardSteps {
  BASKET = 1,
  NAME_AND_TERM_CONDITIONS = 2,
  PHONE_NUMBER = 3,
  VERIFICATION_CODE = 4,
  POSTAL_CODE = 5,
  STORE_BY_DEFAULT = 6,
  FIND_STORE = 7,
  ORDER_REVIEW = 8,
  ORDER_SUCCESS = 9,
}

export const loginCheckoutWizardSteps = [
  CheckoutWizardSteps.BASKET,
  CheckoutWizardSteps.NAME_AND_TERM_CONDITIONS,
  CheckoutWizardSteps.PHONE_NUMBER,
  CheckoutWizardSteps.VERIFICATION_CODE,
];

export enum OrderStatus {
  DRAFT = "draft",
  SUBMITTED = "submitted",
  REJECTED = "rejected",
}

export const ASSISTANCE_PHONE_NUMBER = "5215545439866";

export const PLACE_ORDER_URL = "order/";

export const PLACE_ORDER_URL_V2 = `${process.env.NEXT_PUBLIC_API_ROOT_URL}/api/v2/order`;

export const COUNTDOWN_TIMER_SECONDS = 45;

export const OTP_CODE_LENGTH = 4;

export const SHARE_DISCOUNT_CODE_TEMPLATE =
  "Te *regalo $20 pesos* para que compres en *Neta* usando mi código:{código} Encontrarás los mejores productos a los mejores precios de la ciudad en la liga. Entra y chécala en:{liga} *No olvides ingresar el código de descuento al finalizar el pedido* (Solo aplica para clientes nuevos en su primera orden)";

export const INVALID_CUSTOMER_MESSAGE =
  "Lo sentimos, tu orden no ha sido procesada debido a que presenta una conducta inapropiada según nuestros Términos y condiciones de Uso, contacta a soporte si consideras que hay un error.";

export const PLACES_STATUS_OK = "OK";

export const PLACES_STATUS_ZERO_RESULTS = "ZERO_RESULTS";

export const NUMBER_WITH_PREFIX_LENGTH = 12;

export const NUMBER_WITHOUT_PREFIX_LENGTH = 10;

export const MIS_COMPRAS_ROUTE = "/mi-cuenta/mis-compras";

export const MI_CUENTA_ROUTE = "/mi-cuenta";
