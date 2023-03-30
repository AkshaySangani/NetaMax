export enum PickUpWizardSteps {
  INPUT_TOKEN = 1,
  TOKEN_SUCCESS = 2,
  ORDER_DETAILS = 3,
  ORDER_CONFIRMED = 4,
  RESET_FLOW = 5,
}

export const PICKUP_TOKEN_LENGTH = 6;

export const PICKUP_TOKEN_ERROR_CODE_NO_PROCESS = "ECONNABORTED";
export const PICKUP_TOKEN_ERROR_CODE_ALREADY_PICKED_UP = "This order is already picked up";

export const PICKUP_TOKEN_ERROR_MESSAGE_NO_PROCESS =
  "No pudimos procesar tu entrega, intenta de nuevo mas tarde.";
export const PICKUP_TOKEN_ERROR_MESSAGE_NO_PICKED_UP =
  "La orden no pudo ser entregada correctamente.";
export const PICKUP_TOKEN_ERROR_MESSAGE_ALREADY_PICKED_UP =
  "La orden seleccionada ya fue entregada anteriormente";
export const PICKUP_TOKEN_ERROR_MESSAGE_INVALID_CODE =
  "El código que ingresaste es inválido, vuelve a intentarlo.";
